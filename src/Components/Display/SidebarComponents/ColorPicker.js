import React, { useState, useEffect } from 'react';
import reactCSS from 'reactcss';
import { SketchPicker } from 'react-color';

const SketchExample = (props) => {
    const [displayColorPicker, setDisplayColorPicker] = useState(false);
    const [color, setColor] = useState({
        r: props.color.r,
        g: props.color.g,
        b: props.color.b,
        a: props.color.a,
    });

    useEffect(() => {
        setColor({
            r: props.color.r,
            g: props.color.g,
            b: props.color.b,
            a: props.color.a,
        });
    }, [props.color]);

    const handleClick = () => {
        setDisplayColorPicker(!displayColorPicker);
    };

    const handleClose = () => {
        setDisplayColorPicker(false);
    };

    const handleChange = (color) => {
        setColor(color.rgb);
        props.parentCallBack(color.rgb, props.id);
    };

    const styles = reactCSS({
        'default': {
            color: {
                width: '36px',
                height: '14px',
                borderRadius: '2px',
                background: `rgba(${color.r}, ${color.g}, ${color.b}, ${color.a})`,
            },
            swatch: {
                padding: '4px',
                background: '#fff',
                borderRadius: '1px',
                boxShadow: '0 0 0 1px rgba(0,0,0,.1)',
                display: 'inline-block',
                cursor: 'pointer',
            },
            popover: {
                position: 'fixed',
                zIndex: '2',
                bottom: '40vh',
                left: '180px',
            },
            cover: {
                position: 'fixed',
                top: '0px',
                right: '0px',
                bottom: '0px',
                left: '0px',
            },
        },
    });

    return (
        <div>
            <div style={styles.swatch} onClick={handleClick}>
                <div style={styles.color} />
            </div>
            {displayColorPicker ? (
                <div style={styles.popover}>
                    <div style={styles.cover} onClick={handleClose} />
                    <SketchPicker color={color} onChange={handleChange} />
                </div>
            ) : null}
        </div>
    );
};

export default SketchExample;
