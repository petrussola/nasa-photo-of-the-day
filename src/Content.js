import React from 'react';
import Date from './Date';
import Author from './Author';
import Description from './Description';

function Content(props) {
    const {date, author, description} = props;

    return (
        <>
            <Date  dateText={date}/>
            <Author authorText={author}/>
            <Description descriptionText={description}/>
        </>
    )
}

export default Content;