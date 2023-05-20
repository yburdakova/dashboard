import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Page, Selection, Inject, Edit, Toolbar, Sort, Filter } from '@syncfusion/ej2-react-grids'

import {customersData, customersGrid} from '../data/dummy';
import { Header } from '../components';

const Customers = () => {
    return (
        <div className='p-2 m-2 bg-white rounded md:m-10 md:p-1-3xl'>
            <Header
                category='Page'
                title="Customers"
            />
            <GridComponent
                dataSource={customersData}
                allowPaging
                allowSorting
                toolbar={['Delete']}
                editSettings={{ allowDeleting: true, allowEditing: true}}
                width='auto'
            >
                <ColumnsDirective>
                    {customersGrid.map((item, index)=> ( 
                        <ColumnDirective
                            key={index}
                            {...item}
                        />
                        ))}
                </ColumnsDirective>
                <Inject services={[Page, Selection, Edit, Sort, Filter, Toolbar]}/>
            </GridComponent>
        </div>
    );
};

export default Customers;
