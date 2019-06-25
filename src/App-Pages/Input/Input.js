import React from 'react';
import './Input.scss';

import DesktopInput from './Desktop-Components/DesktopInput';
import MobileInput from './Mobile-Components/MobileInput';

export default function Input() {
    return (
        <div className="Input">
           
            <DesktopInput />

            <MobileInput />



        </div>
    )
}
