import MyDocument from "./PDF";

import Button from '@mui/material/Button'
import ReactDOM from 'react-dom';
import { PDFViewer } from '@react-pdf/renderer';


//import { toPng, toJpeg, toBlob, toPixelData, toSvg } from 'html-to-image';

const loadData = (e) => {
    const fileReader = new FileReader();
    fileReader.readAsText(e.target.files[0], 'UTF-8');
    fileReader.onload = e => {
        const data = e.target.result;
        const lines = data.split("\r");
        console.log("lines: ", lines.length);
        let schedules = [];
        let venue = [];
        let screens = [];
        let startTime;
        let endTime;
        let venueName;
        let date;
        let movieName;
        let code;
        let durationMin;
        let durationHour;
        let movieType;
        let pageNum;
        let num = 0;
        for (let line of lines) {
            num++;
            console.log("line ", num, ": ", line);
            const info = line.split("\t");
            date = info[0];
            movieName = info[1];
            code = info[2];
            durationMin = info[3];
            durationHour = info[4];
            movieType = info[5];
            startTime = info[6];
            venueName = info[7];
            pageNum = info[8];

            let screen = {
                screenTitle: movieName,
                startTime: startTime,
                duration: durationMin,
                pageLocation: pageNum,
            };
            console.log("data for ", info);

            if (schedules.length == 0) {
                let obj = {
                    date: date,
                    venue: [
                        {
                            venueName: venueName,
                            screens: [
                                {
                                    screenTitle: movieName,
                                    satrtTime: startTime,
                                    duration: durationMin,
                                    pageLocation: pageNum,
                                }
                            ]
                        }
                    ]
                };
                console.log("first obj: ", obj);
                schedules.push(obj);
                console.log("First schedule: ", schedules.length);
            } else {
                for (let schedule of schedules) {
                    console.log("new schedule", schedule);
                    if (schedule.date == date) {
                        if (schedule.venue.venueName == venueName) {
                            schedule.venue.screens.push(screen);
                        } else {
                            let newVenue = {
                                venueName: venueName,
                                screens: [screen],
                            }
                            schedule.venue.push(newVenue);
                        }
                    } else {
                        let newSchedule = {
                            date: date,
                            venue: [
                                {
                                    venueName: venueName,
                                    screens: [
                                        screen
                                    ]
                                }
                            ]
                        };
                        schedules.push(newSchedule);
                    }
                }


                // console.log('info:', info);
                // console.log('movieName: ', movieName);

                // console.log('screen: ', screen);
                // screens.push(screen);
            }

        }
        // console.log('screens: ', screens[0]);
        console.log("Total schedules: ", schedules.length);
    }

}


const Content = (props) => {
    // const mydata = loadData();

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

    return (
        <>
            <div className='topMenu'>
                <div className='header'>
                    <div className='header1'>
                        <Button variant="contained" component="label" >
                            Upload Files
                            <input hidden accept=".tab, .csv" multiple type="file" onInput={loadData} />
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