import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids'

import {ordersData, contextMenuItems, ordersGrid} from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
    return (
        <div className='p-2 m-2 bg-white rounded md:m-10 md:p-1-3xl'>
            <Header
                category='Page'
                title="Orders"
            />
            <GridComponent
                id='gridcomp'
                dataSource={ordersData}
                allowPaging
                allowSorting
            >
                <ColumnsDirective>
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
    );
};

export default Orders;