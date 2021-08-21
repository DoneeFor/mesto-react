import trash from '../images/Trash.svg';

function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card)
  }

  return(
    <figure className="card">
      <img src={props.link} alt={props.name} className="card__image" onClick={handleClick}/>
      <button className="card__trash">
        <img src={trash} alt="delete"/>
      </button>
      <figcaption className="card__description">
        <h2 className="card__title">{props.name}</h2>
        <div className="card__like-place">
          <button type="submit" className="card__like"></button>
          <span className="card__like-count">{props.like}</span>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;
