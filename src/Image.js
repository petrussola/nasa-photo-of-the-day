import React from 'react';

function Image({urlState}){
    return (
        <div>
            <img src={urlState} />
        </div>
    );
};

export default Image;