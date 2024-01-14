
import { signOut } from 'next-auth/react';
import { RxAvatar } from 'react-icons/rx'

interface HostingUserMenuProps {
    showMenu: boolean;
    handleOpen: () => void;
};

const HostingUserMenu = ({
    showMenu,
    handleOpen
}: HostingUserMenuProps) => {
    return (
        <div>
            <div
                onClick={handleOpen}
                className={`border-2 rounded-full p-1
                    ${showMenu && 'border-black'}
                    `}
            >
                <RxAvatar size={30} />
            </div>

            <div className={`absolute flex flex-col shadow-xl top-16 right-2 py-2 rounded-lg bg-white w-[250px] text-sm
                ${showMenu
                    ? 'block'
                    : 'hidden'
                }
                `}
            >
                <div className="pb-2 font-semibold">
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Profile
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Account
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Visit the help center
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Get help with a safety issue
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Gift cards
                    </button>
                </div>

                <hr />

                <div className="py-2 font-light">
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Language translation
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        $ USD
                    </button>
                </div>

                <hr />

                <div className="pt-2 font-light">
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Refer a host
                    </button>
                    <button
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Switch to
                    </button>
                    <button
                        onClick={() => signOut({ callbackUrl: 'http://localhost:3000' })}
                        className="p-2 px-4 hover:bg-gray-50 w-full text-left">
                        Log out
                    </button>
                </div>

            </div>
        </div>
    )
}

export default HostingUserMenu