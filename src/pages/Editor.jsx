import React from 'react';
import { HtmlEditor, Image, Inject, Link, QuickToolbar, RichTextEditorComponent, Toolbar } from '@syncfusion/ej2-react-richtexteditor';

import { Header } from '../components';
import { EditorData } from '../data/dummy';

const Editor = () => (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg">
        <Header category="App" title="Editor" />
        <div className="p-4 bg-white rounded-3xl">
        <RichTextEditorComponent>
        <EditorData />
        <Inject services={[HtmlEditor, Toolbar, Image, Link, QuickToolbar]} />
        </RichTextEditorComponent>
        </div>
        
    </div>
);
export default Editor;