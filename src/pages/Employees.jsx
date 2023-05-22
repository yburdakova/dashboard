import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Search, Page, Toolbar, Inject } from '@syncfusion/ej2-react-grids'

import {employeesData, employeesGrid} from '../data/dummy';
import { Header } from '../components';

const Employees = () => {
    return (
        <div className='p-2 m-2 bg-white rounded md:m-10 md:p-1-3xl dark:bg-main-dark-bg'>
            <Header
                category='Page'
                title="Employees"
            />
            <div className="p-4 bg-white rounded-3xl">
                <GridComponent
                    dataSource={employeesData}
                    allowPaging
                    allowSorting
                    toolbar={['Search']}
                    width='auto'
                >
                    <ColumnsDirective>
                        {employeesGrid.map((item, index)=> ( 
                            <ColumnDirective
                                key={index}
                                {...item}
                            />
                            ))}
                    </ColumnsDirective>
                    <Inject services={[Page, Search, Toolbar]}/>
                </GridComponent>
            </div>
        </div>
    );
};

export default Employees;
