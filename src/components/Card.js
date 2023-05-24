import React from "react"
import '../stylesheets/Card.css'

export default function Card(props) {
    return(
        <div className="card">
            <img className="card--image" src={`images/${props.img}`} alt="" />
            <div className="card--stats">
                <img className="star" src="images/star.png" alt="" />
                <span>{props.rating}</span>
                <span className="gray">({props.reviewCount}) </span>
                <span className="gray">· {props.country}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="card--price">From ${props.price}</span> / person</p>
        </div>
    )
}