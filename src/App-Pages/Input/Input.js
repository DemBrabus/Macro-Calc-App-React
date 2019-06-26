import React from 'react';
import './Input.scss';

import DesktopInput from './Desktop-Components/DesktopInput';
import MobileInput from './Mobile-Components/MobileInput';

export default function Input({updateFats, updateCarbs, updateProtein}) {
    return (
        <div className="Input">

            
           
            <DesktopInput updateFats={updateFats} updateCarbs={updateCarbs} updateProtein={updateProtein}/>

            

            {/* <MobileInput /> */}



        </div>
    )
}
