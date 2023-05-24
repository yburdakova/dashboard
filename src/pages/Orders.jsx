import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy';
import { Header } from '../components';
import { useStateContext } from '../contexts/ContextProvider';

const Orders = () => {
    const { currentMode } = useStateContext();
    return (
        <div className='p-2 mt-20 bg-white rounded-3xl md:m-10 md:p-1-3xl dark:bg-main-dark-bg'>
            <Header
                category='Page'
                title="Orders"
            />
            <div className="p-4 bg-white rounded-3xl">
            <GridComponent
                id='gridcomp'
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective >
                    {ordersGrid.map((item, index)=> ( 
                        <ColumnDirective 
                            key={index}
                            {...item}
                        />
                        ))}
                </ColumnsDirective>
                <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]}/>
            </GridComponent>
            </div>
        </div>
    );
};

export default Orders;