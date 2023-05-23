import React from 'react';
import { ChartComponent, SeriesCollectionDirective, SeriesDirective, Inject, ColumnSeries, Category, Tooltip, Legend, RangeColorSettingsDirective, RangeColorSettingDirective } from '@syncfusion/ej2-react-charts';

import { colorMappingData, ColorMappingPrimaryXAxis, ColorMappingPrimaryYAxis, rangeColorMapping } from '../../data/dummy';
import { ChartsHeader } from '../../components';
import { useStateContext } from '../../contexts/ContextProvider';

const ColorMapping = () => {
    const { currentMode } = useStateContext();

    return (
    
    <div className="w-full">
        <ChartComponent
        id="charts"
        primaryXAxis={ColorMappingPrimaryXAxis}
        primaryYAxis={ColorMappingPrimaryYAxis}
        chartArea={{ border: { width: 0 } }}
        legendSettings={{ 
            mode: 'Range', 
            background: `${currentMode === 'Dark' ? '#33373E' : '#fff'}`, 
            textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']}, 
        }}
        tooltip={{ enable: true }}
        background={currentMode === 'Dark' ? '#33373E' : '#fff'}
        >
        <Inject services={[ColumnSeries, Tooltip, Category, Legend]} />
        <SeriesCollectionDirective>
            <SeriesDirective
            dataSource={colorMappingData[0]}
            name="USA"
            xName="x"
            yName="y"
            type="Column"
            cornerRadius={{
                topLeft: 10,
                topRight: 10,
            }}
            />
        </SeriesCollectionDirective>
        <RangeColorSettingsDirective>
            {/* eslint-disable-next-line react/jsx-props-no-spreading */}
            {rangeColorMapping.map((item, index) => <RangeColorSettingDirective key={index} {...item} />)}
        </RangeColorSettingsDirective>
        </ChartComponent>
    </div>
    );
};

export default ColorMapping;