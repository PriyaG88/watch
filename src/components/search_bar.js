import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      term: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({term: e.target.value});
  }
  render() {
    return (
      <div className='search-bar'>
        <input
        value={this.state.term}
        onChange={this.handleChange} />
    </div>
    );
  }
}

export default SearchBar;
