import React from 'react';
import './DesktopUserInput.scss';

export default function DesktopUserInput({updateFats, updateCarbs, updateProtein}) {
    return (
        <div className='DesktopUserInput'>
            <h1 onClick={updateFats}>Hello</h1>
            
            <div className='InputWrap'>
                <p className='InputLabel'>
                    Fats
                </p>
                <input type='number' className='DesktopInputField' name='Fats' onChange={updateFats}></input>
                <p className='Input-G'>g</p>
            </div>

            <div className='InputWrap'>
                <p className='InputLabel'>
                    Carbs
                </p>
                <input type='number' className='DesktopInputField' name='Carbs' onChange={updateCarbs}></input>
                <p className='Input-G'>g</p>
            </div>

            <div className='InputWrap'>
                <p className='InputLabel'>
                    Fats
                </p>
                <input type='number' className='DesktopInputField' name='Protein' onChange={updateProtein}></input>
                <p className='Input-G'>g</p>
            </div>

            <button type='submit' className='DesktopSubmit' onClick={updateFats}>Calculate</button>
            
        </div>
    )
}


