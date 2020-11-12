import React, { useState, useEffect } from 'react';
import { toast } from 'react-toastify';

export default function Ellipse() {
    const [col, setCol] = useState('');
    const [disable, setDisable] = useState(false);
    const [dimension, setDimension] = useState({
        cx: '',
        cy: '',
        rx: '',
        ry: ''
    })

    const [showShape, setShowShape] = useState(false)

    const handleChangeColors = (event) => {
        setCol(event.target.value)
    };

    const handleChangeEllipse = (event) => {
        setDimension({ ...dimension, [event.target.name]: event.target.value })
    };

    useEffect(() => {
        if (dimension.cx > 190 || dimension.cy > 70 || dimension.rx > 100 || dimension.ry > 50 ) {
            setDisable(true)
            setShowShape(false)
            toast.error('Input must not be gretaer than these recommended values: CX:190, CY:70, RX:100, RY: 50', {
                position: "top-right",
                autoClose: 5000,
            });
        } else {
            setDisable(false)
        }
    }, [dimension.cx, dimension.cy, dimension.rx, dimension.ry])

    function submit() {
        if ( dimension.cx !== '' && dimension.cy !== '' && dimension.rx !== '' && dimension.ry !== '' && col !== '') {
            setShowShape(true);
        } else {
            toast.error('Please input all fields', {
                position: "top-right",
                autoClose: 5000,
            });
        }
    };

    return (
        <div className='bounce-bottom'>
            {/* Shows ellipse when clicked */}
            <h3 className='top'>DIMENSIONS</h3>
            <div>
                <input value={dimension.cx} name='cx' type='number' placeholder='CX' onChange={handleChangeEllipse} />
                <input value={dimension.cy} name='cy' type='number' placeholder='CY' onChange={handleChangeEllipse} />
                <input value={dimension.rx} name='rx' type='number' placeholder='RX' onChange={handleChangeEllipse} />
                <input value={dimension.ry} name='ry' type='number' placeholder='RY' onChange={handleChangeEllipse} />
               
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
                        <ellipse cx={dimension.cx} cy={dimension.cy} rx={dimension.rx} ry={dimension.ry} style={{ fill: col, stroke: col, strokeWidth: '2' }} />
                    </svg>
                </div>
                :
                ''
            }
            {/* Shows ellipse when clicked */}
        </div>
    )
}