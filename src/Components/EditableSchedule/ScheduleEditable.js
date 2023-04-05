import TimelineEditable from './TimelineEditable';
import VenueEditable from './VenueEditable';

const ScheduleEditable = (props) => {
    // console.log('scheduleEditable props: ', props);
    return (
        <div>
            <TimelineEditable date={props.data.date} id={props.data.id}></TimelineEditable>
            {props.data.venue.map((venues, index) => {
                return (
                    <VenueEditable key={index} venueDetail={venues} dateID={props.data.id}></VenueEditable>
                );
            })}
        </div>
    );
};

export default ScheduleEditable;
