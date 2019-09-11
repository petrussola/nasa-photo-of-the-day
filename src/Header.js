import React from 'react';
import Title from './Title';

function Header({title}) {
    return (
        <div className='header'>
            <Title title={title} />
        </div>
    )
}

export default Header;