import React, { useEffect, useState } from 'react';
import { toast } from 'react-toastify';



export default function Circle() {

    const [col, setCol] = useState('');
    const [disable, setDisable] = useState(false)

    const [dimension, setDimension] = useState({
        radius: '',
        cx: '',
        cy: ''
    })

    const [showShape, setShowShape] = useState(false)

    const handleChangeColors = (event) => {
        setCol(event.target.value)
    }

    const handleChangeCircle = (event) => {
        setDimension({ ...dimension, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (dimension.radius > 150 || dimension.cx > 150 || dimension.cy > 150) {
            setDisable(true)
            setShowShape(false)
            toast.error('Input must not be higher than the recommended dimension: 150!', {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            setDisable(false)
        }
    }, [dimension.radius, dimension.cx, dimension.cy])

    function submit() {
        if (dimension.radius !== '' && dimension.cx !== '' && dimension.cy !== '' && col !== '') {
            setShowShape(true);
        } else {
            toast.error('Please input all fields', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    }

    return (
        <div className='bounce-top'>
            {/* Shows circle when clicked */}
            <h3 className='top'>DIMENSIONS</h3>
            <div >
                <input value={dimension.radius} name='radius' type='number' placeholder='Specify a radius' onChange={handleChangeCircle} />
                <input value={dimension.cx} name='cx' type='number' placeholder='Specify x-coordinates' onChange={handleChangeCircle} />
                <input value={dimension.cy} name='cy' type='number' placeholder='Specify y- coordinates' onChange={handleChangeCircle} />

                <div>
                    <select onChange={handleChangeColors} name="colors" id="colors" className='select2'>
                        <option>--Please select a color--</option>
                        <option value="red">Red</option>
                        <option value="blue">Blue</option>
                        <option value="yellow">Yellow</option>
                        <option value="black">Black</option>
                    </select>
                </div>

                <button className={disable ? 'dis' : ''} onClick={submit}>Generate Shape</button>
            </div>

            {showShape ?
                <div >

                    <svg height="300" width="300" className='roll-in-left'>
                        <circle cx={dimension.cx} cy={dimension.cy} r={dimension.radius} style={{ fill: col, stroke: 'black', strokeWidth: '2px' }} />
                    </svg>
                </div>
                :
                ''
            }
            {/* Shows circle when clicked */}
        </div>
    )
}