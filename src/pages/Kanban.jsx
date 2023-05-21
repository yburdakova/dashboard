import React from 'react';
import { KanbanComponent, ColumnsDirective, ColumnDirective} from '@syncfusion/ej2-react-kanban';

import { kanbanGrid, kanbanData } from '../data/dummy';
import { Header } from '../components';

const Kanban = () => {
    return (
        <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl">
            <Header category="App" title="Kanban" />
            <KanbanComponent
                id='kanban'
                dataSource={kanbanData}
                cardSettings={{contentField: 'Summary', headerField: 'Id'}}
                keyField='Status'
            >
                <ColumnsDirective>
                    {kanbanGrid.map( (item, index) => (
                        <ColumnDirective
                            key={index}
                            {...item}
                        />
                    ))}
                </ColumnsDirective>
            </KanbanComponent>
        </div>
    );
};

export default Kanban;