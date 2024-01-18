'use client'

import UserMenu from './UserMenu'
import Logo from './Logo'
import SearchBar from './SearchBar'

import { usePathname } from 'next/navigation'
import { User } from '@prisma/client'

interface NavbarProps {
  currentUser: User | undefined | null;
};

const Navbar = ({ currentUser }: NavbarProps) => {
  const pathname = usePathname();
  //console.log(currentUser);

  return (
    <nav className='border-b fixed w-full bg-white z-10'>
      <section className='px-4 md:px-[2rem] xl:px-[4rem] max-h-[90px] h-[90px] flex items-center justify-between'>
        <Logo />

        {pathname === '/rooms'
          ? null
          : <UserMenu currentUser={currentUser} />
        }
      </section>

      {/* SEARCH */}
      {pathname === '/rooms'
        ? null
        : <SearchBar />
      }
    </nav>
  )
}

export default Navbar