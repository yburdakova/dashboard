import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, LineSeries, Inject, DateTime, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import {lineCustomSeries, LinePrimaryXAxis, LinePrimaryYAxis} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const LineChart = () => {

    const { currentMode } = useStateContext();

    return (
        <ChartComponent
            id='line-chart'
            height='420px'
            legendSettings={{ 
                visible: true, 
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']},
            }} 
            primaryXAxis={LinePrimaryXAxis}
            primaryYAxis={LinePrimaryYAxis}
            chartArea={{border: {width:0 }}}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}

        >
            <Inject services={[LineSeries, DateTime, Legend, Tooltip]}/>
            <SeriesCollectionDirective>
                {lineCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default LineChart;