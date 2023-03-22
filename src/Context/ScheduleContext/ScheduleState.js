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
            dateText: {r: 255, g: 165, b: 0},
            dateBar: {},
            timeText: {},
            venueText: {},
            venueBar: {},
            filmTitleText: {},
            filmDetailsText: {},
            filmBlock: {},
            oddRow: {},
            evenRow: {},
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
