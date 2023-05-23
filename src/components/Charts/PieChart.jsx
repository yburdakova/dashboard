import React from 'react';
import { AccumulationChartComponent, AccumulationSeriesCollectionDirective, AccumulationSeriesDirective, PieSeries, Inject, AccumulationDataLabel, AccumulationLegend, AccumulationTooltip } from '@syncfusion/ej2-react-charts';
import { Browser } from '@syncfusion/ej2-base';
import {pieChartData} from '../../data/dummy';
import { useStateContext } from '../../contexts/ContextProvider';


const PieChart = () => {

    const { currentMode } = useStateContext();

    return (
        <AccumulationChartComponent 
            id='pie-chart'
            legendSettings={{ 
                visible: true, 
                textStyle: { color:`${currentMode === 'Dark' ? '#FFFFFF' : '#33373E'}`, size: '16px', fontFamily:['Open Sans', 'sans-serif']},
            }} 
            enableSmartLabels={true} 
            center={{ x: '50%', y: '50%' }} 
            enableBorderOnMouseMove={true} 
            tooltip={{ enable: true, format: '<b>${point.x}</b><br>persents: <b>${point.y}%</b>', header: "" }} 
            background={currentMode === 'Dark' ? '#33373E' : '#FFFFFF'}
            style={{borderRadius:'24px'}}
            
            >
                        <Inject services={[AccumulationLegend, PieSeries, AccumulationTooltip, AccumulationDataLabel]}/>
                        <AccumulationSeriesCollectionDirective >
                            <AccumulationSeriesDirective 
                                dataSource={pieChartData} 
                                xName='x' 
                                yName='y' 
                                explode={true} 
                                explodeOffset='10%' 
                                explodeIndex={0} 
                                startAngle={Browser.isDevice ? 55 : 35} 
                                dataLabel={{
                                    visible: true,
                                    position: 'Outside', name: 'text',
                                    font: {
                                        fontWeight: '600'
                                    },
                                    connectorStyle: { length: '20px', type: 'Curve' }
                                }} 
                                radius={Browser.isDevice ? '60%' : '80%'}
                                
                            >
                            </AccumulationSeriesDirective>
                        </AccumulationSeriesCollectionDirective>
                    </AccumulationChartComponent>
    );
};

export default PieChart;