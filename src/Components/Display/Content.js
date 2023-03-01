// Customized components import
import MyDocument from '../PreviewPDF/PDF';
import Node from '../ClassLib/Node';
import RGB from '../ClassLib/RGB';
import DragDrop from './Dropzone';

// CSS import
import '../../css/Header.css';

// External import
import Button from '@mui/material/Button';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';

const Content = (props) => {
    const pdfSettings = {
        schedulePerPage: 4,
    };

    const [parsedSchedule, setParsedSchedule] = useState([]);
    const [colourInfo, setColourInfo] = useState([]);
    const [showData, setShowData] = useState(false);

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


    const handleFileUpload = (event) => {
        const file = event.target.files[0];
        const reader = new FileReader();
        reader.readAsText(file, 'ANSI');

        reader.onload = () => {
            const csvData = reader.result;
            const lines = csvData.split('\n');
            const movieInfo = [];
            for (let i = 0; i < lines.length - 1; i++) {
                const row = lines[i].split('\t');
                for (const { } of row) {
                    let date = new Date(row[0]);
                    date = date.toLocaleDateString('en-CA', { weekday: 'long' }) + ', ' +
                        date.toLocaleDateString('en-CA', { month: 'long', day: 'numeric' });
                    const movie_name = row[1];
                    const code = row[2];
                    const screen_time_min = row[3];
                    const screen_time = row[4];
                    const movie_type = row[5];
                    const start_time = row[6];
                    const venue_info = row[7];
                    const page_number = row[8].replace('\r', '');

                    const node = new Node(date, movie_name, code, screen_time_min,
                        screen_time, movie_type, start_time, venue_info, page_number);

                    movieInfo[i] = node;
                }
            }
            console.log(movieInfo);
            console.log(movieInfo.length);
            createMap(movieInfo);
        };
    };

    const createMap = (movieInfo) => {
        const scheduleDetailMap = new Map();
        for (const item of movieInfo) {
            if (!scheduleDetailMap.has(item.date)) {
                const venuesMap = new Map();
                const screenMap = new Map();
                screenMap.set(item.code, item);
                venuesMap.set(item.venue_info, screenMap);
                scheduleDetailMap.set(item.date, venuesMap);
            } else {
                if (!scheduleDetailMap.get(item.date).has(item.venue_info)) {
                    const screenMap = new Map();
                    screenMap.set(item.code, item);
                    scheduleDetailMap.get(item.date).set(item.venue_info, screenMap);
                } else {
                    if (!scheduleDetailMap.get(item.date).get(item.venue_info).has(item.code)) {
                        scheduleDetailMap.get(item.date).get(item.venue_info).set(item.code, item);
                    }
                }
            }
        }

        console.log('map', scheduleDetailMap);
        const testData = Array.from(scheduleDetailMap, ([date, venue]) => (
            {
                date: date,
                venue: Array.from(venue, ([name, screens]) => (
                    {
                        venueName: name,
                        screens: Array.from(screens, ([screenName, screenInfo]) => (
                            {
                                screenTitle: screenName,
                                startTime: screenInfo.start_time,
                                duration: screenInfo.screen_time,
                                pageLocation: screenInfo.page_number,
                            })),
                    }),
                ),
            }));

        let parsedScheduleIndex = 0;
        for (const item of testData) {
            parsedSchedule[parsedScheduleIndex] = item;
            parsedScheduleIndex++;
        }
        console.log('array: ', testData);
        setParsedSchedule(parsedSchedule);
        console.log('array: ', parsedSchedule);
        console.log(parsedSchedule.length);
    };

    const CheckData = () => {
        console.log(parsedSchedule.length > 0);
        if (parsedSchedule.length > 0) {
            setShowData(!showData);
        }

        setParsedSchedule(parsedSchedule);
        return (parsedSchedule.length > 0);
    };

    return (
        <>
          
               
                    
                        {/* <Button variant="contained" component="label" >
                            Upload GridScreenTimes
                            <input hidden accept=".tab, .csv" multiple type="file" onInput={handleFileUpload} />
                        </Button>
                        <Button variant="contained" component="label">
                            Upload Colours File
                            <input hidden accept=".tab, .csv" multiple type="file" onInput={handleColourFile} />
                        </Button> */}


             
      
            <div id="content" style={{ height: 1000 }}>


                <h3>Dashboard</h3>

                <div id="upload1">Upload Grid Screentimes: <DragDrop /></div>

                <div id="upload2">Upload Colours File: <DragDrop /></div>

                <div id="generatePDF">
                <Button variant="contained" onClick={CheckData}>
                    Generate PDF
                </Button>

                {
                    showData ? <PDFViewer width={1024} height={768}>
                        <MyDocument data={{ pdfSettings, parsedSchedule }} />
                    </PDFViewer> : <div id="generateMsg">Please upload files first </div>
                }
                </div>
            </div>
        </>
    );
};


export default Content;
