import React, { useState } from 'react'
import { ColumnsDirective, ColumnDirective, ChartComponent, ColumnSeries, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'
import { dataBar } from '../../../dates/jummy'
import { dateOptions } from '../../../dates/jummy'

const Bar = () => {

    let [modalCountries, setModalCountries] = useState(false)
    let [modalCities, setModalCities] = useState(false)
    let [cityArray, setCityArray] = useState([{ city: 'not found' }])
    let [changeCountry, setChangeCountry] = useState('Select Country')
    let [changeCity, setChangeCity] = useState('Cities')

    let SelectedCountry = (country) => {
        setChangeCountry(country)
        setModalCountries(false)
    }
    let SelectedCity = (City) => {
        setChangeCity(City)
        setModalCities(false)
    }
    let toggleModalCountries = () => {
        setModalCountries((prev) => {
            return !prev
        })
        setModalCities(false)
    }
    let toggleModalCities = () => {
        setModalCities((prev) => {
            return !prev
        })
        setModalCountries(false)
    }
    return (
        <div className=' w-full'>
            <div className="flex justify-between items-center mb-4">
                <div className="text-zinc-900 text-base font-medium leading-normal">Hourly sales report</div>
                <div className="text-right text-orange-600 text-sm font-semibold leading-tight cursor-pointer">View All</div>
            </div>
            <div className="w-full mb-4 justify-start items-center gap-3 flex flex-wrap">
                <div className="group relative grow min-w-fit shrink basis-0 h-[42px] px-3.5 py-3 bg-white rounded-lg border border-neutral-200 ">
                    <div onClick={() => { toggleModalCountries() }} className=" justify-start items-center gap-3 flex min-w-[120px]">
                        <div className="grow shrink basis-0 text-zinc-900 text-sm font-normal leading-[18px]">{changeCountry}</div>
                        <div>
                            <i className="fa-solid fa-chevron-down"></i>
                        </div>
                    </div>
                    <div className={`${modalCountries ? 'block' : 'hidden'} duration-300  absolute w-full overflow-hidden bg-white drop-shadow-lg rounded py-3 top-full left-0 m-1 z-50`}>
                        {
                            dateOptions.map(({ country, cities }, index) => {
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
                            cityArray.map(({ city }, index) => {
                                return (
                                    <div key={index} onClick={() => {
                                        SelectedCity(city)
                                    }} className='p-2 px-3 text-zinc-900 hover:text-orange-600 duration-500 hover:bg-orange-50 text-lg hover:font-semibold'>
                                        {city}
                                    </div>
                                )
                            })
                        }
                    </div>
                </div>
            </div>
            <ChartComponent
                id='column-sparkLine'
                height='100%'
                primaryXAxis={{
                    valueType: 'Category',
                    majorGridLines: { width: 0 },
                    labelRotation: 90,
                    chartArea: { width: 20 }
                }}
                primaryYAxis={{
                    minimum: 0,
                    maximum: 4500,
                    interval: 1500,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },
                }}
                legendSettings={{ mode: 'Range', background: 'white' }}
                tooltip={{ enable: true }}
                chartArea={{ border: { width: 0 } }}>
                <Inject services={[LineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                <ColumnsDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                    <ColumnDirective width='100%'></ColumnDirective>
                </ColumnsDirective>
                <SeriesCollectionDirective>
                    <SeriesDirective dataSource={dataBar}
                        xName="x"
                        yName="hours"
                        type="Column"
                        fill='#8FBFFF'
                        columnSpacing={0.1}
                        columnWidth={0.5}
                        cornerRadius={{
                            topLeft: 2,
                            topRight: 2,
                        }}>
                    </SeriesDirective>
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Bar