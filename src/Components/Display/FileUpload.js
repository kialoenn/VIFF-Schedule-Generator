/* eslint-disable require-jsdoc */
import Node from '../ClassLib/Node';
import Toast from './SnackBar';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';
import '../../css/FileUpload.css';


import MaterialIcon from 'material-icons-react';

const uploadedFiles = new Map();

const FileUploader = ({ setParsedSchedule, setParsedGridVenues, setColourInfo }) => {
    const scheduleContext = useScheduleContext();

    const onDrop = useCallback((acceptedFiles) => {
        console.log('accepted files:', acceptedFiles);
        acceptedFiles.forEach((file) => {
            if (!uploadedFiles.get(file.path)) {
                uploadedFiles.set(file.path, file);
            } else {
                document.getElementById('file-list-header').innerHTML = 'Files Uploaded';
                setTrigger({
                    message: file.path + ' is updated',
                    type: 'info',
                    active: true,
                });
                uploadedFiles.set(file.path, file);
            }

            const reader = new FileReader();
            reader.readAsText(file, 'ANSI');

            reader.onload = () => {
                const csvData = reader.result;
                const lines = csvData.split('\n');
                const fileColumn = lines[0].split('\t');
                if (fileColumn.length == 9) {
                    scheduleContext.parseGridScreens(lines);
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 1) {
                    // colour file
                    parsedColour(lines);
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 2) {
                    // section file
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 3) {
                    parseGridVenues(lines);
                    // gridvenue file
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else {
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                }
            };
        });

        console.log(uploadedFiles);
    }, []);

    // eslint-disable-next-line no-unused-vars
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone(
        {
            onDrop: onDrop,
            accept: {
                'text/tab': ['.tab'],
            },
        },
    );

    const [trigger, setTrigger] = useState({
        message: 'Default message',
        type: 'info',
        active: false,
    });

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
                                movieType: screenInfo.movie_type,
                            })),
                    }),
                ),
            }));

        let parsedScheduleIndex = 0;
        const parsedSchedule = [];
        testData.sort((a, b) => {
            if (Date.parse(a.date) < Date.parse(b.date)) {
                return -1;
            } else {
                return 1;
            }
        });
        for (const item of testData) {
            parsedSchedule[parsedScheduleIndex] = item;
            parsedScheduleIndex++;
        }
        console.log('array: ', testData);
        setParsedSchedule(parsedSchedule);
        console.log('array: ', parsedSchedule);
        console.log(parsedSchedule.length);
    };

    const parseGridScreens = (lines) => {
        const movieInfo = [];
        for (let i = 0; i < lines.length - 1; i++) {
            const row = lines[i].split('\t');
            console.log('file column number: ', row.length);
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

    const parseGridVenues = (lines) => {
        console.log('inside');
        const gridVenues = new Map();
        lines.forEach((line) => {
            const mapping = line.split('\t');
            gridVenues.set(mapping[2].trim(), mapping[1]);
        });
        setParsedGridVenues(gridVenues);
        console.log(gridVenues);
    };
    // parsed Colour file
    const parsedColour = (lines) => {
        // const colours= [];
        const colourMap = new Map();
        for (let row of lines) {
            if (row.length == 0) {
                break;
            }
            row = row.split(' ');
            const movieType = row[0];
            let c = row[2];
            let m = row[3];
            let y = row[4];
            let k = row[5];

            // Take a number of % and parse it to a number type
            c = parseInt(c.substring(0, c.indexOf('%')));
            m = parseInt(m.substring(0, m.indexOf('%')));
            y = parseInt(y.substring(0, y.indexOf('%')));
            k = parseInt(k.substring(0, k.indexOf('%')));

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
            // const rgbColour = new RGB(movieType, r, g, b);
            const colourObj = {
                r: r,
                g: g,
                b: b,
            };
            // colours.push(colourObj);
            colourMap.set(movieType, colourObj);
        }
        // console.log('colour map: \n', colourMap);
        setColourInfo(colourMap);
    };


    // if (uploadedFiles.length == 0) {
    //     console.log('empty');
    // }
    const files = [...uploadedFiles.values()].map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
            <span className="checkmark"><MaterialIcon icon="check" color='#2dce89' size={16} /></span>
        </li>
    ));

    return (
        <div>
            <div className="file-container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
                    {/* <MaterialIcon icon="upload_file" color='#17c9e9' size={64}/> */}
                    <img src={require('../../assets/icons/cloud-computing.png')} />
                    <p>Drag and drop files here, or <u>click here</u> to select files</p>
                </div>
            </div>
            <div className="file-list">
                <h4><span id="file-list-header">Uploaded Files</span></h4>
                <ul className="uploaded-files">{files}</ul>
            </div>
            <Toast trigger={trigger}></Toast>
        </div>
    );
};

export default FileUploader;
