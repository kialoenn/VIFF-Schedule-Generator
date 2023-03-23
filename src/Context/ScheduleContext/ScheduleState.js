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
        colorSettings: {
            dateText: {r: 255, g: 165, b: 0, a: 1},
            dateBar: {r: 0, g: 0, b: 0, a: 1},
            timeText: {r: 255, g: 255, b: 255, a: 1},
            venueText: {r: 0, g: 0, b: 255, a: 1},
            venueBar: {r: 167, g: 169, b: 172, a: 1},
            filmTitleText: {r: 0, g: 0, b: 0, a: 1},
            filmDetailsText: {r: 0, g: 0, b: 0, a: 1},
            filmBlock: {r: 255, g: 255, b: 255, a: 1},
            oddRow: {r: 209, g: 202, b: 192, a: 1},
            evenRow: {r: 158, g: 153, b: 145, a: 1},
            backGround: {}
        },
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
    
    const setColor = (color) => {
        let colorObject = {r: color.r, g: color.g, b: color.b, a: color.a}
        dispatch({
            type: SET_COLOR,
            id: color.id,
            color: colorObject,
        });
    };

    return (
        <ScheduleContext.Provider
            value={{
                gridScreenTimes: state.gridScreenTimes,
                colorSettings: state.colorSettings,
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
