import { Component, FormEvent } from 'react';

type SearchBarProps = {
  [key: string]: never;
};
interface SearchBarState {
  searchValue: string;
}

class SearchBar extends Component<SearchBarProps, SearchBarState> {
  constructor(props: SearchBarProps) {
    super(props);
    this.state = {
      searchValue: '',
    };
  }

  componentDidMount() {
    const searchValue = localStorage.getItem('searchValue');
    if (searchValue) {
      this.setState({ searchValue });
    }
  }

  componentWillUnmount() {
    localStorage.setItem('searchValue', this.state.searchValue);
  }

  handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ searchValue: event.target.value });
  };

  handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log('searchValue:', this.state.searchValue);
  };

  render() {
    return (
      <form className="search" onSubmit={this.handleSubmit}>
        <input
          type="text"
          className="search__input"
          placeholder="Search"
          value={this.state.searchValue}
          onChange={this.handleInputChange}
        />
        <button type="submit" className="search__button">
          search
        </button>
      </form>
    );
  }
}

export default SearchBar;
