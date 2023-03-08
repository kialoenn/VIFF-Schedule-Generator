/* eslint-disable require-jsdoc */
import Node from '../ClassLib/Node';
import Toast from './SnackBar';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import '../../css/FileUpload.css';

const uploadedFiles = new Map();

const FileUploader = ({ setParsedSchedule }) => {
    const onDrop = useCallback((acceptedFiles) => {
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
                    parseGridScreens(lines);
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 1) {
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 2) {
                    setTrigger({
                        message: file.path + ' is uploaded',
                        type: 'info',
                        active: true,
                    });
                } else if (fileColumn.length == 3) {
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
                            })),
                    }),
                ),
            }));

        let parsedScheduleIndex = 0;
        const parsedSchedule = [];
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


    // if (uploadedFiles.length == 0) {
    //     console.log('empty');
    // }
    const files = [...uploadedFiles.values()].map((file) => (
        <li key={file.path}>
            {file.path} - {file.size} bytes
        </li>
    ));

    return (
        <div>
            <div className="file-container">
                <div {...getRootProps({ className: 'dropzone' })}>
                    <input {...getInputProps()} />
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
