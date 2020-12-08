import editAvaIcon from "../images/edit-ava-icon.svg";
import editProfileIcon from "../images/EditButton.svg";
import addCardIcon from "../images/AddButton.svg";
import { useEffect, useState } from "react";
import api from "../utils/api";
import Card from "./Card";

function Main({onEditProfile, onAddPlace, onEditAvatar, onCardClick}) {
    const [userName, setUserName] = useState();
    const [userDescription, setUserDescription] = useState();
    const [userAvatar, setUserAvatar] = useState();
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.userInfo()
        .then((userData) => {
            setUserName(userData.name)
            setUserDescription(userData.about)
            setUserAvatar(userData.avatar)
        })
    }, [])

    useEffect(() => {
        api.getCards()
        .then((initialCards) => {
            const cards = initialCards.map((item) => {
                return {
                    name: item.name,
                    link: item.link,
                    likes: item.likes.length,
                    onCardClick: onCardClick,
                    id: item._id
                }
            })
            setCards(cards);  
        })
    }, [])

    return (
    <main className="main">
        <section className="profile">
            <div className="profile__avatar" style={{ backgroundImage: `url(${userAvatar})` }}>
                <button className="profile__edit-avatar" onClick={onEditAvatar}>
                    <img className="profile__edit-avatar-icon" src={editAvaIcon} alt="редактирование аватарки"/>
                </button>
            </div>
            <div className="profile__info">
                <div className="profile__line">
                    <h1 className="profile__name">{userName}</h1>
                    <button className="profile__edit-button" onClick={onEditProfile}><img  className="profile__edit-icon" alt="Редактировать профиль" src={editProfileIcon}/></button>
                </div>
                <p className="profile__job">{userDescription}</p>
            </div>
            <button className="profile__add-button" onClick={onAddPlace}><img className="profile__add-button-image" alt="Добавить информацию" src={addCardIcon}/></button>
        </section>
        <section className="elements">
            <ul className="elements__list">
            </ul>
        </section>
        <ul className="elements__list">
            
            {cards.map(({ id, ...props }) => {
                return <Card key={id} {...props} />;
            })}
        </ul>
    </main>
    )
  }
  
  export default Main;