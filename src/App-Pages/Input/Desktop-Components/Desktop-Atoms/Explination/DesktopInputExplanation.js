import React from 'react';
import './DesktopInputExplanation.scss';

export default function DesktopInputExplanation() {
    return (
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
    )
}
