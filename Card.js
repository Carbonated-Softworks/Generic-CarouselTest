import React from 'react';
import WatchTypes from 'watch-types';


//defining constants for watch
const Card = ({Card}) => {
    const {index, picture, brand, model, jewels, pwrres} = watch;
    return (
        <div id={`card-${index}`} className="card">
            <img src={picture} alt={brand} />
            <div className="details">
                <span className="index">{index+1}</span>

                //Below is for the naming of the watch (brand & model)

                <p className="naming">
                    {brand}<br />
                    {model}
                </p>

                //Below is for numerical info representation such as jewel count.

                <ul className="features">
                    <li className="icon-jewel">{jewels} <span>jewels</span></li>
                    <li className="icon-pwrres">{pwrres} <span>pwrres</span></li>
                </ul>
            </div>
        </div>
    )
}

Card.watchTypes = {
    watch: WatchTypes.object.isRequired
}

export default Card;