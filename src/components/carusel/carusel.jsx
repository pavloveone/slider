import React, { useEffect, Children, cloneElement } from 'react';

import { useState } from 'react';
import './carusel.css';


export const Carusel = ({ children }) => {

    const [pages, setPages] = useState([]);
    const [offset, setOffset] = useState(0);

    const PAGE_WIDTH = 300;
    const maxOffset = -(PAGE_WIDTH * (pages.length - 1));

    const handleToLeft = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset + PAGE_WIDTH;
            return newOffset;
        })
    }
    const handleToRight = () => {
        setOffset((currentOffset) => {
            const newOffset = currentOffset - PAGE_WIDTH;
            return newOffset;
        })
    }

    useEffect(() => {
        setPages(
            Children.map(children, child => {
                return cloneElement(child, {
                    style: {
                        height: `100%`,
                        maxWidth: `${PAGE_WIDTH}px`,
                        minWidth: `${PAGE_WIDTH}px`,
                    }
                })
            })
        )
    }, [])

    return (
        <div className='main-container'>
            <button className='arrow' onClick={handleToLeft} disabled={offset >= 0 ? true : false}>{`<`}</button>    
            <div className='window'>
                <ul className='all-pages-container'
                    style={{
                        transform: `translateX(${offset}px)`
                    }}
                >
                    {pages}
                </ul>
            </div>
            <button className='arrow' onClick={handleToRight} disabled={offset === maxOffset ? true : false}>{`>`}</button>    
        </div>
    );
}