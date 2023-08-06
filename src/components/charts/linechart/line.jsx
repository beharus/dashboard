import React from 'react'
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, Tooltip, DataLabel, LineSeries, MultiColoredLineSeries } from '@syncfusion/ej2-react-charts'
import { dataLine } from '../../../dates/jummy';

const Line = () => {
    const marker = { visible: true, width: 4, height: 4 };
    return (
        <div className="w-[730px]">
            <ChartComponent
                id='line-chart'
                height="100%"
                width='100%'
                primaryXAxis={{
                    valueType: 'Category'
                }}
                tooltip={{
                    enable: true, format: '<b>${point.x} /  ${point.y}</b>'
                }}
                primaryYAxis={{
                    minimum: 100, maximum: 500, interval: 200,
                    lineStyle: { width: 0 },
                    majorTickLines: { width: 0 },
                    minorTickLines: { width: 0 },

                    rangePadding: 'None',
                }}

                legendSettings={{ background: 'white' }}
                chartArea={{ border: { width: 0 } }}
            // markerSettings={{ visible: ['All'], size: 2.5, fill: 'red' }}
            ><Inject services={[LineSeries, Legend, Tooltip, DataLabel, Category, MultiColoredLineSeries]} />
                <SeriesCollectionDirective>
                    {dataLine.map((el, i) => {
                        return <SeriesDirective key={i} type='MultiColoredLine' pointColorMapping='color' marker={marker} dataSource={el} xName='x' yName='y' width={2}>
                        </SeriesDirective>
                    })}
                </SeriesCollectionDirective>
            </ChartComponent>
        </div>
    )
}

export default Line