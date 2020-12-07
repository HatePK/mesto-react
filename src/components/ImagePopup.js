import closeImagePopupIcon from "../images/Close-Icon.svg"

function ImagePopup({card, onClose}) {
    function checkPopup() {
        if (card !== "") return ("popup_opened")
    }
    return (
        <div className={`popup popup_type_image-big ${checkPopup()}`}>
          <div className="popup__overlay popup__overlay_type_image-big"></div>
          <form className="popup__container-image">
              <button type="button" className="popup__close-button" onClick={onClose}><img className="popup__close-icon" alt="Закрыть" src={closeImagePopupIcon}/></button>
              <img className="popup__image" src={card.link} alt={card.name}/>
              <h3 className="popup__image-title">{card.name}</h3>
          </form>
      </div>
    )
}

export default ImagePopup;