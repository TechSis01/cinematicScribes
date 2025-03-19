import React from 'react'

const Navbar = () => {
    return (
        <nav className='bg-blue-300 text-white flex flex-row justify-between px-20 py-5'>
            <div>Brand logo</div>

            <div className='flex flex-row w-2/4 justify-around'>
                <div>Home</div>
                <div>Services</div>
                <div>Contact</div>
                <div>About</div>
            </div>

        </nav>
    )
}

export default Navbar