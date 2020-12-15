import PopupWithForm from "./PopupWithForm";
import React, { useRef } from "react";

function EditAvatarPopup({isOpen, onClose, onUpdateAvatar}) {
    const refInput = useRef();

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          link: refInput.current.value,
        });
        refInput.current.value = ''
      } 

    return (
        <PopupWithForm 
            name="edit-avatar"
            title="Обновить аватар"
            buttontext="Сохранить"
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}>
                <input ref={refInput} type="url" name="avatar-url" className="popup__field popup__field_valid popup__field_type_avatar-url" placeholder="Введите url" required/>
                <span className="popup__field-error" id="avatar-url-error"></span>
        </PopupWithForm>
    )
}

export default EditAvatarPopup