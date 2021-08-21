import PopupWithForm from "./PopupWithForm";

function EditProfilePopup(props) {
  return (
    <PopupWithForm name="edit" title="Редактировать профиль" buttonText="Создать" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="name" className="popup__input" type="text" name="username" placeholder="Ваше имя"  minLength="2" maxLength="40" required />
      <span className="popup__input-error" id="name-error"></span>
      <input id="occupation" className="popup__input" type="text" name="occupation" placeholder="Род деятельности"  minLength="2" maxLength="200" required />
      <span className="popup__input-error" id="occupation-error"></span>
    </PopupWithForm>
  )
}

export default EditProfilePopup;
