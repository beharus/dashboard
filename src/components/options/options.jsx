import React, { useState } from 'react'
import { multilocation, time } from '../../dates/jummy'

const Options = () => {
    let [modalCountries, setModalCountries] = useState(false)
    let [modalCities, setModalCities] = useState(false)
    let [cityArray, setCityArray] = useState([{ city: 'not found' }])
    let [changeCountry, setChangeCountry] = useState('Select Country')
    let [changeCity, setChangeCity] = useState('Cities')
    let [multiLocations, setMultiLocations] = useState(['not found'])
    let [modalMultiLocation, setModalMultiLocation] = useState(false)
    let [changeMultiLocation, setChangeMultiLocation] = useState('MultiLocation')
    let [changeWalkin, setChangeWalkin] = useState('Walk-in')
    let [walkIn, setWalkIn] = useState(false)
    let toggleModalCountries = () => {
        setModalCountries((prev) => {
            return !prev
        })
        setModalCities(false)
        setModalMultiLocation(false)
    }
    let toggleModalCities = () => {
        setModalCities((prev) => {
            return !prev
        })
        setModalCountries(false)
        setModalMultiLocation(false)
    }
    let toggleModalMultiLoc = () => {
        setModalMultiLocation((prev) => {
            return !prev
        })
        setModalCountries(false)
        setModalCities(false)
    }
    let toggleModalWalk = () => {
        setWalkIn((prev) => {
            return !prev
        })
        setModalCountries(false)
        setModalCities(false)
    }
    let SelectedCountry = (country) => {
        setChangeCountry(country)
        setModalCountries(false)
    }
    let SelectedCity = (City) => {
        setChangeCity(City)
        setModalCities(false)
    }
    let SelectedMultiLocation = (Multiloc) => {
        setChangeMultiLocation(Multiloc)
        setModalMultiLocation(false)
    }
    let SelectedWalkIn = (el) => {
        setChangeWalkin(el)
        setWalkIn(false)
    }

    return (
        <div className=" mb-4 justify-between items-center w-full flex-wrap gap-9 inline-flex">
            <div className="w-full xl:w-auto justify-start items-center gap-3 flex flex-wrap">
                <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 ">
                    <div onClick={() => { toggleModalCountries() }} className=" justify-start items-center gap-3 flex min-w-[120px]">
                        <div className="grow shrink basis-0 text-zinc-900 text-sm font-normal leading-[18px]">{changeCountry}</div>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`${modalCountries ? 'block' : 'hidden'} duration-300  absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 m-1 z-50`}>
                        {
                            multilocation.map(({ country, cities }, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        SelectedCountry(country)
                                        setCityArray(cities)
                                    }} className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-500 hover:bg-orange-50 text-lg hover:font-semibold'>
                                        {country}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="group relative grow shrink basis-0 h-[42px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 ">
                    <div onClick={() => {
                        toggleModalCities()
                    }} className=" justify-start items-center gap-3 flex min-w-[120px]">
                        <div className="grow shrink basis-0 text-zinc-900 text-sm font-normal leading-[18px]">{changeCity}</div>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`${modalCities ? 'block' : 'hidden'} duration-300  absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 m-1 z-50`}>
                        {
                            cityArray.map(({ city, multilocation }, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        SelectedCity(city)
                                        setMultiLocations(multilocation)
                                    }} className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-500 hover:bg-orange-50 text-lg hover:font-semibold'>
                                        {city}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="group relative grow shrink basis-0 h-[42px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 ">
                    <div onClick={() => {
                        toggleModalMultiLoc()
                    }} className=" justify-between w-full items-center gap-3 flex min-w-[120px]">
                        <div className="grow shrink basis-0 text-zinc-900 text-sm font-normal leading-[18px]">{changeMultiLocation}</div>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`${modalMultiLocation ? 'block' : 'hidden'} duration-300  absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 m-1 z-50`}>
                        {
                            multiLocations.map((el, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        SelectedMultiLocation(el)
                                    }} className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-500 hover:bg-orange-50 text-lg hover:font-semibold'>
                                        {el}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
                <div className="group relative grow shrink basis-0 h-[42px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 ">
                    <div onClick={() => {
                        toggleModalWalk()
                    }} className=" justify-between w-full items-center gap-3 flex min-w-[120px]">
                        <div className="grow shrink basis-0 text-zinc-900 text-sm font-normal leading-[18px]">{changeWalkin}</div>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`${walkIn ? 'block' : 'hidden'} duration-300  absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 m-1 z-50`}>
                        {
                            time.map((el, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        SelectedWalkIn(el)
                                    }} className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-500 hover:bg-orange-50 text-lg hover:font-semibold'>
                                        {el}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <div className="h-[42px] w-full xl:w-auto px-3.5 py-3 bg-white rounded border border-neutral-200 justify-start items-center gap-3 flex">
                <div className=" text-orange-600 text-lg" ><i class="fa-solid fa-calendar-days"></i></div>
                <div className="grow shrink basis-0 w-full text-zinc-900 text-xs font-normal leading-[18px]">Today : Apr 25, 2018 12:00 AM - Apr 26, 2018 12:00 AM</div>

            </div>
        </div>
    )
}

export default Options