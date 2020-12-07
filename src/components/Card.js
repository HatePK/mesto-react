import DeleteButtonIcon from "../images/DeleteButton.svg";


function Card({ name, link, likes, onCardClick }) {
    function handleClick() {
        onCardClick({name, link});
    }  

    return (
    <li className="element">
        <img className="element__image" alt={name} src={link} onClick={handleClick}/>
        <button className="element__delete"><img className="element__delete-image" alt="Удалить" src={DeleteButtonIcon}/></button>
        <div className="element__panel">
            <h2 className="element__text">{name}</h2>
            <div className='element__like-container'>
                <button className="element__like"></button>
                <div className="element__like-counter">
                    <p className="element__like-conter-amount">{likes}</p>    
                </div>
            </div>  
        </div>
    </li>
    );
  }
  
  export default Card;