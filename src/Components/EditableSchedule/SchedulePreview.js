import ScheduleEditable from './ScheduleEditable';
import { useScheduleContext } from '../../Context/ScheduleContext/ScheduleContext';

const SchedulePreview = () => {
    const scheduleContext = useScheduleContext();
    return (
        <div>
            {scheduleContext.gridScreenTimes.map((day, index) => {
                return (
                    <ScheduleEditable key={index} data={day}></ScheduleEditable>
                );
            })}
        </div>
    );
};

export default SchedulePreview;
