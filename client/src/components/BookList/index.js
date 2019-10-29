import React, { Component } from "react";

import Button from '../Button';


function previewBook(book) { 
  console.log('Preview button clicked. Book is: ' + JSON.stringify(book, '', 2)); 
}


function saveBook(book) { 
  console.log('Save Button clicked. Book ID is :' + JSON.stringify(book, '', 2));  
}


function BookList(props) {


   
  return(
      <div>
      {props.books.length === 0 ? (<h3>No books have been saved.</h3>)  :
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
              <td>{book.volumeInfo.title}</td>
              <td>{book.volumeInfo.authors}</td>
              <td>{book.volumeInfo.description}</td>
              <td>
                <div className="row">
                  <div className="col">
              <Button
                onClick={(e) => saveBook(book.volumeInfo)}
                type="success"
                className="input-lg"
              >Save Book</Button>
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