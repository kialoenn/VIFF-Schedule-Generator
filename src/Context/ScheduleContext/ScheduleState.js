import React, { useReducer } from 'react';
import ScheduleContext from './ScheduleContext';
import ScheduleReducer from './ScheduleReducer';
import {
    PARSE_GRIDSCREENTIMES,
} from '../ActionType';
import parseGridScreensHelper from '../../Helper/ParsingHelper';

const ScheduleState = (props) => {
    const initialState = {
        gridScreenTimes: [],
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

    return (
        <ScheduleContext.Provider
            value={{
                gridScreenTimes: state.gridScreenTimes,
                parseGridScreens,
            }}>
            {props.children}
        </ScheduleContext.Provider>
    );
};

export default ScheduleState;
