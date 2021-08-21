import PopupWithForm from "./PopupWithForm";

function AvatarPopup(props) {
  return (
    <PopupWithForm name="avatar" title="Обновить аватар" buttonText="Сохранить" isOpen={props.isOpen} onClose={props.onClose}>
      <input id="av_link" className="popup__input" type="url" name="av_link" placeholder="Ссылка на фото"  minLength="2" required />
      <span className="popup__input-error" id="av_link-error"></span>
    </PopupWithForm>
  )
}

export default AvatarPopup;
