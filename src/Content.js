import React from 'react';
import Date from './Date';
import Author from './Author';
import Source from './Source';
import Description from './Description';

function Content(props) {
    const {date, author, description, test} = props;

    return (
        <div className='content'>
            <Date  dateText={date}/>
            <Author authorText={author}/>
            <Source />
            <Description descriptionText={description}/>
        </div>
    )
}

export default Content;