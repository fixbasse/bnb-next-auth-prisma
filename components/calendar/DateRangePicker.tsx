import { DateRangePicker, Range, RangeKeyDict } from "react-date-range";
import 'react-date-range/dist/styles.css'; // main css file
import 'react-date-range/dist/theme/default.css'; // theme css file


interface DateRangePickProps {
    value: Range;
    onChange: (value: RangeKeyDict) => void;
};

const DateRangePick = ({
    value,
    onChange
}: DateRangePickProps) => {
    return (
        <DateRangePicker
            rangeColors={['#262626']}
            ranges={[value]}
            onChange={onChange}
            minDate={new Date()}
            className="w-full h-full"
        />
    )
}

export default DateRangePick