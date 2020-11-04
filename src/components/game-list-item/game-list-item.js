import React from "react";
import './game-list-item.css';

const GameListItem = ({game}) => {
    const {title, author, price, coverImage, genre} = game;
    return (
        <div className="game-list-item">
            <div className="game-cover">
                <img src={coverImage} alt="game-img"/>
            </div>
            <div className="game-details">
                <span className="game-title">{title}</span>
                <div className="game-author">{author}</div>
                <div className="game-genre">{genre}</div>
                <div className="game-price">{price}$</div>
                <button className="btn btn-info add-to-cart">Add to cart</button>
            </div>
        </div>
    )
};
export default GameListItem;