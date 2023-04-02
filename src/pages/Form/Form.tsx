import { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import Notification from './Notification ';

interface FormData {
  name: string;
  surname: string;
  birthday: string;
  favoriteColor: string;
  allowNameUsage: boolean;
  gender: string;
  file: FileList | null;
}

const Form = (): JSX.Element => {
  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm<FormData>();
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);
  const [cards, setCards] = useState<FormData[]>([]);

  const onSubmit = (data: FormData) => {
    console.log(data);
    setCards((cards) => [...cards, data]);
    setIsSubmitted(true);
  };
  const validateNotEmpty = (value: string) => {
    if (!value) {
      return 'This field is required';
    }
    return true;
  };
  const validateFile = (value: FileList | null) => {
    if (!value || value.length === 0) {
      return 'File is required';
    }
    return true;
  };
  useEffect(() => {
    if (isSubmitted) {
      const timeoutId = setTimeout(() => {
        setIsSubmitted(false);
      }, 3000);
      return () => clearTimeout(timeoutId);
    }
  }, [isSubmitted]);

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)} className="form-container">
        <label>
          Name:
          <input type="text" {...register('name', { validate: validateNotEmpty })} />
          {errors.name && <p className="errors">{errors.name.message}</p>}
        </label>
        <label>
          Surname:
          <input type="text" {...register('surname', { validate: validateNotEmpty })} />
          {errors.surname && <p className="errors">{errors.surname.message}</p>}
        </label>
        <label>
          Birthday:
          <input type="date" {...register('birthday', { validate: validateNotEmpty })} />
          {errors.birthday && <p className="errors">{errors.birthday.message}</p>}
        </label>
        <label>
          Favorite color:
          <select {...register('favoriteColor', { validate: validateNotEmpty })}>
            <option value=""></option>
            <option value="red">Red</option>
            <option value="blue">Blue</option>
            <option value="green">Green</option>
            <option value="yellow">Yellow</option>
          </select>
          {errors.favoriteColor && <p className="errors">{errors.favoriteColor.message}</p>}
        </label>
        <label className="checkbox">
          Allow name usage:
          <input type="checkbox" {...register('allowNameUsage')} />
        </label>
        <label className="gender-label">
          Gender:
          <label>
            <input type="radio" value="male" {...register('gender')} />
            Male
          </label>
          <label>
            <input type="radio" value="female" {...register('gender')} />
            Female
          </label>
        </label>
        <label>
          Upload a file:
          <input type="file" {...register('file', { validate: validateFile })} />
          {errors.file && <p className="errors">{errors.file.message}</p>}
        </label>
        <button type="submit">Submit</button>
      </form>
      {isSubmitted && <Notification />}
      {cards.length > 0 ? (
        <div className="cards">
          {cards.map((card, index) => (
            <div className="card" key={index}>
              <div>Name: {card.name}</div>
              <div>Surname: {card.surname}</div>
              <div>Birthday: {card.birthday}</div>
              <div>Favorite color: {card.favoriteColor}</div>
              <div>
                Can I use your name in our application?: {card.allowNameUsage ? 'Yes' : 'No'}
              </div>
              <div>Gender: {card.gender}</div>
              {card.file && (
                <div className="avatar">
                  <img src={URL.createObjectURL(card.file[0])} alt="Selected file" />
                </div>
              )}
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

export default Form;
