import React from 'react';
import './DesktopInput.scss';




export default function DesktopInput({updateFats, updateCarbs, updateProtein, calculate}) {
    return (
        <div className="DesktopInput">
            <div className='DesktopInput-TopSpacer'></div>
            <div className='DesktopInput-Backer'>

                    <h1 className='DesktopInput-Header'>
                        Essential Macro Calculator
                    </h1>

                    <p className='DesktopInput-Description'>
                        Quick and easy to use calculator to get exact caloric value of foods, meals and/or daily totals.
                    </p>



                    <div className='DesktopInputExplanation'>
                            <p className='Explanation-Title'>
                                Kcal Per Gram
                            </p>

                            <div className='Kcal-Breakdown-Wrap'>
                                <p className='Kcal-Breakdown'>1 Gram of Fat = 9 Calories</p>
                                <p className='Kcal-Breakdown'>1 Gram of Carbohydrates = 4 Calories</p>
                                <p className='Kcal-Breakdown'>1 Gram of Protein = 4 Calories</p>
                            </div>

                            <p className='Explanation-Recommendation'>
                                *For Best Results Don't Subtract Fiber or Sugar Alcohols.
                            </p>
                    </div>




                <div className='DesktopUserInput'>
                    <div className='InputWrap'>
                        <p className='InputLabel'>
                            Fats
                        </p>
                        <input type='number'
                            className='DesktopInputField' 
                            name='Fats' onChange={updateFats}>
                        </input>
                        <p className='Input-G'>g</p>
                    </div>

                    <div className='InputWrap'>
                        <p className='InputLabel'>
                            Carbs
                        </p>
                        <input type='number'
                            className='DesktopInputField' 
                            name='Carbs' onChange={updateCarbs}>
                        </input>
                        <p className='Input-G'>g</p>
                    </div>

                    <div className='InputWrap'>
                        <p className='InputLabel'>
                            Protein
                        </p>
                        <input type='number'
                            className='DesktopInputField' 
                            name='Protein' 
                            onChange={updateProtein}>
                        </input>
                        <p className='Input-G'>g</p>
                    </div>

                    <button type='submit' className='DesktopSubmit' onClick={calculate} id='Hello'>Calculate</button>
                </div>


                    



            </div>
            <div className='DesktopInput-BottomSpacer'>
                <p className='DesktopInput-Sponsor'>Made Possible By Users Like You</p>
            </div>
            

        </div>
    )
}
