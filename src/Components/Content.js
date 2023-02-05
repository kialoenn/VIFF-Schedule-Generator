import Header from "./Header";
import Timeline from "./Timeline";
import Venue from "./Venue";

const Content = (props) => {
    const scheduleDetail = [
        {
            date: "Jan31, 2023",
            venue: [
                {
                    venueName: "The Centre",
                    screens: [
                        {
                            screenTitle: "Bones of Crows",
                            startTime: "6:00pm",
                            duration: "127min",
                            pageLocation: "p2",
                        }
                    ]
                },
                {
                    venueName: "Cinematheque",
                    screens: [
                        {
                            screenTitle: "See You Friday",
                            startTime: "3:45pm",
                            duration: "97min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "No Prior Appointment",
                            startTime: "6:15pm",
                            duration: "115min",
                            pageLocation: "p2",
                        },
                        {
                            screenTitle: "Geographies of Solitude",
                            startTime: "9:00pm",
                            duration: "103min",
                            pageLocation: "p2",
                        },
                    ]
                },
            ]
        },
        {
            date: "Feb02, 2023",
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
                    venueName: "Cinematheque",
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
            date: "Feb02, 2023",
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
                    venueName: "Cinematheque",
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
            date: "Feb02, 2023",
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
                    venueName: "Cinematheque",
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
            date: "Feb02, 2023",
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
                    venueName: "Cinematheque",
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
            date: "Feb02, 2023",
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
                    venueName: "Cinematheque",
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

    ]
    return (
        <div style={{ width: '80%', backgroundColor: 'lightblue' }}>
            <h3>Dashboard</h3>
            {scheduleDetail.map((element, index) => {
                return (
                    <div key={index}>
                        <Header key={index} date={element.date}></Header>
                        <Timeline></Timeline>
                        {element.venue.map((venueEle, venueIndex) => {
                            return (<Venue key={index + "." + venueIndex} venueDetail={venueEle}></Venue>)
                        })}
                    </div>)
            })}

        </div>
    );
};

export default Content