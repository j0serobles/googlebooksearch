import React, { Component } from "react";
import SearchBox from '../SearchBox';
import BookList from '../BookList'; 

class Search extends Component { 
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
                  <SearchBox/>
                  <BookList/>
                </div>
              </div>
            </div>
        );
    }
}

export default Search;