import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function AddPlacePopup ({onClose, isOpen, onAddPlace}) {
    const nameInput = useRef()
    const linkInput = useRef()
    
    function handleSubmit(e) {
        e.preventDefault()
        onAddPlace({
            name: nameInput.current.value,
            link: linkInput.current.value
        })
        nameInput.current.value = ''
        linkInput.current.value = ''
    }

    return (
        <PopupWithForm 
            name="new-place"
            title="Новое место"
            buttontext="Создать"
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}>
                <input type="text" name="place-input" ref={nameInput} className="popup__field popup__field_valid popup__field_type_place-name" placeholder="Название" required minLength="1" maxLength="30"/>
                <span className="popup__field-error" id="place-input-error"></span>
                <input type="url" name="url-input" ref={linkInput} className="popup__field popup__field_valid popup__field_type_place-url" placeholder="Ссылка на картинку" required/>
                <span className="popup__field-error" id="url-input-error"></span>
        </PopupWithForm>
    )
}

export default AddPlacePopup