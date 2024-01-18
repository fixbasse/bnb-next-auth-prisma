import getListById from '@/app/action/getListingById';
import SingleBooking from '@/components/Book/SingleBooking'

interface BookingPageProps {
    params: {
        id: string
    };
};

const BookingPage = async ({
    params
}: BookingPageProps) => {
    const listing = await getListById(params.id);
    if (!listing) return null;

    return (
        <div className='md:px-[2rem] lg:px-[4rem] xl:px-[8rem]'>
            <SingleBooking
                listing={listing}
            />
        </div>
    )
}

export default BookingPage