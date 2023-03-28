import { createContext, useContext } from 'react';

const ScheduleContext = createContext(null);

export default ScheduleContext;

export const useScheduleContext = () => {
    return useContext(ScheduleContext);
};

