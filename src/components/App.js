import React from 'react';
import api from '../utils/Api';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import AddCardPopup from './AddCardPopup';
import EditProfilePopup from './EditProfilePopup';
import AvatarPopup from './AvatarPopup';
import ImagePopup from './ImagePopup';
import { CurrentUserContext } from '../context/CurrentUserContext';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});
  const [currentUser, setCurrentUser] = React.useState();
  const [cards, setCards] = React.useState([]);

  React.useEffect(() => {
    api.getInitialCards()
      .then(res =>{
        setCards(res)
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      })
  }, [])

  React.useEffect(() => {
    api.getUserData()
      .then(user => {
        setCurrentUser(user);
      })
      .catch(err => {
        console.log (`Ошибка: ${err}`)
      });
  }, []);

  React.useEffect(() => {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape') {
        closeAllPopups();
      }
    })
  },[]);

  function overlayClick(e) {
    if (e.classList.contains('popup')){
      closeAllPopups()
    }
  }

  function handleUpdateAvatar(link) {
    api.updateAvatar(link)
    .then(user => {
      setCurrentUser(user);
      closeAllPopups();
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    });
  }

  function handleUpdateUser(name, about) {
    api.updateUserData(name, about)
    .then((user) => {
      setCurrentUser(user)
      closeAllPopups();
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    });
  }

  function handleCardLike(card) {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.likeCardStatus(card._id, !isLiked)
    .then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
    .catch(err => {
      console.log(`Ошибка: ${err}`)
    })
  }

  function handleCardDelete(cardId) {
    api.deleteCard(cardId)
      .then(() => {
        setCards(cards.filter((c) => c._id !== cardId));
      })
      .catch(err => {
        console.log(`Ошибка: ${err}`)
      })
  }

  function handleAddPlace(name, link) {
    api.postCard(name, link)
     .then((res) => {
      setCards([res, ...cards])
    })
    .catch(err => {
      console.log (`Ошибка: ${err}`)
    });
  }

  function handelAddPlace(){
    setIsAddPlacePopupOpen(true)
  }

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
    setSelectedCard(false);
  }

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card)
  }

   return (
    <div className="body">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
         cards={cards}
         onEditProfile={handleEditProfileClick}
         onEditAvatar={handleEditAvatarClick}
         onCardClick={handleCardClick}
         onCardLike={handleCardLike}
         onCardDelete={handleCardDelete}
         onAddPlace={handelAddPlace} />
        <Footer />
        <PopupWithForm
          name="delete"
          title='Вы уверены?'
          buttonText='Удалить'
          onClose={closeAllPopups}
          overlay={overlayClick}/>
        <AddCardPopup
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          overlay={overlayClick}
          onAddPlace={handleAddPlace}/>
        <EditProfilePopup
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          overlay={overlayClick}
          onUpdateUser={handleUpdateUser}/>
        <AvatarPopup
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          overlay={overlayClick}
          onUpdateAvatar={handleUpdateAvatar}/>
        <ImagePopup
          isOpen={isImagePopupOpen}
          onClose={closeAllPopups}
          card={selectedCard}
          link={selectedCard.link}
          name={selectedCard.name}
          overlay={overlayClick}/>
      </CurrentUserContext.Provider>
    </div>
  );
}

export default App;
