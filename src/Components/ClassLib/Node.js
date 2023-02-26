/**
 * Class that represent row item in GridScreenTimes file
 */
class Node {
    /**
             *
             * @param {*} date te
             * @param {*} movie_name te
             * @param {*} code te
             * @param {*} screen_time_min te
             * @param {*} screen_time te
             * @param {*} movie_type te
             * @param {*} start_time te
             * @param {*} venue_info te
             * @param {*} page_number te
             */
    constructor(date, movie_name, code, screen_time_min,
        screen_time, movie_type, start_time, venue_info, page_number) {
        this.date = date;
        this.movie_name = movie_name;
        this.code = code;
        this.screen_time_min = screen_time_min;
        this.screen_time = screen_time;
        this.movie_type = movie_type;
        this.start_time = start_time;
        this.venue_info = venue_info;
        this.page_number = page_number;
    }
}

export default Node;

