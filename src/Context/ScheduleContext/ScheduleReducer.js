import {
    PARSE_GRIDSCREENTIMES,
} from '../ActionType';

export default (state, action) => {
    switch (action.type) {
        case PARSE_GRIDSCREENTIMES:
            return {
                ...state,
                gridScreenTimes: action.screenTimes,
            };
        default:
            return state;
    }
};
