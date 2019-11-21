import React from 'react';

export const PeopleList = ({data}) =>
    <ol className={'people-list'}>
        {data.results.map((person, i) => {
            const {first, last} = person.name;
            return <li key={i}>{`first name: ${first} last name: ${last}`}</li>
        })
        }
    </ol>;