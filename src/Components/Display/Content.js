// Customized components import
import MyDocument from '../PreviewPDF/PDF';
import RGB from '../ClassLib/RGB';
import FileUploader from './FileUpload';

// CSS import
import '../../css/Header.css';

// External import
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import { PDFViewer } from '@react-pdf/renderer';
import { useState, useEffect } from 'react';

const Content = (props) => {
    const pdfSettings = {
        schedulePerPage: 4,
    };

    const [parsedSchedule, setParsedSchedule] = useState([]);
    const [parsedGridVenues, setParsedGridVenues] = useState({});
    const [colourInfo, setColourInfo] = useState([]);
    const [showData, setShowData] = useState(false);

    const convertColour = () => { };

    const handleColourFile = (event) => {
        const dataFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(dataFile);

        fileReader.onload = () => {
            const colourData = fileReader.result;
            const lines = colourData.split('\n');
            for (let i = 0; i < lines.length - 1; i++) {
                const row = lines[i].split(' ');
                const code = row[0];
                let c = row[2];
                let m = row[3];
                let y = row[4];
                let k = row[5];

                // Change the % string to number
                c = parseInt(c.substring(0, c.indexOf('%')));
                m = parseInt(m.substring(0, m.indexOf('%')));
                y = parseInt(y.substring(0, y.indexOf('%')));
                k = parseInt(k.substring(0, k.indexOf('%')));
                // Colour with cmyk
                // cmykColour = new CMYK(code, c, m, y, k);

                // Converting cmyk to rgb
                // referecne: https://www.rapidtables.com/convert/color/cmyk-to-rgb.html
                // R = 255 * (1-C) * (1-K); round values for all
                // G = 255 * (1-M) * (1-K)
                // B = 255 * (1-Y) * (1-K)
                const hundred = 100;
                c = c / hundred;
                m = m / hundred;
                y = y / hundred;
                k = k / hundred;
                const range = 255;
                const r = Math.round(range * (1 - c) * (1 - k));
                const g = Math.round(range * (1 - m) * (1 - k));
                const b = Math.round(range * (1 - y) * (1 - k));
                const rgbColour = new RGB(code, r, g, b);

                // if we need to use cmyk values at this point, change the below
                // codes to colourInfo[i] = cmykColour;
                colourInfo[i] = rgbColour;
            }
            console.log(colourInfo);
            console.log(colourInfo.length);
            setColourInfo(colourInfo);
        };
    };

    const CheckData = () => {
        if (parsedSchedule.length > 0) {
            if (parsedGridVenues.size > 0) {
                mapVenueName();
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

    const mapVenueName = () => {
        const nextParsedSchedule = parsedSchedule.map((entry) => {
            entry.venue.map((venueEntry) => {
                venueEntry.venueName =
                    parsedGridVenues.has(venueEntry.venueName) ?
                        parsedGridVenues.get(venueEntry.venueName) :
                        venueEntry.venueName;
                return venueEntry;
            });
            return entry;
        });
        console.log(nextParsedSchedule);
        setParsedSchedule(nextParsedSchedule);
    };

    return (
        <>
            <div id="content" style={{ height: 1000 }}>
                <h3>Dashboard</h3>

                <div id="upload1">
                    {/* Upload Files: <DragDrop setParsedSchedule={setParsedSchedule} /> */}

                    <div id="file-upload">
                        <FileUploader setParsedSchedule={setParsedSchedule} setParsedGridVenues={setParsedGridVenues} />
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
                        <PDFViewer width={1024} height={768}>
                            <MyDocument data={{ pdfSettings, parsedSchedule }} />
                        </PDFViewer>
                    ) : (
                        <div id="generateMsg"></div>
                    )}
                </div>
            </div>
        </>
    );
};

export default Content;
