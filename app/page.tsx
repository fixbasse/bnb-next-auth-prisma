import Navbar from "@/components/navbar/Navbar";
import ListingsCard from "@/components/listings/ListingsCard";
import getCurrentUser from "./action/getCurrentUser";
import { getListing } from "./action/getListing";
import prisma from '@/libs/prismaDb'

const getList = async () => {
  const response = await prisma.listing.findMany();
  return response;
}

export default async function Home() {
  const currentUser = await getCurrentUser();
  // const listing = await getListing();
  const listing = await getList();

  //console.log(currentUser);
  //console.log(listing);

  return (
    <>
      <section className="pb-[5.6rem] md:pb-[12rem] ">
        <Navbar
          currentUser={currentUser}
        />
        {/* Some Page have diferent navbar */}
      </section>

      <section className="text-center py-8 font-bold">
        CATEGORIES
      </section>

      <section className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 py-4 px-4 md:px-[2rem] xl:px-[4rem]">
        {listing.map((list) => (
          <ListingsCard
            key={list.id}
            item={list}
          />
        ))}

      </section>

    </>
  )
}
