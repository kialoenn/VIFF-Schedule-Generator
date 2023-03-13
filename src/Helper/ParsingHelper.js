import Node from '../Components/ClassLib/Node';

const createMap = (movieInfo) => {
    const scheduleDetailMap = new Map();
    for (const item of movieInfo) {
        if (!scheduleDetailMap.has(item.date)) {
            const venuesMap = new Map();
            const screenMap = new Map();
            screenMap.set(item.code, item);
            venuesMap.set(item.venue_info, screenMap);
            scheduleDetailMap.set(item.date, venuesMap);
        } else {
            if (!scheduleDetailMap.get(item.date).has(item.venue_info)) {
                const screenMap = new Map();
                screenMap.set(item.code, item);
                scheduleDetailMap.get(item.date).set(item.venue_info, screenMap);
            } else {
                if (!scheduleDetailMap.get(item.date).get(item.venue_info).has(item.code)) {
                    scheduleDetailMap.get(item.date).get(item.venue_info).set(item.code, item);
                }
            }
        }
    }

    const testData = Array.from(scheduleDetailMap, ([date, venue]) => (
        {
            date: date,
            venue: Array.from(venue, ([name, screens]) => (
                {
                    venueName: name,
                    screens: Array.from(screens, ([screenName, screenInfo]) => (
                        {
                            screenTitle: screenName,
                            startTime: screenInfo.start_time,
                            duration: screenInfo.screen_time,
                            pageLocation: screenInfo.page_number,
                            movieType: screenInfo.movie_type,
                        })),
                }),
            ),
        }));

    let parsedScheduleIndex = 0;
    const parsedSchedule = [];
    testData.sort((a, b) => {
        if (Date.parse(a.date) < Date.parse(b.date)) {
            return -1;
        } else {
            return 1;
        }
    });
    for (const item of testData) {
        parsedSchedule[parsedScheduleIndex] = item;
        parsedScheduleIndex++;
    }
    return parsedSchedule;
};

const parseGridScreensHelper = async (lines) => {
    const movieInfo = [];
    for (let i = 0; i < lines.length - 1; i++) {
        const row = lines[i].split('\t');
        console.log('file column number: ', row.length);
        for (const { } of row) {
            let date = new Date(row[0]);
            date = date.toLocaleDateString('en-CA', { weekday: 'long' }) + ', ' +
                date.toLocaleDateString('en-CA', { month: 'long', day: 'numeric' });
            const movie_name = row[1];
            const code = row[2];
            const screen_time_min = row[3];
            const screen_time = row[4];
            const movie_type = row[5];
            const start_time = row[6];
            const venue_info = row[7];
            const page_number = row[8].replace('\r', '');

            const node = new Node(date, movie_name, code, screen_time_min,
                screen_time, movie_type, start_time, venue_info, page_number);

            movieInfo[i] = node;
        }
    }
    console.log(movieInfo);
    console.log(movieInfo.length);
    return createMap(movieInfo);
};

export default parseGridScreensHelper;
