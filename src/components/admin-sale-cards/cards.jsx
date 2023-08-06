import React from 'react'
import { cards } from '../../dates/jummy'

const Cards = () => {
    return (
        <div className=" justify-start w-full items-start flex-wrap xl:flex-nowrap gap-4 inline-flex">
            {cards.map(({ text, icon, money, percent, percentColor, trend, iconColor }, index) => {
                return (
                    <div key={index} className="min-w-[220px] xl:w-full grow shrink basis-0 rounded-xl drop-shadow justify-start items-start gap-4 bg-white flex">
                        <div className="grow shrink basis-0 bg-white rounded-xl flex-col justify-start items-start inline-flex">
                            <div className="w-full h-[164px] px-6 pt-6 pb-4 bg-white rounded-xl shadow flex-col justify-start items-start gap-6 flex">
                                <div className="self-stretch justify-start items-center gap-3 inline-flex">
                                    <div className={`w-6 h-6 relative ${iconColor}`}><i className={icon}></i></div>
                                    <div className="grow shrink basis-0 text-zinc-900 text-base font-medium leading-normal">{text}</div>
                                </div>
                                <div className="self-stretch h-[72px] flex-col justify-center items-start gap-1 flex">
                                    <div className="text-zinc-900 text-[40px] font-semibold leading-[48px]">{money}</div>
                                    <div className="h-5 relative flex gap-2">
                                        <div className={`${percentColor} flex items-center`}>
                                            <div className={` text-sm font-semibold leading-tight`}><i className={trend}></i></div>
                                            <div className="">
                                                <div className="text-sm font-semibold leading-tight" >{percent}</div>
                                            </div>
                                        </div>
                                        <div className=" text-zinc-500 text-xs font-medium leading-[18px]">from last month</div>
                                    </div>
                                </div>
                            </div>
                            <div className=" w-full px-6 py-4 justify-between items-center gap-4 inline-flex">
                                <div className="grow shrink basis-0 text-orange-600 text-sm font-semibold leading-tight">View detail</div>
                                <i class="fa-solid fa-chevron-right text-orange-600"></i>
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}

export default Cards