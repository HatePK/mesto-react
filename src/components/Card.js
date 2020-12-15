import React, { useContext } from "react";
import deleteButtonIcon from "../images/DeleteButton.svg";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Card({onCardClick, card, onCardLike, onCardDelete}) {
    const currentUser = useContext(CurrentUserContext)
    function handleClick() {
        onCardClick(card);
    }  

    function handleLikeClick() {
        onCardLike(card)
    }

    function handleDeleteClick() {
        onCardDelete(card)
    }
    
    const isOwn = card.owner._id === currentUser._id;
    const cardDeleteButtonClassName = (
        `element__delete ${isOwn ? 'element__delete_type_visible' : 'element__delete_type_hidden'}`
    ); 

    const isLiked = card.likes.some(i => i._id === currentUser._id);
    const cardLikeButtonClassName = `element__like ${isLiked ? 'element__like_type_active' : ''}`

    return (
    <li className="element">
        <img className="element__image" alt={card.name} src={card.link} onClick={handleClick}/>
        <button className={cardDeleteButtonClassName} onClick={handleDeleteClick}><img className="element__delete-image" alt="Удалить" src={deleteButtonIcon}/></button>
        <div className="element__panel">
            <h2 className="element__text">{card.name}</h2>
            <div className='element__like-container'>
                <button className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                <div className="element__like-counter">
                    <p className="element__like-conter-amount">{card.likes.length}</p>    
                </div>
            </div>  
        </div>
    </li>
    );
  }
  
  export default Card;