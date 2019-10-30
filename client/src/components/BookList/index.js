import React, { Component } from "react";
import Button from '../Button';
import API from '../../utils/API';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


function previewBook(book) { 
  console.log('Preview button clicked. Book is: ' + JSON.stringify(book, '', 2)); 
}


function saveBook(book) { 
  console.log('Save Button clicked. Book is :' + JSON.stringify(book, '', 2));  

  if ( book ) { 
    const newBook = {
      volumeInfo : { 
        title       : book.title,
        authors     : book.authors,
        description : book.description,
        image       : book.image,
        infoLink    : book.infoLink
      }
    }

    console.log ("Book to save: " + JSON.stringify(newBook, '', 2)); 

    API.saveBook(newBook)
    .then(res => {
    console.log("Book saved: " + res.data);
    })
    .catch(err => {
      console.log(err);
    });
  }
}



function BookList(props) {

  return(
      <div>
      {props.books.length === 0 ? (<h3>Book list is empty.</h3>)  :
        (<table>
        <thead>
        <tr>
            <th>Title</th>
            <th>Author(s)</th>
            <th>Description</th>
        </tr>
        </thead>
        <tbody>
        { props.books.map( (book, index) => (
            <tr key={index} >
              <td>
                <a href={book.volumeInfo.infoLink} target="_blank">{book.volumeInfo.title}</a>
              </td>
              <td>{book.volumeInfo.authors}</td>
              <td>{book.volumeInfo.description}</td>
              <td>
                <div className="row">
                  <div className="col">
                    { props.caller === "search" ? 
                      (<Button
                          onClick={(e) => saveBook(book.volumeInfo)}
                          type="success"
                          className="input-lg"
                      >Save Book</Button>)
                    :
                      (<Button
                          onClick={(e) => props.onDelete(book._id)}
                          type="danger"
                          className="input-lg red lighten-2"
                        >Delete</Button>
                      )
                    }
                  </div>
                </div>
                <div className="row">
                  <div className="col">
                    <Button
                      onClick={(e) => previewBook(book.volumeInfo)}
                      type="success"
                      className="input-lg"
                    >Preview</Button>
                  </div>
                </div>
              </td>
            </tr>
            )
          )
        }
        </tbody>
        </table>
        )
      }
      </div>
    );
  }

export default BookList;