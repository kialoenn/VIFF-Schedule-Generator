import * as React from 'react';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import dayjs from 'dayjs';
import { TimeField } from '@mui/x-date-pickers/TimeField';
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

    console.log(screenData);

    const getDateTime = (timeString) => {
        const currentDate = new Date();
        const dateString = `${currentDate.getFullYear()}-${currentDate.getMonth() + 1}-
        ${currentDate.getDate()} ${timeString}`;

        const newDate = new Date(dateString);

        console.log(newDate.toString());
        return dateString;
    };

    const parseTime = (dateString) => {
        const date = new Date(dateString);

        const hours = date.getHours().toString().padStart(2, '0');
        const minutes = date.getMinutes().toString().padStart(2, '0');
        const seconds = date.getSeconds().toString().padStart(2, '0');

        const timeString = `${hours}:${minutes}:${seconds}`;

        console.log(timeString);
        return timeString;
    };

    const closeMenu = () => {
        scheduleContext.dispatch(
            {
                type: CLOSE_CUSTOM,
            },
        );
    };

    const changeScreen = () => {
        scheduleContext.dispatch(
            {
                type: CHANGE_SCREEN,
                screen: screenData,
                id: targetID,
            },
        );
    };
    return (
        <div className={targetID.display ? 'rightsidebar' : 'hide'}>
            <div style={{ cursor: 'pointer' }}
                onClick={() => closeMenu()}>
                <CloseIcon></CloseIcon>
            </div>

            <Box>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">FilmTitle</InputLabel>
                    <Input id="component-simple" value={screenData.filmTitle}
                        onChange={(e) => screenData.filmTitle = e.target.value}
                    />
                </FormControl>
                <FormControl variant="standard">
                    <InputLabel htmlFor="component-simple">PageLocation</InputLabel>
                    <Input id="component-simple" value={screenData.pageLocation} />
                </FormControl>
                <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <TimeField
                        label="StartTime"
                        value={dayjs(new Date(getDateTime(screenData.startTime)))}
                        onChange={(newvalue) => console.log('date changed' + parseTime(newvalue))}
                        format="HH:mm:ss"
                    />
                    <TimeField
                        label="Duration"
                        value={dayjs(new Date(getDateTime(screenData.duration)))}
                        onChange={(newvalue) => console.log('date changed' + parseTime(newvalue))}
                        format="HH:mm:ss"
                    />
                </LocalizationProvider>
            </Box>

        </div>

    );
};

export default CustomBar;

