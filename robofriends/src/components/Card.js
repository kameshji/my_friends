import React from "react";
import '../components/Card.css'



const Card = ({id, name, city }) => {
    return (
        <div className=" tc bg-light-purple dib br3 pa3 ma2 grow bw2 shadow-5 ">
            <div className="pa2 ">
            <img src={`https://robohash.org/${id}?200x200`} alt="kitty cat"></img>
            <h1 className="name username head">{name}</h1>
             <h4 className='white'>lives here-{city}</h4>

            </div>
        </div>
    )
}

export default Card; 