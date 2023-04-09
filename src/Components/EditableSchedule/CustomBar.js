import { useEffect, useState } from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { FormHelperText } from '@mui/material';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import CloseIcon from '@mui/icons-material/Close';

import { CLOSE_CUSTOM, CHANGE_SCREEN } from '../../Context/ActionType';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';

// CSS import
import '../../css/Sidebar.css';

const CustomBar = () => {
    const scheduleContext = useScheduleContext();
    const targetID = scheduleContext.customBarTarget;
    const screenData = scheduleContext.gridScreenTimes.find((date) => date.id == targetID.dateID).
        venue.find((venue) => venue.id == targetID.venueID).
        screens.find((screen) => screen.id == targetID.screenID);

    const [screenInfo, setScreenInfo] = useState({
        filmTitle: '',
        pageLocation: '',
        startTime: '',
        duration: '',
        filmTitleText: 4,
        filmDetailsText: 3,
    });

    const [titleError, setTitleError] = useState(false);
    const [detailError, setDetailError] = useState(false);

    const setScreenInfoValue = (key, value) => {
        setScreenInfo((prevState) => ({
            ...prevState,
            [key]: value,
        }));
    };

    useEffect(() => {
        setScreenInfo({
            filmTitle: screenData.filmTitle,
            pageLocation: screenData.pageLocation,
            startTime: screenData.startTime,
            duration: screenData.duration,
            filmTitleText: screenData.filmTitleText,
            filmDetailsText: screenData.filmDetailsText,
        });
    }, [screenData]);

    const getDateTime = (timeString) => {
        const currentDate = new Date();
        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-
        ${currentDate.getDate()} ${timeString}`;

        return dateString;
    };

    const parseTime = (dateString, type) => {
        const date = new Date(dateString);

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        if (type == 'duration') {
            const timeString = `${hours}:${minutes}`;
            setScreenInfoValue('duration', timeString);

            return timeString;
        } else {
            const timeString = `${hours}:${minutes}:${seconds}`;
            setScreenInfoValue('startTime', timeString);
            return timeString;
        }
    };

    const closeMenu = () => {
        scheduleContext.dispatch(
            {
                type: CLOSE_CUSTOM,
            },
        );
    };

    const changeScreen = () => {
        const readyToChange = true;
        if (isNaN(screenInfo.filmTitleText)) {
            setTitleError(true);
            readyToChange = false;
        };

        if (isNaN(screenInfo.filmDetailsText)) {
            setDetailError(true);
            readyToChange = false;
        }

        if (readyToChange) {
            setScreenInfoValue('filmTitleText', Number.parseFloat(screenInfo.filmTitleText));
            setScreenInfoValue('filmDetailsText', Number.parseFloat(screenInfo.filmDetailsText));
            scheduleContext.dispatch(
                {
                    type: CHANGE_SCREEN,
                    screen: screenInfo,
                    id: targetID,
                },
            );
        }
    };
    return (
        <div className={targetID.display ? 'rightsidebar' : 'hide'}>
            <div style={{ cursor: 'pointer' }}
                onClick={() => closeMenu()}>
                <CloseIcon></CloseIcon>
            </div>

            <Box
                sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-evenly',
                    gap: 3,

                }}
            >
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">FilmTitle</InputLabel>
                    <Input id="component-simple" value={screenInfo.filmTitle}
                        onChange={(e) => {
                            setScreenInfoValue('filmTitle', e.target.value);
                        }}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">PageLocation</InputLabel>
                    <Input id="component-simple" value={screenInfo.pageLocation}
                        onChange={(e) => {
                            setScreenInfoValue('pageLocation', e.target.value);
                        }}
                    />
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeField
                        label="StartTime"
                        value={dayjs(new Date(getDateTime(screenInfo.startTime)))}
                        onChange={(newvalue) => parseTime(newvalue, 'startTime')}
                        format="HH:mm:ss"
                    />
                    <TimeField
                        label="Duration"
                        value={dayjs(new Date(getDateTime(screenInfo.duration)))}
                        onChange={(newvalue) => parseTime(newvalue, 'duration')}
                        format="HH:mm"
                    />
                </LocalizationProvider>

                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">FilmTitle Font Size</InputLabel>
                    <Input id="component-simple" value={screenInfo.filmTitleText}
                        onChange={(e) => {
                            setTitleError(false);
                            setScreenInfoValue('filmTitleText', e.target.value);
                        }}
                    />
                    {titleError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid number</FormHelperText>}
                </FormControl>

                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">FilmDetail Font Size</InputLabel>
                    <Input id="component-simple" value={screenInfo.filmDetailsText}
                        onChange={(e) => {
                            setDetailError(false);
                            setScreenInfoValue('filmDetailsText', e.target.value);
                        }}
                    />
                    {detailError && <FormHelperText sx={{ color: 'red' }}>Please enter a valid number</FormHelperText>}
                </FormControl>
            </Box>

            <Button variant="contained"
                onClick={() => {
                    changeScreen();
                }}
            >
                Change
            </Button>

        </div>

    );
};

export default CustomBar;

