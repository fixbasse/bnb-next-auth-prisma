import { DateRange, Range, RangeKeyDict } from 'react-date-range'

import 'react-date-range/dist/styles.css'; // main style file
import 'react-date-range/dist/theme/default.css'; // theme css file

interface CalendarProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
};

const Calendar = ({
    value,
    onChange
}: CalendarProps) => {

    return (
        <DateRange
            rangeColors={['#262626']}
            ranges={[value]}
            onChange={onChange}
            date={new Date()}
            minDate={new Date()}
        />
    )
}

export default Calendar