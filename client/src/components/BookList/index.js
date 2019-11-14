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
      { props.books.length === 0 ? (<h3>Book list is empty.</h3>)  :
        <div>
        {props.books.map( (book, index) => (
          <div className="row" key={index}>
              <div className="col">
                { book.volumeInfo.imageLinks ? 
                     <a className="left" href={book.volumeInfo.infoLink} target="_blank">
                       <img src={book.volumeInfo.imageLinks.thumbnail}/>
                     </a> 
                     : 
                     <p>Image Not Available</p>
                }
              </div>


                
                     <a className="left" href={book.volumeInfo.infoLink} target="_blank">{book.volumeInfo.title}</a>
  
 
                   <br></br>
              
                   <div className="col">
                     <span className="left">By: { book.volumeInfo.authors }</span>
                   </div>
              
                  <br></br>
                    <div className="left-align">
                       <span> {book.volumeInfo.description} </span>
                    </div>

                    <br></br>
                    

                    <div className="row">
                      <div className="col s1 offset-s3">
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
                    <div className="col s1 offset-s4">
                    <Button
                      onClick={(e) => previewBook(book.volumeInfo)}
                      type="success"
                      className="input-lg"
                    >Preview</Button>
                    </div>
                    </div>
                     <hr></hr>
          
        </div>
 
            )
          )
        
        }
 
       )

       </div>
      }
    </div>
  );
}

export default BookList;