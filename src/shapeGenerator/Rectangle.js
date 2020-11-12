import React, { useState, useEffect } from 'react';
import {toast } from 'react-toastify';

export default function Rectangle() {

    const [col, setCol] = useState('');
    const [disable, setDisable] = useState(false)

    const [dimension, setDimension] = useState({
        width: '',
        height: '',
        rx: '',
        ry: ''
    })

    const [showShape, setShowShape] = useState(false)

    const handleChangeColors = (event) => {
        setCol(event.target.value)
    }

    const handleChangeRectangle = (event) => {
        setDimension({ ...dimension, [event.target.name]: event.target.value })
    }

    useEffect(() => {
        if (dimension.width > 250 || dimension.height > 100 || dimension.rx > 11 || dimension.ry > 11) {
            setDisable(true)
            setShowShape(false)
            toast.error('Input must not be greater than the recommended input: width: 250, height: 100, rx:11, ry: 11!', {
                position: "top-right",
                autoClose: 5000,
                });
        } else {
            setDisable(false)
        }
    }, [dimension.width, dimension.height, dimension.rx, dimension.ry])

    function submit() {
        if (dimension.radius !== '' && dimension.cx !== '' && dimension.cy !== '' && col !== '') {
            setShowShape(true)
        }else{
            toast.error('Please input all fields', {
                position: "top-right",
                autoClose: 5000,
                });
        }
    }


    return (
        <div className='wobble-hor-bottom'>
            {/* Shows Rectangle when clicked */}
            <h3 className='top'>DIMENSIONS</h3>
            <div>
                <input value={dimension.width} name='width' type='number' placeholder='Sepcify Width' onChange={handleChangeRectangle} />
                <input value={dimension.height} name='height' type='number' placeholder='Specify Height' onChange={handleChangeRectangle} />
                <input value={dimension.rx} name='rx' type='number' placeholder='Specify x-coordinates' onChange={handleChangeRectangle} />
                <input value={dimension.ry} name='ry' type='number' placeholder='Specify y-coordinates' onChange={handleChangeRectangle} />
                <select onChange={handleChangeColors} name="colors" id="colors" className='select2'>
                    <option>--Please select a color--</option>
                    <option value="red">Red</option>
                    <option value="blue">Blue</option>
                    <option value="yellow">Yellow</option>
                    <option value="black">Black</option>
                </select>
                <button className={disable ? 'dis' : ''} onClick={submit}>Generate Shape</button> 
            </div>

            {showShape ?
                <div >

                    <svg height="300" width="300" className='roll-in-left'>
                        <rect width={dimension.width} height={dimension.height} rx={dimension.rx} ry={dimension.ry} style={{ fill: col, stroke: col, strokeWidth: '2px' }} />
                    </svg>
                </div>
                :
                ''
            }
            {/* Shows circle when clicked */}
        </div>
    )
}