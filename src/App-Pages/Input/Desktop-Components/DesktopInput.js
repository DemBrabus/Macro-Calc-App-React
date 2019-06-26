import React from 'react';
import './DesktopInput.scss';

//Atoms ---
import DesktopInputHeader from './Desktop-Atoms/Header/DesktopInputHeader';
import DesktopInputExplanation from './Desktop-Atoms/Explination/DesktopInputExplanation';
import DesktopUserInput from './Desktop-Atoms/UserInput/DesktopUserInput';

export default function DesktopInput({updateFats, updateCarbs, updateProtein}) {
    return (
        <div className="DesktopInput">
            <div className='DesktopInput-TopSpacer'></div>
            <div className='DesktopInput-Backer'>



                    <DesktopInputHeader />

                    <DesktopInputExplanation />

                    <DesktopUserInput updateFats={updateFats} updateCarbs={updateCarbs} updateProtein={updateProtein}/>



            </div>
            <div className='DesktopInput-BottomSpacer'>
                <p className='DesktopInput-Sponsor'>Made Possible By Users Like You</p>
            </div>
            

        </div>
    )
}
