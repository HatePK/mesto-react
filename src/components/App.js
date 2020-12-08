import React, { useState } from "react";
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import PopupWithForm from "./PopupWithForm";
import ImagePopup from "./ImagePopup";

function App() {

    const [isEditProfilePopupOpen, setisEditProfilePopupOpen] = useState(false);
    const [isAddPlacePopupOpen, setisAddPlacePopupOpen] = useState(false);
    const [isEditAvatarPopupOpen, setisEditAvatarPopupOpen] = useState(false);
    const [selectedCard, setSelectedCard] = useState({name: "", link: ""});
    

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

    const closeAllPopups = () => {
        setisEditProfilePopupOpen(false);
        setisAddPlacePopupOpen(false);
        setisEditAvatarPopupOpen(false);
        setSelectedCard({link: "", name: ""})
    }

    return (
        <div>
        <Header />
        <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
        <Footer />
        <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
        <PopupWithForm 
            name="edit-profile"
            title="Редактировать профиль"
            buttontext="Сохранить"
            onClose={closeAllPopups}
            isOpen={isEditProfilePopupOpen}>
                <input type="text" name="name-input" className="popup__field popup__field_valid popup__field_type_name" placeholder="Имя" required minLength="2" maxLength="40"/>
                <span className="popup__field-error" id="name-input-error"></span>  
                <input type="text" name="job-input" className="popup__field popup__field_valid popup__field_type_job" placeholder="Деятельность" required minLength="2" maxLength="200"/>
                <span className="popup__field-error" id="job-input-error"></span>
        </PopupWithForm>
        <PopupWithForm 
            name="new-place"
            title="Новое место"
            buttontext="Создать"
            onClose={closeAllPopups}
            isOpen={isAddPlacePopupOpen}>
                <input type="text" name="place-input" className="popup__field popup__field_valid popup__field_type_place-name" placeholder="Название" required minLength="1" maxLength="30"/>
                <span className="popup__field-error" id="place-input-error"></span>
                <input type="url" name="url-input" className="popup__field popup__field_valid popup__field_type_place-url" placeholder="Ссылка на картинку" required/>
                <span className="popup__field-error" id="url-input-error"></span>
        </PopupWithForm>
        <PopupWithForm 
            name="edit-avatar"
            title="Обновить аватар"
            buttontext="Сохранить"
            onClose={closeAllPopups}
            isOpen={isEditAvatarPopupOpen}>
                <input type="url" name="avatar-url" className="popup__field popup__field_valid popup__field_type_avatar-url" placeholder="Введите url" required/>
                <span className="popup__field-error" id="avatar-url-error"></span>
        </PopupWithForm>
        </div>
    );
}

export default App;
