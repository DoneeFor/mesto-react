import trash from '../images/Trash.svg';

function Card(props) {

  const handleClick = () => {
    props.onCardClick(props.card)
  }

  return(
    <figure class="card">
      <img src={props.link} alt={props.name} class="card__image" onClick={handleClick}/>
      <button class="card__trash">
        <img src={trash} alt="delete"/>
      </button>
      <figcaption class="card__description">
        <h2 class="card__title">{props.name}</h2>
        <div class="card__like-place">
          <button type="submit" class="card__like"></button>
          <span class="card__like-count">{props.like}</span>
        </div>
      </figcaption>
    </figure>
  )
}

export default Card;
