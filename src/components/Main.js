import React from "react";
import api from "../utils/Api";
import Card from "./Card";

function Main(props) {

  const [userName, setUserName] = React.useState('');
  const [userDescription, setUserDescription] = React.useState('');
  const [userAvatar, setUserAvatar] = React.useState('');
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    Promise.all([api.getUserData(), api.getInitialCards()])
    .then(res => {
      setUserAvatar(res.avatar);
      setUserName(res.name);
      setUserDescription(res.about);
      setCards(res);
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    })
  }, [])



  return(
    <main className="container">
      <section className="profile">
        <div className="profile__avatar">
          <img src={userAvatar} alt="Аватарка" className="profile__image" onClick={props.onEditAvatar} />
        </div>
        <div className="profile__info">
          <div className="profile__block">
            <h1 className="profile__name">{userName}</h1>
            <button type="button" className="profile__edit-button" onClick={props.onEditProfile}></button>
          </div>
          <p className="profile__description">{userDescription}</p>
        </div>
        <button type="button" className="profile__add-button" onClick={props.onAddPlace}></button>
      </section>
      <section className="cards">
        {cards.map((card) => (
          <Card
          card={card}
          key={card._id}
          link={card.link}
          name={card.name}
          likes={card.likes.length}
          onCardClick={props.onCardClick}
          />
        ))}
      </section>
    </main>
  )
}

export default Main;
