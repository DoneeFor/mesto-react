import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import AddCardPopup from './AddCardPopup';
import EditPopup from './EditPopup';
import AvatarPopup from './AvatarPopup';
import ImagePopup from './ImagePopup';
import '../index.css';

function App() {
  const [isEditProfilePopupOpen, setIsEditProfilePopupOpen] = React.useState(false);
  const [isAddPlacePopupOpen, setIsAddPlacePopupOpen] = React.useState(false);
  const [isEditAvatarPopupOpen, setIsEditAvatarPopupOpen] = React.useState(false);
  const [isImagePopupOpen, setIsImagePopupOpen] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState({});

  const handleEditAvatarClick = () => {
    setIsEditAvatarPopupOpen(true)
  };

  const handleEditProfileClick = () => {
    setIsEditProfilePopupOpen(true)
  };

  const handleAddPlaceClick = () => {
    setIsAddPlacePopupOpen(true)
  };

  const closeAllPopups = () => {
    setIsAddPlacePopupOpen(false);
    setIsEditAvatarPopupOpen(false);
    setIsEditProfilePopupOpen(false);
    setIsImagePopupOpen(false);
  }

  const handleCardClick = (card) => {
    setIsImagePopupOpen(true);
    setSelectedCard(card)
  }

   return (
    <div class="body">
      <Header />
      <Main onEditProfile={handleEditProfileClick} onAddPlace={handleAddPlaceClick} onEditAvatar={handleEditAvatarClick} onCardClick={handleCardClick}/>
      <Footer />
      <PopupWithForm name="delete" title='Вы уверены?' buttonText='Удалить' onClose={closeAllPopups}/>
      <AddCardPopup isOpen={isAddPlacePopupOpen} onClose={closeAllPopups}/>
      <EditPopup isOpen={isEditProfilePopupOpen} onClose={closeAllPopups}/>
      <AvatarPopup isOpen={isEditAvatarPopupOpen} onClose={closeAllPopups}/>
      <ImagePopup isOpen={isImagePopupOpen} onClose={closeAllPopups} card={selectedCard} link={selectedCard.link} name={selectedCard.name}/>
    </div>
  );
}

export default App;
