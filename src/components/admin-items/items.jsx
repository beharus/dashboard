import React from 'react'

const Items = (props) => {
    return (
        <div className=" p-6 w-full relative bg-white rounded-xl">
            <div className="flex items-center justify-between mb-6">
                <div className=" text-zinc-900 text-base font-semibold leading-normal">{props.array.title}</div>
                <div className=" text-right text-orange-600 text-sm font-semibold leading-tight">View All</div>
            </div>
            <div className=" flex-col w-full justify-start gap-4 items-start inline-flex">
                {
                    props.array.items.map(({ img, text, percentage, color, money }) => {
                        return <div className="self-stretch w-full pb-4 bg-white border-b border-neutral-200 justify-start items-center gap-3 inline-flex">
                            <div className="md:w-[74px] md:h-[74px] w-12 h-12 relative">
                                <img className="md:w-[74px] md:h-[74px] w-12 h-12  rounded-xl" src={img} />
                            </div>
                            <div className="grow items-center shrink basis-0 h-12 justify-between md:items-start gap-2 flex">
                                <div className=" flex-col justify-start items-start gap-2 inline-flex">
                                    <div className="text-zinc-900 text-sm md:text-base font-semibold leading-normal">{text}</div>
                                </div>
                                <div className=" hidden h-6 justify-start items-baseline gap-1.5 sm:flex flex-wrap">
                                    <div className="text-zinc-900 text-base font-medium leading-normal">{money}</div>
                                    <div className={`grow shrink basis-0 ${color} text-xs font-medium leading-[18px]`}>{percentage}</div>
                                </div>
                            </div>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default Items