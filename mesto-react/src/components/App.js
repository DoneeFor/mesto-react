import headerLogo from '../images/header__logo.svg';
import avatarka from '../images/Jacques-YvesCousteau.jpg';
import '../index.css';

function App() {
  return (
    <div class="body">
      <header class="header">
        <img src={headerLogo} alt="Логотип" class="header__logo" />
      </header>
      <main class="container">

        <section class="profile">
          <div class="profile__avatar">
            <img src={avatarka} alt="Аватарка" class="profile__image" />
          </div>
          <div class="profile__info">
            <div class="profile__block">
              <h1 class="profile__name">Жак Ив Кусто</h1>
              <button type="button" class="profile__edit-button"></button>
            </div>
            <p class="profile__description">Исследователь океана</p>
          </div>
          <button type="button" class="profile__add-button"></button>
        </section>
        <section class="cards">
        </section>

        <footer class="footer">
          <p class="footer__copyright">&copy; 2020 Mesto Russia</p>
        </footer>
      </main>

      <article class="popup" id="popupEdit">
        <div class="popup__container">
          <button type="button" class="popup__close" id="closeEditPopup"></button>
          <legend class="popup__title">Редактировать профиль</legend>
          <form name="popup-form-edit" class="popup__form" id="edit-profile" novalidate>
            <input id="name" class="popup__input" type="text" name="username" placeholder="Ваше имя" value="" minlength="2" maxlength="40" required />
            <span class="popup__input-error" id="name-error"></span>
            <input id="occupation" class="popup__input" type="text" name="occupation" placeholder="Род деятельности" value="" minlength="2" maxlength="200" required />
            <span class="popup__input-error" id="occupation-error"></span>
            <button type="submit" class="popup__submit">Сохранить</button>
          </form>
        </div>
      </article>

      <article class="popup popup_avatar">
        <div class="popup__container">
          <button type="button" aria-label="Закрыть" class="popup__close" id='closeAvatarPopup'></button>
          <form name="form-newAvatar" class="popup__form popup__form_avatar" novalidate>
            <h3 class="popup__title">Обновить аватар</h3>
            <input id="av_link" class="popup__input" type="url" name="av_link" placeholder="Ссылка на фото" value="" minlength="2" required />
            <span class="popup__input-error" id="av_link-error"></span>
            <button type="submit" class="popup__submit">Сохранить</button>
          </form>
        </div>
      </article>

      <article class="popup popup_type_add-card">
        <div class="popup__container">
          <button type="button" class="popup__close"  id='closeAddPopup'></button>
          <form name="popup-form-add" autocomplete="on" class="popup__form" id='add-card' novalidate>
            <fieldset class="popup__field">
              <legend class="popup__title">Новое место</legend>
              <input id="placename" class="popup__input" type="text" name="placename" placeholder="Название" minlength="2" maxlength="30" required />
              <span class="popup__input-error" id="placename-error"></span>
              <input id="link" class="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
              <span class="popup__input-error" id="link-error"></span>
              <button type="submit" class="popup__submit">Создать</button>
            </fieldset>
          </form>
        </div>
      </article>

      <article class="popup popup_type_image-overlay">
          <figure class="popup__figure">
            <button type="button" class="popup__close"></button>
            <img src="#" alt="Место" class="popup__image" />
            <figcaption class="popup__caption"></figcaption>
          </figure>
      </article>

      <article class="popup" id="popupDelete">
        <div class="popup__container">
          <button type="button" class="popup__close" id="closeDeletePopup"></button>
          <h3 class="popup__title">Вы уверены?</h3>
          <form name="popup-form-delete" class="popup__form" novalidate>
            <button type="submit" class="popup__submit">Да</button>
          </form>
        </div>
      </article>

      <template id="card-template">
        <figure class="card">
          <img src="#" alt="#" class="card__image" />
          <button class="card__trash"></button>
          <figcaption class="card__description">
            <h2 class="card__title"></h2>
            <div class="card__like-place">
              <button type="submit" class="card__like"></button>
              <span class="card__like-count">0</span>
            </div>
          </figcaption>
        </figure>
      </template>
    </div>
  );
}

export default App;
