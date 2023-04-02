import Notification from './Notification ';

import { useEffect, useState } from 'react';

interface FormData {
  name: string;
  surname: string;
  birthday: string;
  favoriteColor: string;
  allowNameUsage: boolean;
  gender: string;
  file: File | null;
}

const Form = (): JSX.Element => {
  const [isSubmitFormData, setIsSubmitFormData] = useState<boolean>(false);
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    birthday: '',
    favoriteColor: '',
    allowNameUsage: false,
    gender: '',
    file: null,
  });

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked, files } = event.target;
    const newValue = type === 'checkbox' ? checked : files ? files[0] : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>): void => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>): void => {
    event.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
    setIsSubmitFormData(true);
  };

  useEffect(() => {
    let timerId: ReturnType<typeof setTimeout> | null = null;

    if (isSubmitted) {
      timerId = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
    }

    return () => {
      if (timerId) {
        clearTimeout(timerId);
      }
    };
  }, [isSubmitted]);
  return (
    <>
      <form onSubmit={handleSubmit} className="form-container">
        <label>
          Name:
          <input type="text" name="name" value={formData.name} onChange={handleInputChange} />
        </label>
        <label>
          Surname:
          <input type="text" name="surname" value={formData.surname} onChange={handleInputChange} />
        </label>
        <label>
          Birthday:
          <input
            type="date"
            name="birthday"
            value={formData.birthday}
            onChange={handleInputChange}
          />
        </label>
        <label>
          Favorite color:
          <select name="favoriteColor" value={formData.favoriteColor} onChange={handleSelectChange}>
            <option value=""></option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
        </label>
        <label className="checkbox">
          Allow name usage:
          <input
            type="checkbox"
            name="allowNameUsage"
            checked={formData.allowNameUsage}
            onChange={handleInputChange}
          />
        </label>
        <label className="gender-label">
          Gender:
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={formData.gender === 'male'}
              onChange={handleInputChange}
            />
            Male
          </label>
          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={formData.gender === 'female'}
              onChange={handleInputChange}
            />
            Female
          </label>
        </label>
        <label>
          Upload a file:
          <input type="file" name="file" onChange={handleInputChange} />
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <Notification />}
      {isSubmitFormData && formData ? (
        <div className="cards">
          <div className="card">
            <div>Name: {formData.name}</div>
            <div>Surname: {formData.surname}</div>
            <div>Birthday: {formData.birthday}</div>
            <div>Favorite color: {formData.favoriteColor}</div>
            <div>
              Can I use your name in our application?: {formData.allowNameUsage ? 'Yes' : 'No'}
            </div>
            <div>Gender: {formData.gender}</div>
            {formData.file && (
              <div className="avatar">
                <img src={URL.createObjectURL(formData.file)} alt="Selected file" />
              </div>
            )}
          </div>
        </div>
      ) : null}
    </>
  );
};

export default Form;
