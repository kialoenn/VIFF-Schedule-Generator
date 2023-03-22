// Customized components import
import ScreenEditable from './ScreenEditable';

// CSS import
import '../../css/Dashboard.css';
import '../../css/Schedule.css';

// context import
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';

// External import
import React from 'react';
import reactCSS from 'reactcss';


const styles = reactCSS({
    venueRow: {
        'flexDirection': 'row',
        'margin': '0px auto',
        'width': '100vw',
        'height': '2.362vh',
        'backgroundColor': 'black', // background ?
        'color': 'white',
    },
    venue: {
        'width': '18.9vw',
        'height': '100%',
        'fontFamily': 'Roboto',
        'color': 'blue', // venueText {}
        'fontSize': '1vw',
        'fontWeight': '700',
        // 'margin': 'auto',
        'paddingTop': '0.3vw',
        'paddingBottom': '0.3vw',
        'textAlign': 'center',
        'backgroundColor': '#a7a9ac',
        'borderRight': '2px solid black',
        'borderBottom': '2px solid black',
        'borderLeft': '2px solid black',
    },
    // #808080
    screen: {
        'color': 'black',
        'width': '81.1vw',
        'backgroundColor': '#808080',
        'flexDirection': 'row',
        'fontSize': '0.7vw',

    },

    box1: {
        'backgroundColor': '#d1cac0', // evenRow{}
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '3px dotted black',
    },

    box2: {
        'backgroundColor': '#9e9991', // oddRow{}
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '3px dotted black',
    },

    box3: {
        'backgroundColor': '#d1cac0', // evenRow{}
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '5px dotted black',
    },

    box4: {
        'backgroundColor': '#9e9991',// odd Row{}
        'width': '1.5625vw',
        'height': '100%',
        'borderRight': '5px dotted black',
    },

    text: {
        'margin': 'auto 0',
        'height': '2.362vh',
        'color': 'black',
    },
});
const createdScheduleBox = (id) => {
    const scheduleBoxNum = 64;
    const scheduleBoxes = [];
    // console.log("created schedule boxes!");
    for (let i = 0; i < scheduleBoxNum; i++) {
        if (id % 2 == 0) {
            if (i % 2 == 0) {
                scheduleBoxes.push(<div style={styles.box1} className="box1" key={i}></div>);
            } else {
                scheduleBoxes.push(<div style={styles.box3} className="box3" key={i}></div>);
            }
        } else {
            if (i % 2 == 0) {
                scheduleBoxes.push(<div style={styles.box2} className="box2" key={i}></div>);
            } else {
                scheduleBoxes.push(<div style={styles.box4} className="box4" key={i}></div>);
            }
        }
        // } else if (i % 4 == 2) {
        //     scheduleBoxes.push(<View style={styles.box3} key={i}></View>);
        // } else {
        //     scheduleBoxes.push(<View style={styles.box4} key={i}></View>);
        // }
    }
    return scheduleBoxes;
};

const VenueEditable = (props) => {
    const scheduleContext = useScheduleContext();
    const colors = scheduleContext.colorSettings;
    // console.log("venue",props.venueDetail.venueName, "id:", props.venueDetail.id);
    return (
        <div className='venueRow'>
            <div className='venue'>
                <div className='text' style={styles.text}>{props.venueDetail.venueName}</div>
            </div>
            <div className='screen'>
                {createdScheduleBox(props.venueDetail.id)}
                {props.venueDetail.screens.map((screen, index) => {
                    return (
                        <ScreenEditable key={index} screen={screen}></ScreenEditable>
                    );
                })}

            </div>
        </div>
    );
};

export default VenueEditable;
