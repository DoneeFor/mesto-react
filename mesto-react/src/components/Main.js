import avatarka from '../images/Jacques-YvesCousteau.jpg';

function Main() {
  return(
    <main className="container">
      <section className="profile">
        <div className="profile__avatar">
          <img src={avatarka} alt="Аватарка" className="profile__image" />
        </div>
        <div className="profile__info">
          <div className="profile__block">
            <h1 className="profile__name">Жак Ив Кусто</h1>
            <button type="button" className="profile__edit-button"></button>
          </div>
          <p className="profile__description">Исследователь океана</p>
        </div>
        <button type="button" className="profile__add-button"></button>
      </section>
      <section className="cards">
      </section>
    </main>
  )
}

export default Main;
