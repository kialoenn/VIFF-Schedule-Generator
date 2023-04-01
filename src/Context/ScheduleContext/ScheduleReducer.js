import {
    PARSE_GRIDSCREENTIMES,
    MAP_VENUENAME,
    SET_DATE,
    SET_COLOR,
    SET_FONT,
    SET_GRIDLINE,
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
            return {
                ...state,
                colorSettings: {...state.colorSettings, [action.id]: action.color},
            };
        case SET_FONT: 
            return {
                ...state,
                fontSettings: {...state.fontSettings, [action.settingID]:  action.settingVal},
            };
        case SET_GRIDLINE:
            return {
                ...state,
                gridLineSettings: {...state.gridLineSettings, [action.settingID]: action.settingVal},
            };
        default:
            return state;
    }
};
