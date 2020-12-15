import React, { useEffect, useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import ImagePopup from "./ImagePopup";
import api from "../utils/api";
import CurrentUserContext from "../contexts/CurrentUserContext";
import EditProfilePopup from "./EditProfilePopup";
import EditAvatarPopup from "./EditAvatarPopup";
import AddPlacePopup from "./AddPlacePopup";

function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: "", link: ""});
    const [currentUser, setCurrentUser] = useState({})

    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getCards()
        .then((initialCards) => {
            setCards(initialCards);  
        })
    }, [])

    function handleCardLike(card) {
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        if (!isLiked) { 
            api.addLike(card._id).then((newCard) => {
            const newCards = cards.map((c) => c._id === card._id ? newCard : c);
            setCards(newCards);
            });
        } else { 
            api.deleteLike(card._id).then((newCard) => {
                const newCards = cards.map((c) => c._id === card._id ? newCard : c);
                setCards(newCards);
            });
        }
    } 

    function handleCardDelete(card) {
        const isOwn = card.owner._id === currentUser._id;
        api.deleteCard(card._id, isOwn).then(() => {
            const newCards = cards.filter((c) => c._id !== card._id);
            setCards(newCards);
        });
    } 

    useEffect(() => {
        api.userInfo()
        .then((userData) => {
            setCurrentUser(userData)
        })
    }, [])

    const handleEditProfileClick = () => {
        setisEditProfilePopupOpen(true);
    };

    const handleAddPlaceClick = () => {
        setisAddPlacePopupOpen(true);
    };

    const handleEditAvatarClick = () => {
        setisEditAvatarPopupOpen(true);
    };

    function handleCardClick(card) {
        setSelectedCard({link: card.link, name: card.name})
    }

    const handleUpdateAvatar = ({link}) => {
        api.editAvatar(link)
        .then((userData) => {
            setCurrentUser(userData)
            closeAllPopups()
        })
    }

    const handleAddPlaceSubmit = ({name, link}) => {
        api.createCard(name, link)
        .then((newCard) => {
            setCards([newCard, ...cards])
            closeAllPopups()
        })
    }

    const closeAllPopups = () => {
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        setisEditAvatarPopupOpen(false);
        setSelectedCard({link: "", name: ""})
    }

    const handleUpdateUser = ({name, about}) => {
        api.setUserInfo(name, about)
        .then((userData) => {
            setCurrentUser(userData)
            closeAllPopups()
        })
    }

    return (
        <CurrentUserContext.Provider value={currentUser}>
            <Header />
            <Main 
                onEditProfile={handleEditProfileClick} 
                onAddPlace={handleAddPlaceClick} 
                onEditAvatar={handleEditAvatarClick} 
                onCardClick={handleCardClick}
                cards={cards}
                onCardLike={handleCardLike}
                onCardDelete={handleCardDelete}
            />
            <Footer />
            <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
            <EditProfilePopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
            <EditAvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} /> 
            <AddPlacePopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups} onAddPlace={handleAddPlaceSubmit} />
        </CurrentUserContext.Provider>
    );
}

export default App;
