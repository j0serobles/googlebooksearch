import React, { Component } from "react";
import SearchBox from '../../components/SearchBox';
import BookList from '../../components/BookList'; 
import API from '../../utils/API.js';

class Search extends Component { 
  state = {
    searchResults : [],
    message       : ""
  }

  // When the form is submitted, prevent its default behavior, and search the books API
  searchBooks = query => {
  
    if ( query ) { 
      API.search(query)
      .then(res => {
      console.log(res.data);
      this.setState({ searchResults: res.data.items });
      })
      .catch(err => {
        console.log(err);
        this.setState( {message : err} );
      });
    }
  };

    render() { 
        return (

            <div className="section no-pad-bot" id="index-banner">
              <div className="container">
                <h1 className="header center orange-text">Google Books</h1>
                <div className="row center">
                  <h5 className="header col s12 light">
                    Search the world's most comprehensive index of full-text books.
                  </h5>
                </div>
                <div className="row center">
                  <SearchBox onSubmit={this.searchBooks} />
                  <BookList  books={this.state.searchResults} />
                </div>
              </div>
            </div>
        );
    }
}

export default Search;