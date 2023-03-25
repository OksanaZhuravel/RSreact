import React, { Component } from 'react';
import Notification from './Notification ';
interface State {
  isSubmitted: boolean;
}
class Form extends Component<object, State> {
  nameInputRef = React.createRef<HTMLInputElement>();
  surnamesRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioYesRef = React.createRef<HTMLInputElement>();
  radioNoRef = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();
  cardsListRef = React.createRef<HTMLDivElement>();
  constructor(props: object) {
    super(props);
    this.state = { isSubmitted: false };
  }
  handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nameInput = this.nameInputRef.current;
    const surnamesInput = this.surnamesRef.current;
    const dateInput = this.dateInputRef.current;
    const select = this.selectRef.current;
    const checkbox = this.checkboxRef.current;
    const radioYes = this.radioYesRef.current;
    const radioNo = this.radioNoRef.current;
    const fileInput = this.fileInputRef.current;
    const cardsList = this.cardsListRef.current;
    const card = document.createElement('div');
    card.className = 'card';
    if (nameInput && nameInput.value.trim()) {
      const name = document.createElement('div');
      name.innerText = `Name: ${nameInput.value.trim()}`;
      card.appendChild(name);
      nameInput.value = '';
    }
    if (surnamesInput && surnamesInput.value.trim()) {
      const surname = document.createElement('div');
      surname.innerText = `Surname: ${surnamesInput.value.trim()}`;
      card.appendChild(surname);
      surnamesInput.value = '';
    }

    if (dateInput && dateInput.value.trim()) {
      const birthday = document.createElement('div');
      birthday.innerText = `Birthday: ${dateInput.value.trim()}`;
      card.appendChild(birthday);
      dateInput.value = '';
    }

    if (select && select.value.trim()) {
      const color = document.createElement('div');
      color.innerText = `Favorite color: ${select.value.trim()}`;
      card.appendChild(color);
      select.value = '';
    }

    if (checkbox && checkbox.checked) {
      const consent = document.createElement('div');
      consent.className = 'consent';
      consent.innerText = 'Consent has been obtained for the use of the name';
      card.appendChild(consent);
      checkbox.checked = false;
    }

    if (radioYes && radioYes.checked) {
      const gender = document.createElement('div');
      gender.innerText = 'Gender: Male';
      card.appendChild(gender);
      radioYes.checked = false;
      if (radioNo) {
        radioNo.checked = false;
      }
    } else if (radioNo && radioNo.checked) {
      const gender = document.createElement('div');
      gender.innerText = 'Gender: Female';
      card.appendChild(gender);
      if (radioYes) {
        radioYes.checked = false;
      }
      radioNo.checked = false;
    }

    if (fileInput && fileInput.files && fileInput.files[0]) {
      const avatar = document.createElement('div');
      avatar.className = 'avatar';
      avatar.innerText = `Avatar: ${fileInput.files[0].name}`;
      const image = document.createElement('img');
      image.src = URL.createObjectURL(fileInput.files[0]);
      card.appendChild(avatar);
      card.appendChild(image);
      fileInput.value = '';
    }
    cardsList?.appendChild(card);
    const form = event.currentTarget;
    form.reset();
    this.setState({ isSubmitted: true });
    setTimeout(() => {
      this.setState({ isSubmitted: false });
    }, 1000);
  };

  render() {
    const { isSubmitted } = this.state;
    return (
      <div>
        <form className="form-container" onSubmit={this.handleSubmit}>
          <label>
            Your name:
            <input type="text" ref={this.nameInputRef} required />
          </label>
          <label>
            Your surname:
            <input type="text" ref={this.surnamesRef} required />
          </label>
          <label>
            Your birthday:
            <input type="date" ref={this.dateInputRef} required />
          </label>
          <label>
            Choose your favorite color:
            <select ref={this.selectRef} required>
              <option value=""></option>
              <option value="red">Red</option>
              <option value="Blue ">Blue </option>
              <option value="Green">Green</option>
              <option value="Yellow ">Yellow </option>
            </select>
          </label>
          <label className="checkbox">
            Can I use your name in our application?:
            <input type="checkbox" ref={this.checkboxRef} />
          </label>
          <div className="gender">
            <span>Gender</span>
            <div className="gender-label">
              <label>Male</label>
              <input type="radio" name="gender" ref={this.radioYesRef} />
              <label>Female</label>
              <input type="radio" name="gender" ref={this.radioNoRef} />
            </div>
          </div>
          <div>
            <label>You can upload your photo</label>
            <input type="file" accept="image/*" title="Choose file" ref={this.fileInputRef} />
          </div>
          <button type="submit">Submit</button>
        </form>
        {isSubmitted && <Notification />}
        <div className="cards" ref={this.cardsListRef}></div>
      </div>
    );
  }
}

export default Form;
