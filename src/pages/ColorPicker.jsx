import React from 'react';
import { ColorPickerComponent } from '@syncfusion/ej2-react-inputs';

import { Header } from '../components';

const change = (args) => {
    document.getElementById('preview').style.backgroundColor = args.currentValue.hex;
};

const CustomColorPicker = ({ id, mode }) => <ColorPickerComponent id={id} mode={mode} modeSwitcher={false} inline showButtons={false} change={change} />;

const ColorPicker = () => (
    <div className="p-2 m-2 mt-24 bg-white md:m-10 md:p-10 rounded-3xl dark:bg-main-dark-bg">
        <Header category="App" title="Color Picker" />
        <div className="p-4 bg-white rounded-3xl">
        <div className="text-center">
        <div id="preview" />
        <div className="flex flex-wrap items-center justify-center gap-20">
            <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Pallete</p>
            <CustomColorPicker id="inline-palette" mode="Palette" />
            </div>
            <div>
            <p className="mt-2 mb-4 text-2xl font-semibold">Inline Picker</p>
            <CustomColorPicker id="inline-picker" mode="Picker" />
            </div>
        </div>
        </div>
        </div>
    </div>
);

export default ColorPicker;