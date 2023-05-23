import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, Inject, AccumulationLegend, AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationSelection } from '@syncfusion/ej2-react-charts';

import { PyramidData } from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';

const PyramidChart = () => {
    const { currentMode } = useStateContext();

    return (
        
        <div className="w-full">
            <AccumulationChartComponent
            id="pyramid-chart"
            legendSettings={{ 
                position: 'Bottom',
                mode: 'Range', 
                background: `${currentMode === 'Dark' ? '#33373E' : '#fff'}`, 
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']}, 
            }}
            tooltip={{ enable: true }}
            background={currentMode === 'Dark' ? '#33373E' : '#fff'}
            >
            <Inject services={[AccumulationDataLabel, AccumulationTooltip, PyramidSeries, AccumulationLegend, AccumulationSelection]} />
            <AccumulationSeriesCollectionDirective>
                <AccumulationSeriesDirective
                name="Food"
                dataSource={PyramidData}
                explodeIndex={4}
                animation={true}
                xName="x"
                yName="y"
                type="Pyramid"
                width="45%"
                height="80%"
                neckWidth="15%"
                gapRatio={0.1}
                explode
                emptyPointSettings={{ mode: 'Drop', fill: 'red' }}
                dataLabel={{
                    visible: true,
                    position: 'Inside',
                    name: 'text',
                }}
                />
            </AccumulationSeriesCollectionDirective>
            </AccumulationChartComponent>
        </div>
    );
};

export default PyramidChart;