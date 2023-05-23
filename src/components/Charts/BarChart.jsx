import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, ColumnSeries, Inject, DataLabel, Category, Legend, Tooltip } from '@syncfusion/ej2-react-charts';

import {barCustomSeries, barPrimaryXAxis, barPrimaryYAxis} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const BarChart = () => {

    const { currentMode } = useStateContext();

    return (
        <ChartComponent 
            id='charts'
            style={{ textAlign: "center" }} 
            legendSettings={{ 
                visible: true,
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']},
            }} 
            primaryXAxis={barPrimaryXAxis}
            primaryYAxis={barPrimaryYAxis}
            chartArea={{ border: { width: 0 } }}
            tooltip={{ enable: true}} 
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            
        >
            <Inject services={[ColumnSeries, Legend, Tooltip, Category, DataLabel]} />
            <SeriesCollectionDirective>
                {barCustomSeries.map((item, index) => <SeriesDirective key={index} {...item} />)}
            </SeriesCollectionDirective>
        </ChartComponent>
);
};

export default BarChart;