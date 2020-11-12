import React, { useState } from 'react';
import Circle from './shapeGenerator/Circle';
import Rectangle from './shapeGenerator/Rectangle';
import Ellipse from './shapeGenerator/Ellipse';

function Shapes() {

    const [showCircle, setShowCircle] = useState(false);
    const [showRectangle, setShowRectangle] = useState(false);
    const [showEllipse, setShowEllipse] = useState(false);

    const handleChange = (event) => {
        let cir
        cir = event.target.value
        if (cir === 'circle') {
            setShowCircle(true)
            setShowRectangle(false)
            setShowEllipse(false)
        } else if (cir === 'rectangle') {
            setShowRectangle(true);
            setShowCircle(false)
            setShowEllipse(false)
        } else if (cir === 'ellipse') {
            setShowEllipse(true);
            setShowCircle(false);
            setShowRectangle(false)
        }
    }

    return (
        <div >
            <header className="nav">
                <p className='heartbeat'>SVG SHAPES GENERATOR </p>
            </header>
            <div className='heading-background'>
                < p> SHAPES GENERATOR </p>
            </div>

            {/* <h1 className='title'>Please select a shape</h1> */}

            <div className='shapes-body'>
                <select onChange={handleChange} name="shapes" id="shapes" className="select">
                    <option>--Please select a shape--</option>
                    <option value="circle">Circle</option>
                    <option value="ellipse">Ellipse</option>
                    <option value="rectangle">Rectangle</option>
                </select>

                {showCircle ?
                    <Circle />
                    :
                    ''
                }

                {showRectangle ?
                    <Rectangle />
                    :
                    ''
                }

                {showEllipse ?
                    <Ellipse />
                    :
                    ''
                }
            </div>
        </div>
    )

}

export default Shapes;