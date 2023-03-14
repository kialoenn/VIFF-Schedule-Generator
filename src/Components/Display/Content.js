// Customized components import
import MyDocument from '../PreviewPDF/PDF';
import FileUploader from './FileUpload';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';

// CSS import
import '../../css/Header.css';

// External import
import Button from '@mui/material/Button';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';
import SchedulePreview from '../EditableSchedule/SchedulePreview';

const Content = (props) => {
    const pdfSettings = {
        schedulePerPage: 4,
    };

    const [parsedSchedule, setParsedSchedule] = useState([]);
    const [parsedGridVenues, setParsedGridVenues] = useState({});
    const [colourInfo, setColourInfo] = useState([]);
    const [showData, setShowData] = useState(false);

    const scheduleContext = useScheduleContext();
    const parsedScheduleContext = scheduleContext.gridScreenTimes;

    const CheckData = () => {
        if (scheduleContext.gridScreenTimes.length > 0) {
            if (parsedGridVenues.size > 0) {
                scheduleContext.mapVenueName(parsedGridVenues);
            }
            console.log('colour info: ', colourInfo);
            if (colourInfo.size > 0) {
                insertColour();
            }
            setShowData(!showData);
            document.getElementById('upload1').style.display = 'none';
            document.getElementById('file-upload').style.display = 'none';
            document.getElementById('generatePDF-btn').style.display = 'none';
        } else {
            document.getElementById('generateMsg').innerHTML =
                'Please upload all files first';
        }
        return parsedSchedule.length > 0;
    };

    const insertColour = () => {
        const colorSchedule = parsedScheduleContext.map((entry) => {
            entry.venue.map((venueEntry) => {
                venueEntry.screens.map((screenEntry) => {
                    screenEntry.colour =
                        colourInfo.has(screenEntry.movieType) ?
                            colourInfo.get(screenEntry.movieType) :
                            'unknown';
                    return screenEntry;
                });
                return venueEntry;
            });
            return entry;
        });
        // console.log(colorSchedule);
        setParsedSchedule(colorSchedule);
        // console.log("parsed schedule after inserting colour: \n", parsedSchedule);
    };

    return (
        <>
            <div id="content" style={{ height: 1000 }}>
                <h3>Dashboard</h3>

                <div id="upload1">
                    {/* Upload Files: <DragDrop setParsedSchedule={setParsedSchedule} /> */}

                    <div id="file-upload">
                        <FileUploader setParsedSchedule={setParsedSchedule}
                            setParsedGridVenues={setParsedGridVenues}
                            setColourInfo={setColourInfo} />
                    </div>

                </div>

                <div id="generatePDF">
                    <div id="generatePDF-btn">
                        <Button
                            variant="contained"
                            onClick={CheckData}
                            sx={{
                                borderRadius: 50, width: 200, height: 40,
                            }}

                        >
                            Generate PDF <span className="btn-icon"><KeyboardDoubleArrowRightIcon /></span>
                        </Button>
                    </div>

                    {showData ? (
                        <div>
                            <PDFViewer width={1024} height={768}>
                                <MyDocument data={{ pdfSettings, parsedScheduleContext }} />
                            </PDFViewer>
                            <SchedulePreview></SchedulePreview>
                        </div>

                    ) : (
                        <div id="generateMsg"></div>
                    )}


                </div>
            </div>
        </>
    );
};

export default Content;
