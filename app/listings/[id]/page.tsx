
import getListById from '@/app/action/getListingById';
import SingleListing from './SingleListing';

import ClientOnly from '@/components/ClientOnly';
import prisma from '@/libs/prismaDb'

interface RoomPageProps {
  params: {
    id: string
  }
};

const RoomsPage = async ({ params }: RoomPageProps) => {
  const listing = await getListById(params.id)

  console.log(listing);

  if (!listing) return null;

  return (
    <ClientOnly>
      <div className='md:px-[2rem] lg:px-[4rem] xl:px-[8rem]'>
        <SingleListing
          listing={listing}
        />
      </div>
    </ClientOnly>
  )
}

export default RoomsPage