import { DataApi } from '../../types/types';
import './card.scss';
import Modal from '../../components/Modal/Modal';
import { useState } from 'react';
interface CardProps {
  item: DataApi;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { name, status, species, gender, origin, location, image } = item;
  const [modal, setModal] = useState(false);
  return (
    <div className="card">
      <img src={image} alt={name} />
      <h3>{name}</h3>
      <button onClick={() => setModal(true)}>Information</button>
      <Modal visible={modal} setVisible={setModal}>
        <img src={image} alt={name} />
        <h3>{name}</h3>
        <div className="card__inner">
          <p>
            Status: <span className="card__color">{status}</span>
          </p>
          <p>
            Species: <span className="card__color">{species}</span>
          </p>
          <p>
            Gender: <span className="card__color">{gender}</span>
          </p>
          <p>
            Origin: <span className="card__color">{origin.name}</span>
          </p>
          <p>
            Location: <span className="card__color">{location.name}</span>
          </p>
        </div>
      </Modal>
    </div>
  );
};

export default Card;
