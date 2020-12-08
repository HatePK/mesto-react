import closePopupIcon from "../images/Close-Icon.svg";

function PopupWithForm({name, title, buttontext, children, isOpen, onClose}) {
    function checkPopup() {
        if (isOpen) return ("popup_opened")
    }

    
    return (
        <div className={`popup popup_type_${name} ${checkPopup()}`}>
            <div className={`popup__overlay popup__overlay_type_${name}`}></div>
            <form className={`popup__container popup__container_${name}`}>
                <button type="button" onClick={onClose} className="popup__close-button"><img className="popup__close-icon" alt="Закрыть" src={closePopupIcon}/></button>
                <h2 className="popup__title">{title}</h2>
                {children}
                <button type="submit" className="popup__submit popup__submit_disabled" disabled>{buttontext}</button> 
            </form>
        </div>
    )
}

export default PopupWithForm;