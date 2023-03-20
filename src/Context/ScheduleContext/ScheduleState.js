import React, { useReducer } from 'react';
import reactCSS from 'reactcss';
import ScheduleContext from './ScheduleContext';
import ScheduleReducer from './ScheduleReducer';
import {
    PARSE_GRIDSCREENTIMES,
    MAP_VENUENAME,
    SET_DATE,
    SET_COLOR,
} from '../ActionType';
import { parseGridScreensHelper, mapVenueNameHelper } from '../../Helper/ParsingHelper';

const ScheduleState = (props) => {
    const initialState = {
        gridScreenTimes: [],
        colorCustom: [],
    };

    const [state, dispatch] = useReducer(ScheduleReducer, initialState);

    // Parse screen times
    const parseGridScreens = async (lines) => {
        const result = await parseGridScreensHelper(lines);
        dispatch({
            type: PARSE_GRIDSCREENTIMES,
            screenTimes: result,
        });
    };

    // Map venue code to name
    const mapVenueName = async (parsedGridVenues) => {
        const result = await mapVenueNameHelper(state.gridScreenTimes, parsedGridVenues);
        dispatch({
            type: MAP_VENUENAME,
            screenTimes: result,
        });
    };

    const setDate = (rowId) => {
        dispatch({
            type: SET_DATE,
            index: rowId,
        });
    };

    // Color setting
    const setColor = (color) => {
        console.log('color: ', color);
        let r,g,b;
        let id = color.id;
        if (id == "Date Text") {
            r = color.r;
            g = color.g;
            b = color.b;
            console.log("rgb: ", r, g, b);
        }
        // dispatch({
        //     type: SET_COLOR,
        //     color: color,
        // })
    }

    return (
        <ScheduleContext.Provider
            value={{
                gridScreenTimes: state.gridScreenTimes,
                parseGridScreens,
                mapVenueName,
                setDate,
                setColor,
            }}>
            {props.children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleState;
