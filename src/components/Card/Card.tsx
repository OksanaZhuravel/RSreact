import { DataApi } from '../../types/types';
import './card.scss';

interface CardProps {
  item: DataApi;
}

const Card: React.FC<CardProps> = ({ item }) => {
  const { name, status, species, gender, origin, location, image } = item;

  return (
    <div className="card">
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
    </div>
  );
};

export default Card;
