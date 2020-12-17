import PopupWithForm from "./PopupWithForm";
import React, { useContext, useState } from "react";
import CurrentUserContext from "../contexts/CurrentUserContext";

function EditProfilePopup({isOpen, onClose, onUpdateUser}) {
    const user = useContext(CurrentUserContext);

    const [name, setName] = useState('')
    const [description, setDescription] = useState('')

    React.useEffect(() => {
        setName(user.name);
        setDescription(user.about);
      }, [user]); 

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleDescriptionChange(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateUser({
          name,
          about: description,
        });
      } 

    return (
        <PopupWithForm 
            name="edit-profile"
            title="Редактировать профиль"
            buttontext="Сохранить"
            onClose={onClose}
            isOpen={isOpen}
            onSubmit={handleSubmit}>
                <input type="text" 
                  name="name-input" 
                  onChange={handleNameChange} 
                  value={name} 
                  className="popup__field popup__field_valid popup__field_type_name" 
                  placeholder="Имя" 
                  required minLength="2" 
                  maxLength="40"
                />
                <span className="popup__field-error" id="name-input-error"></span>  
                <input type="text"
                  name="job-input"
                  onChange={handleDescriptionChange}
                  value={description}
                  className="popup__field popup__field_valid popup__field_type_job"
                  placeholder="Деятельность" 
                  required minLength="2" 
                  maxLength="200"
                />
                <span className="popup__field-error" id="job-input-error"></span>
        </PopupWithForm>
    )
}

export default EditProfilePopup;