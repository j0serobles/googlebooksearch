import React, { Component } from "react";
import { Link } from "react-router-dom";
import BookList from '../../components/BookList'; 
import API from '../../utils/API';

class Bookshelf extends Component { 

    state = {
        books : []
          // {
          //   authors     : [],
          //   _id         : "",
          //   title       : '',
          //   description : "",
          //   image       : "",
          //   link        : "" 
          // }
      };

    
    
      //After component is mounted in React's DOM, populate the book list
    componentDidMount() {
      this.getSavedBooks();
    }

    
    
    //Custom method to retrieve all saved books in the db.
    getSavedBooks = () => {
      API.getBooks().then(res => { 
        console.log("Bookshelf[33]" + res.data);
        //this.setState( { books: res.data } )
      })
      .catch(err => console.log(err));
    }



    render() { 

        return(  
            <BookList books={this.state.books }/>
        );
    }
}

export default Bookshelf;