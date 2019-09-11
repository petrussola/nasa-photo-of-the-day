import React from 'react';

function Image({imageURL}){
    return (
        <div className='jumbotron'>
            <img src={imageURL} />
        </div>
    );
};

export default Image;