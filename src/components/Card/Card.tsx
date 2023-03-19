import React from 'react';
import './card.scss';

interface cardProps {
  title: string;
  description: string;
  thumbnail: string;
  price: number;
  discountPercentage: number;
  category: string;
  brand: string;
  rating: number;
}

class Card extends React.Component<cardProps> {
  constructor(props: cardProps) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card" data-testid="card">
          <img className="card__image" src={this.props.thumbnail} alt={this.props.title} />
          <div className="card__info">
            <h3 className="card__title">{this.props.title}</h3>
            <p>
              <span className="card__text">Category:</span>
              <span className="card__category"> {this.props.category}</span>
            </p>
            <p>
              <span className="card__text">Brand:</span>
              <span className="card__brand"> {this.props.brand}</span>
            </p>
            <p>
              <span className="card__text">Description:</span>
              <span className="card__description"> {this.props.description}</span>
            </p>
            <p>
              <span className="card__text">Raiting:</span>
              <span className="card__rating"> {this.props.rating}</span>
            </p>
            <p>
              <span className="card__text">price:</span>
              <span className="card__price"> {this.props.price} $</span>
            </p>
            <p>
              <span className="card__text">discount:</span>
              <span className="card__discount"> {this.props.discountPercentage} %</span>
            </p>
          </div>
        </div>
      </>
    );
  }
}

export default Card;
