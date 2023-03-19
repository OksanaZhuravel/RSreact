import { Component } from 'react';
import SearchBar from '../../components/SearchBar/SearchBar';
import Card from '../../components/Card/Card';
import data from '../../assets/data.json';

class Layout extends Component {
  render() {
    return (
      <div className="main">
        <SearchBar />
        <div className="main__cards" data-testid="cards-list">
          {data.map((item) => {
            return (
              <Card
                title={item.title}
                key={item.id}
                thumbnail={item.thumbnail}
                rating={item.rating}
                price={item.price}
                description={item.description}
                discountPercentage={item.discountPercentage}
                category={item.category}
                brand={item.brand}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Layout;
