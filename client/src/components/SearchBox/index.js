import React, { Component } from "react";


class SearchBox extends Component { 

  render() { 
    return( 
      <div className="row">
      <form className="col s12">
        <div className="row">
          <div className="input-field col s12">
            <input id="input_text" type="text" data-length="10"/>
            <label for="input_text">Search:</label>
          </div>
        </div>
      </form>
    </div>
    );
  }

}

export default SearchBox;