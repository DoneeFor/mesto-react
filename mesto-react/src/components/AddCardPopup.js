import PopupWithForm from "./PopupWithForm";

function AddCardPopup(props) {
  return (
    <PopupWithForm name="add" title="Новое место" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="placename" className="popup__input" type="text" name="placename" placeholder="Название" minLength="2" maxLength="30" required />
      <span className="popup__input-error" id="placename-error"></span>
      <input id="link" className="popup__input" type="url" name="link" placeholder="Ссылка на картинку" required />
      <span className="popup__input-error" id="link-error"></span>
    </PopupWithForm>
  )
}

export default AddCardPopup;
