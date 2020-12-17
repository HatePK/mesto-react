import editAvaIcon from "../images/edit-ava-icon.svg";
import editProfileIcon from "../images/EditButton.svg";
import addCardIcon from "../images/AddButton.svg";
import React, { useContext } from "react";
import Card from "./Card";
import CurrentUserContext from "../contexts/CurrentUserContext";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick, cards, onCardLike, onCardDelete }) {
    const currentUser = useContext(CurrentUserContext)

    
    
    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
                <button className="profile__edit-avatar" onClick={onEditAvatar}>
                    <img className="profile__edit-avatar-icon" src={editAvaIcon} alt="редактирование аватарки"/>
                </button>
            </div>
            <div className="profile__info">
                <div className="profile__line">
                    <h1 className="profile__name">{currentUser.name}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile}><img  className="profile__edit-icon" alt="Редактировать профиль" src={editProfileIcon}/></button>
                </div>
                <p className="profile__job">{currentUser.about}</p>
            </div>
            <button className="profile__add-button" onClick={onAddPlace}><img className="profile__add-button-image" alt="Добавить информацию" src={addCardIcon}/></button>
        </section>
        <section className="elements">
            <ul className="elements__list">
            </ul>
        </section>
        <ul className="elements__list">
            
            {cards.map((card) => {
                return <Card key={card._id} onCardClick={onCardClick} card={card} onCardLike={onCardLike} onCardDelete ={onCardDelete} />;
            })}
        </ul>
    </main>
    )
  }
  
  export default Main;