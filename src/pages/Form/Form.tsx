import React, { Component } from 'react';

class Form extends Component {
  nameInputRef = React.createRef<HTMLInputElement>();
  surnamesRef = React.createRef<HTMLInputElement>();
  dateInputRef = React.createRef<HTMLInputElement>();
  selectRef = React.createRef<HTMLSelectElement>();
  checkboxRef = React.createRef<HTMLInputElement>();
  radioYesRef = React.createRef<HTMLInputElement>();
  radioNoRef = React.createRef<HTMLInputElement>();
  fileInputRef = React.createRef<HTMLInputElement>();
  cardsListRef = React.createRef<HTMLDivElement>();

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
    if (nameInput && nameInput.value.trim()) {
      const card = document.createElement('div');
      card.innerText = `Name: ${nameInput.value.trim()}`;
      cardsList?.appendChild(card);
      nameInput.value = '';
    }
    if (surnamesInput && surnamesInput.value.trim()) {
      const card = document.createElement('div');
      card.innerText = `Surname: ${surnamesInput.value.trim()}`;
      cardsList?.appendChild(card);
      surnamesInput.value = '';
    }
    if (dateInput && dateInput.value.trim()) {
      const card = document.createElement('div');
      card.innerText = `Birthday: ${dateInput.value.trim()}`;
      cardsList?.appendChild(card);
      dateInput.value = '';
    }

    if (select && select.value.trim()) {
      const card = document.createElement('div');
      card.innerText = `Favorite color: ${select.value.trim()}`;
      cardsList?.appendChild(card);
      select.value = '';
    }

    if (checkbox && checkbox.checked) {
      const card = document.createElement('div');
      card.className = 'chek';
      card.innerText = 'Consent has been obtained for the use of the name';
      cardsList?.appendChild(card);
      checkbox.checked = false;
    }
    if (radioYes && radioYes.checked) {
      const card = document.createElement('div');
      card.innerText = 'Gender: Male';
      cardsList?.appendChild(card);
      radioYes.checked = false;
      if (radioNo) {
        radioNo.checked = false;
      }
    } else if (radioNo && radioNo.checked) {
      const card = document.createElement('div');
      card.innerText = 'Gender: Female';
      cardsList?.appendChild(card);
      if (radioYes) {
        radioYes.checked = false;
      }
      radioNo.checked = false;
    }

    if (fileInput && fileInput.files && fileInput.files[0]) {
      const card = document.createElement('div');
      card.innerText = `Avatar: ${fileInput.files[0].name}`;
      const image = document.createElement('img');
      image.src = URL.createObjectURL(fileInput.files[0]);
      cardsList?.appendChild(card);
      cardsList?.appendChild(image);
      fileInput.value = '';
    }
  };

  render() {
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
        <div className="cards-list" ref={this.cardsListRef}></div>
      </div>
    );
  }
}

export default Form;
