import React from 'react'
import { ColumnsDirective, ColumnDirective, ChartComponent, ColumnSeries, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'
import { dataColumn } from '../../../dates/jummy'
const Column = () => {
    return (
        <div>
            <div className="h-max w-full p-6 relative bg-white rounded-xl">
                <div className="flex justify-between items-center">
                    <div className="items-center gap-3 inline-flex">
                        <i className='fa-solid fa-location-dot fa-xl text-zinc-500'></i>
                        <div className="grow shrink basis-0 text-zinc-900 text-base font-semibold leading-normal">Sales by Location</div>
                    </div>
                    <div className=" cursor-pointer text-right text-orange-600 text-sm font-semibold leading-tight">View All</div>
                </div>
                <div className=" mt-8 w-full">
                    <ChartComponent
                        id='column-sparkLine'
                        width='100%'
                        height='100%'
                        primaryXAxis={{
                            valueType: 'Category',
                            majorGridLines: { width: 0 },
                            chartArea: { width: 20 }
                        }}
                        primaryYAxis={{
                            minimum: 0,
                            maximum: 1000,
                            interval: 200,
                            lineStyle: { width: 0 },
                            majorTickLines: { width: 0 },
                            minorTickLines: { width: 0 },
                        }}
                        legendSettings={{ mode: 'Range', background: 'white' }}
                        tooltip={{ enable: true }}
                        chartArea={{ border: { width: 0 } }}
                    >
                        <ColumnsDirective>
                            <ColumnDirective width='100%'></ColumnDirective>
                        </ColumnsDirective>
                        <Inject services={[LineSeries, ColumnSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                        <SeriesCollectionDirective>
                            <SeriesDirective dataSource={dataColumn}
                                xName="x"
                                yName="y"
                                type="Column"
                                pointColorMapping='color'
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
                <div className="text-red-600 text-xs font-normal leading-[18px] text-center mt-4"><i class="fa-solid fa-chart-line pr-2"></i> 2,5% decrease average each location</div>
            </div>
        </div>
    )
}

export default Column