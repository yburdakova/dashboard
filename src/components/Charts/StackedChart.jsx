import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, Legend, Category, StackingColumnSeries, Tooltip } from '@syncfusion/ej2-react-charts';
import { useStateContext } from '../../contexts/ContextProvider';
import { stackedCustomSeries, stackedPrimaryXAxis, stackedPrimaryYAxis } from '../../data/dummy';

const StackedChart = ({width, height}) => {

    const {currentMode} = useStateContext();

    return (
        <ChartComponent
            width={width}
            height={height}
            id='charts'
            primaryXAxis={stackedPrimaryXAxis}
            primaryYAxis={stackedPrimaryYAxis}
            chartArea={{border:{width:0}}}
            tooltip={{enable:true}}
            legendSettings={{ 
                mode: 'Range', 
                background: `${currentMode === 'Dark' ? '#33373E' : '#fff'}`, 
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']}, 
            }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
            <Inject
                services={[Legend, Category, StackingColumnSeries, Tooltip]}
            />
            <SeriesCollectionDirective>
                {stackedCustomSeries.map((item, index) => 
                    <SeriesDirective key={index} {...item}/>
                )}
            </SeriesCollectionDirective>
        </ChartComponent>
    );
};

export default StackedChart;