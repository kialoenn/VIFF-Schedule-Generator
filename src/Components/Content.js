import MyDocument from "./PDF";
import '../css/Header.css';
import Button from '@mui/material/Button'
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';
import { useState } from 'react';

class Node {
    constructor(date, movie_name, code, screen_time_min, screen_time, movie_type, start_time, venue_info, page_number) {
        this.date = date;
        this.movie_name = movie_name;
        this.code = code;
        this.screen_time_min = screen_time_min;
        this.screen_time = screen_time;
        this.movie_type = movie_type;
        this.start_time = start_time;
        this.venue_info = venue_info;
        this.page_number = page_number;
    }
}

class Cmyk {
    constructor(name, c, m, y, k) {
        this.name = name;
        this.c = c;
        this.m = m;
        this.y = y;
        this.k = k;
    }
}

class Rgb {
    constructor(name, r, g, b){
        this.name = name;
        this.r = r;
        this.g = g;
        this.b = b;
    }
}

const Content = (props) => {

    const temp = props.data
    const pdfSettings = {
        schedulePerPage: 4,
    }

    const scheduleDetail = [
        {
            date: "Tuesday, January 31",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Bones of Crows",
                            startTime: "19:00",
                            duration: "130min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "See You Friday",
                            startTime: "15:45",
                            duration: "97min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "No Prior Appointment",
                            startTime: "18:15",
                            duration: "115min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Geographies of Solitude",
                            startTime: "21:00",
                            duration: "103min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Wednesday, February 2",
            venue: [
                {
                    venueName: "Rio",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "18:30",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "21:15",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Studio",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:00",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "18:30",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "20:45",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "Playhouse",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "18:30",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "20:45",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Thursday, February 2",
            venue: [
                {
                    venueName: "International Village 8",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "18:00",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "21:15",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "International Village 9",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:00",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "18:30",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "20:45",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Friday, February 3",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "18:00",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "21:15",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:00",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "18:30",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "20:45",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "SFU-GCA",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "18:00",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "21:15",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
            ]
        },
        {
            date: "Saturday, February 4",
            venue: [
                {
                    venueName: "Annex Theatre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "18:00",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "21:15",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:00",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
                {
                    venueName: "Studio Theatre",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "4:00pm",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Sunday, February 5",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Playhouse",
                    screens: [
                        {
                            screenTitle: "Empire of Light",
                            startTime: "6:00pm",
                            duration: "119min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Decision to Leave",
                            startTime: "9:15pm",
                            duration: "138min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "The Eclipse",
                            startTime: "16:30",
                            duration: "109min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Love Will",
                            startTime: "6:30pm",
                            duration: "81min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "The Word",
                            startTime: "8:45pm",
                            duration: "100min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
    ]

    const [movieInfo, setMovieInfo] = useState([]);

    const [colourInfo, setColourInfo] = useState([]);

    const handleColourFile = (event) => {
        const dataFile = event.target.files[0];
        const fileReader = new FileReader();
        fileReader.readAsText(dataFile);
        
        fileReader.onload = function () {
            const colourData = fileReader.result;
            const lines = colourData.split("\n");
            for (let i = 0; i < lines.length -1; i++) {
                const row = lines[i].split(" ");
                const name = row[0];

                // Change the % string to number
                let c = row[2];
                let m = row[3];
                let y = row[4];
                let k = row[5];

                c = parseInt(c.substring(0, c.indexOf("%")));
                m = parseInt(m.substring(0, m.indexOf("%")));
                y = parseInt(y.substring(0, y.indexOf("%")));
                k = parseInt(k.substring(0, k.indexOf("%")));
                // Colour with cmyk
                const cmykColour = new Cmyk(name, c, m, y, k);


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
                const rgbColour = new Rgb(name,r, g, b);

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
        reader.readAsText(file);

        reader.onload = function () {
            const csvData = reader.result;
            const lines = csvData.split("\n");
            const header = lines[0].split(",");

            for (let i = 0; i < lines.length - 1; i++) {
                const row = lines[i].split("\t");
                for (let rowVal of row) {
                    const date = row[0];
                    const movie_name = row[1];
                    const code = row[2];
                    const screen_time_min = row[3];
                    const screen_time = row[4];
                    const movie_type = row[5];
                    const start_time = row[6];
                    const venue_info = row[7];
                    const page_number = row[8].replace("\r", "");

                    const node = new Node(date, movie_name, code, screen_time_min, screen_time, movie_type, start_time, venue_info, page_number);

                    movieInfo[i] = node;
                }

            }

            console.log(movieInfo);
            console.log(movieInfo.length);
            setMovieInfo(movieInfo);
        };
    };

    // function createMap(movieInfo) {
    //     const scheduleDetailMap = new Map();
    //     for (items of scheduleDetailMap) {

    //     }

    // }

    return (
        <>
            <div className='topMenu'>
                <div className='header'>
                    <div className='header1'>
                        <Button variant="contained" component="label" >
                            Upload Files
                            <input hidden accept=".tab, .csv" multiple type="file" onInput={handleFileUpload} />
                        </Button>
                        <Button variant="contained" component="label">
                            Upload Colour Files
                            <input hidden accept=".tab, .csv" multiple type="file" onInput={handleColourFile} />
                        </Button>
                    </div>
                    <div className='header2'></div>
                    <div className='header3'></div>

                </div>
            </div>
            <div id="content" style={{ height: 1000 }}>


                <h3>Dashboard</h3>
                <PDFViewer width={1024} height={768}>
                    <MyDocument data={{ pdfSettings, scheduleDetail }} />
                </PDFViewer>
            </div>
        </>
    );
};


export default Content