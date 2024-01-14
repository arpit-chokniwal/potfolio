import React from 'react'
import { IoBatteryFull } from "react-icons/io5";
import { FaWifi } from "react-icons/fa";
import { MdOutlineSignalCellularAlt } from "react-icons/md";

const SignalAndTop = () => {
    return (
        < div className='flex justify-center items-center h-[54px] w-[95%] ml-[2%] mt-[5px] gap-[4px]' >
            {/* Camera */}
            <div div className='h-[30px] w-[33%]' ></div >
            <div className='h-[30px] w-[35%] bg-black rounded-2xl'></div>
            {/* Signals */}
            <div className='h-[30px] w-[30%] ml-2 flex justify-center items-center gap-2'>
                <MdOutlineSignalCellularAlt className='text-white' size={20} />
                <FaWifi className='text-white' size={20} />
                <IoBatteryFull className='text-white' size={23} />
            </div>
        </div >
    )
}

export default SignalAndTop