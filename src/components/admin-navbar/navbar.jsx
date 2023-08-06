import React, { useContext } from 'react'
import { Context } from '../../context/index'
import dinein from '../../dates/imgs/dinein.png'
import walkin from '../../dates/imgs/walkin.png'
import logo from '../../dates/imgs/logo.png'
const Navbar = () => {

    let { state, dispatch } = useContext(Context)
    let toogle = () => {
        dispatch({ type: 'SET_TOGGLE_NAVBAR', payload: !state.toggleNavbar })
    }
    return (
        <div className=' z-50 fixed left-0 top-0 right-0 h-[76px] px-6 py-4 bg-white border-b border-neutral-200 justify-between items-center gap-[20px] inline-flex'>
            <div className=" flex gap-6 items-center">
                {/* <img src={require('../admin-page/Screenshot_6.png')} alt="" /> */}
                <div className=" border-r pr-6 border-[#e4e4e4]">
                    <img src={logo} alt="" />
                </div>
                <div className=" text-xl font-semibold leading-8 text-[#19191C]" onClick={toogle}>Dashboard</div>
            </div>
            <div className="justify-start items-start gap-8 flex">
                <div className="hidden rounded-[50px] border border-neutral-200 justify-start items-start md:flex">
                    <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-l-full duration-300 justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 relative">
                            <div className=" h-5 left-[5.62px] top-[2px] absolute">
                                <img className=' h-full' src={walkin} alt="" />
                            </div>
                        </div>
                        <div className="text-zinc-900 text-base font-normal leading-normal">Walk-In</div>
                    </div>
                    <div className="px-8 py-2.5 hover:bg-neutral-200 rounded-r-full duration-300 border-l border-neutral-200 justify-start items-center gap-2 flex">
                        <div className="w-6 h-6 relative">
                            <div className=" h-5 left-[6.58px] top-[2px] absolute">
                                <img className=' h-full' src={dinein} alt="" />
                            </div>
                        </div>
                        <div className="text-zinc-900 text-base font-normal leading-normal">Dine-In</div>
                    </div>
                </div>
                <div className="justify-start items-center gap-8 flex">
                    <img className="w-11 h-11 rounded-full" src="https://via.placeholder.com/44x44" />
                </div>
            </div>
        </div>
    )
}

export default Navbar