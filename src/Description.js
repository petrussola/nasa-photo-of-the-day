import React from 'react';

function Description({descriptionText}) {
    return (
        <section className='description'>
            <p>{descriptionText}</p>
        </section>
    )
}

export default Description;