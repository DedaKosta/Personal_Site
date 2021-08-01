import React from 'react'
import { useState } from 'react'

const Scales = () => {

    const [skills] = useState(
        {
            'Scale 1': '9',
            'Scale 2': '7',
            'Scale 3': '8',
            'Scale 4': '10'
        })

    const keys = Object.keys(skills)

    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

    const createDiv = (key, number) => {
        if (skills[key] >= number)
            return <div className='full-scale-value' key={key + number}></div>
        else
            return <div className='empty-scale-value' key={key + number}></div>
    }

    return (
        <div className='scales'>
            {
                keys.map((key) => (
                    <div className='scale-cont' key={key}>
                        <div className='scale-name-cont'>
                            <p className='scale-name'>{key}</p>
                        </div>

                        <div className='scale-value-cont'>
                            {
                                numbers.map((number) => (createDiv(key, number)))
                            }
                        </div>
                        <div className='scale-score-cont'>
                            <p className='scale-name'>{skills[key]} / 10</p>
                        </div>
                    </div>
                ))
            }
        </div>
    )
}

export default Scales
