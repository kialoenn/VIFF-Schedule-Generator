import {
    PARSE_GRIDSCREENTIMES,
    MAP_VENUENAME,
    SET_DATE,
    SET_COLOR,
    SET_FONT,
    SET_GRIDLINE,
    SET_CUSTOM_ID,
    CLOSE_CUSTOM,
    CHANGE_SCREEN,
} from '../ActionType';

export default (state, action) => {
    console.log('state.gridscreen', state.gridScreenTimes);
    switch (action.type) {
        case MAP_VENUENAME:
        case PARSE_GRIDSCREENTIMES:
            console.log('action: ', action);
            return {
                ...state,
                gridScreenTimes: action.screenTimes,
            };
        case SET_DATE:
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
                colorSettings: { ...state.colorSettings, [action.id]: action.color },
            };
        case SET_FONT:
            return {
                ...state,
                fontSettings: { ...state.fontSettings, [action.settingID]: action.settingVal },
            };
        case SET_GRIDLINE:
            return {
                ...state,
                gridLineSettings: { ...state.gridLineSettings, [action.settingID]: action.settingVal },
            };
        case SET_CUSTOM_ID:
            return {
                ...state,
                customBarTarget: {
                    dateID: action.id.dateID,
                    venueID: action.id.venueID,
                    screenID: action.id.screenID,
                    display: true,
                },
            };
        case CLOSE_CUSTOM:
            return {
                ...state,
                customBarTarget: {
                    ...state.customBarTarget,
                    display: false,
                },
            };
        case CHANGE_SCREEN:
            return {
                ...state,
                gridScreenTimes: state.gridScreenTimes.map((d) => {
                    if (d.id == action.id.dateID) {
                        return (
                            {
                                ...d,
                                venue: d.venue.map((v) => {
                                    if (v.id == action.id.venueID) {
                                        return ({
                                            ...v,
                                            screens: v.screens.map((s) => {
                                                if (s.id == action.id.screenID) {
                                                    return ({
                                                        ...s,
                                                        customized: true,
                                                        duration: action.screen.duration,
                                                        filmTitle: action.screen.filmTitle,
                                                        pageLocation: action.screen.pageLocation,
                                                        startTime: action.screen.startTime,
                                                        filmTitleText: action.screen.filmTitleText,
                                                        filmDetailsText: action.screen.filmDetailsText,
                                                    });
                                                } else {
                                                    return s;
                                                }
                                            }),
                                        });
                                    } else {
                                        return v;
                                    }
                                }),
                            }
                        );
                    } else {
                        return d;
                    }
                }),
            };
        default:
            return state;
    }
};
