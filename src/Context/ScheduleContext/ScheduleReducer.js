import {
    PARSE_GRIDSCREENTIMES,
    MAP_VENUENAME,
    SET_DATE,
    SET_COLOR,
} from '../ActionType';

export default (state, action) => {
    console.log('state.gridscreen', state.gridScreenTimes);
    switch (action.type) {
        case MAP_VENUENAME:
        case PARSE_GRIDSCREENTIMES:
            console.log("action: ", action);
            return {
                ...state,
                gridScreenTimes: action.screenTimes,
            };
        case SET_DATE:
            console.log(action.index + ' received');
            return {
                ...state,
                gridScreenTimes: state.gridScreenTimes.map((t) => {
                    if (t.id == action.index) {
                        return {
                            ...t,
                            date: 'test',
                        };
                    } else {
                        return t;
                    }
                }),
            };
        case SET_COLOR:
            console.log('color info:' + action.color.r);
            console.log('state:', state);
            return {
                ...state,
                gridScreenTimes: [],
                colorCustom: action.color,
            };
        default:
            return state;
    }
};
