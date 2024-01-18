import React from 'react'
import Logo from './Logo'

const TopBar = () => {
    return (
        <div className='max-h-[90px] h-[90px] border-b flex items-center px-8'>
            <Logo />
        </div>
    )
}

export default TopBar