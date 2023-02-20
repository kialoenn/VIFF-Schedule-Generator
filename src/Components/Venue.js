import { Text, View, StyleSheet } from '@react-pdf/renderer';
import React from 'react';
import '../css/Schedule.css'

const styles = StyleSheet.create({
    venueRow: {
        "flexDirection": "row",
        "margin": "0px auto",
        "width": "100vw",
        "backgroundColor": "black",
        "color": "white"
    },
    venue: {
        "width": "15%",
        "fontFamily": "Roboto",
        "color": "black",
        "fontSize": "1.4vw",
        "fontWeight": "700",
        "margin": "auto",
        "paddingTop": "0.3vw",
        "paddingBottom": "0.3vw",
        "textAlign": "center",
        "backgroundColor": "#a7a9ac",
        "borderRight": "2px solid black",
        "borderBottom": "2px solid black",
        "borderLeft": "2px solid black"
    },

    screen: {
        "color": "black",
        "width": "85%",
        "backgroundColor": "#808080",
        "flexDirection": "row",
    }
})

const Venue = (props) => {
    return (
        <View style={styles.venueRow}>
            <View style={styles.venue}>
                <Text>{props.venueDetail.venueName}</Text>
            </View>
            <View style={styles.screen}>
                <View>
                    <Text>Bones of Crows</Text>
                    <Text>2:00pm 127 min p2</Text>
                </View>
            </View>
        </View>
        // <div className='venueRow'>
        //     <div className='venue'>{prop.venueDetail.venueName}</div>
        //     <div className='screen'>
        //         <div className='screenBox'><div className='screenTitle'>Bones of Crows</div><br /><div className='screenInfo'>2:00pm 127 min p2</div></div>
        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>

        //     <div className='grid1'></div>
        //     <div className='grid2'></div>
        //     <div className='grid1'></div>
        //     <div className='grid1'></div>
        //         {/* {prop.venueDetail.screens.map((element, index) => {

        //             return (
        //                 <div></div>
        //             )
        //         })} */}
        //     </div>
        // </div>
    );
};

export default Venue