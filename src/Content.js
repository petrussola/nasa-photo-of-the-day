import React from 'react';
import Date from './Date';
import Author from './Author';
import Description from './Description';

function Content(props) {
    const {date, author, description} = props;

    return (
        <div className='content'>
            <Date  dateText={date}/>
            <Author authorText={author}/>
            <Description descriptionText={description}/>
        </div>
    )
}

export default Content;