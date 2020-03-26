import React from 'react'
import Card from './Card'


const CardList = ({ robots }) => {


    return (
        <div>
            {robots.map((user, i) => {
                return <Card key={robots[i].id}
                    id={robots[i].id}
                    name={robots[i].name}
                    city={robots[i].city}
                />
            })}
        </div>
    )
}

export default CardList;