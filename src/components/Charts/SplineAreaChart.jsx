import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, SplineAreaSeries, Inject, DateTime, Legend } from '@syncfusion/ej2-react-charts';

import {areaCustomSeries, areaPrimaryYAxis, areaPrimaryXAxis} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const SplineAreaChart = () => {

    const { currentMode } = useStateContext();

    return (
        <ChartComponent
            id='area-chart'
            legendSettings={{ 
                visible: true, 
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']},
            }} 
            height='420px'
            primaryXAxis={areaPrimaryXAxis}
            primaryYAxis={areaPrimaryYAxis}
            chartArea={{border: {width:0 }}}
            tooltip={{enable: true}}
            background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
            className={`text-gray-${currentMode === 'Dark' ? '100' : '600'}`}

        >
            <Inject services={[SplineAreaSeries, DateTime, Legend]}/>
            <SeriesCollectionDirective>
                {areaCustomSeries.map((item, index) => <SeriesDirective key={index} {...item}/>)}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default SplineAreaChart;