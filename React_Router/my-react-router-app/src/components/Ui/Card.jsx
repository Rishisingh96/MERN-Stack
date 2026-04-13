import { NavLink } from "react-router-dom"
import "./Card.css"

export const Card = ({curMovie}) =>{
    const {Poster, imdbId} = curMovie;
    return(
        <>
            <li className="hero-container">
                <div className="main-container">
                    <div className="poster-container">
                        <img src={Poster} className = "poster"
                          alt = {imdbId}
                        />
                    </div>
                    <div className="ticket-container">
                        <div className="ticket__content">
                           <button className="ticket__buy-btn">Watch now</button>
                        </div>
                    </div>
                </div>
            </li>
        </>
    )
}