import React from 'react';
import './card.scss';

interface CardProps {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  rating: number;
}

const Card: React.FC<CardProps> = ({
  title,
  description,
  thumbnail,
  price,
  discountPercentage,
  category,
  brand,
  rating,
}) => {
  return (
    <>
      <div className="card" data-testid="card">
        <img className="card__image" src={thumbnail} alt={title} />
        <div className="card__info">
          <h3 className="card__title">{title}</h3>
          <p>
            <span className="card__text">Category:</span>
            <span className="card__category"> {category}</span>
          </p>
          <p>
            <span className="card__text">Brand:</span>
            <span className="card__brand"> {brand}</span>
          </p>
          <p>
            <span className="card__text">Description:</span>
            <span className="card__description"> {description}</span>
          </p>
          <p>
            <span className="card__text">Raiting:</span>
            <span className="card__rating"> {rating}</span>
          </p>
          <p>
            <span className="card__text">price:</span>
            <span className="card__price"> {price} $</span>
          </p>
          <p>
            <span className="card__text">discount:</span>
            <span className="card__discount"> {discountPercentage} %</span>
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
