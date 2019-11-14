---


---

<h1 id="google-book-search">Google Book Search</h1>
<p>UCF Bootcamp Week 20 Homework - A Google Books Search application to showcase a full-stack app with React, Express, and Mongo DB.</p>
<h2 id="access-and-usage">Access and Usage</h2>
<p>The application has been deployed to <a href="https://desolate-lake-78427.herokuapp.com/">Heroku</a>.  The GitHub repo is at <a href="%5Bhttps://github.com/j0serobles/googlebooksearch%5D(https://github.com/j0serobles/googlebooksearch)">googlebooksearch</a> .</p>
<p>The landing page allows the user to search for books in the Google Books database, by entering a book subject, book title, author or ISBN number:</p>
<p><img src="https://github.com/j0serobles/googlebooksearch/blob/master/landing.PNG" alt="googlebooksearch landing page"></p>
<p>The user must press the <code>&lt;Enter&gt;</code> key after entering the search term(s),  and after a few seconds the page will show a list of the top 10 books from the Google Books database related to the search term(s) entered.</p>
<p>Clicking on the book’s thumbnail image (if available), the book’s title, or the “Preview” button will open a new tab in the browser showing the preview page for the book from Google Books.</p>
<p>Clicking on the “Save Book” button will save the book to the bookshelf for later review.</p>
<p>Selecting “Bookshelf” link from the main menu will show the Bookshelf page with the books that have already been saved to the database.  In this page, the “Delete” button allows the user to delete the book from the bookshelf, while the “Preview” button works the same way as in the search page, opening a new tab with the book details from the Google Books page.</p>
<h2 id="file-structure">File Structure</h2>
<pre><code>&lt;Project Top&gt;
|
|   .gitignore - Needed by Git
|   package-lock.json - Created by NPM init
|   package.json - Project Metadata
|   README.md - This file
|   server.js - The back-end Express JS server
|   
+---client -- The React Application
|   |   .env - Secret Keys (Not in GitHub)
|   |   package-lock.json - Created by NPM init
|   |   package.json - Created by NPM init
|   |   
|   +---build -- Build directory, for production deployment
|   |                   
|   +---public -- Static resources
|   |   |   favicon.ico
|   |   |   index.html
|   |   |   manifest.json
|   |   |   orig_index.html
|   |   |   
|   |   +---css
|   |   |       materialize.css
|   |   |       materialize.min.css
|   |   |       style.css
|   |   |       
|   |   +---js
|   |   |       init.js
|   |   |       materialize.js
|   |   |       materialize.min.js
|   |   |       
|   |   \---materialize_template
|   |       |   index.html
|   |       |   LICENSE
|   |       |   
|   |       +---css
|   |       |       materialize.css
|   |       |       materialize.min.css
|   |       |       style.css
|   |       |       
|   |       \---js
|   |               init.js
|   |               materialize.js
|   |               materialize.min.js
|   |               
|   \---src
|       |   App.css -- Stylings for Apps.js
|       |   App.js -- Applications "main" file.
|       |   App.test.js -- React testing
|       |   index.css -- App-wide stylings
|       |   index.js -- App entry point logic
|       |   logo.svg -- React logo file
|       |   registerServiceWorker.js -- Used by react 
|       |   
|       +---components -- React Components
|       |   +---BookList -- The list of books from search
|       |   |       index.js
|       |   |       style.css
|       |   |       
|       |   +---Button -- A button with customizable behaviour
|       |   |       index.js
|       |   |       
|       |   +---Grid - Materialize UI components
|       |   |       index.js
|       |   |       
|       |   +---Jumbotron - Materialize UI components
|       |   |       index.js
|       |   |       
|       |   +---Nav - App navigator UI
|       |   |       index.js
|       |   |       style.css
|       |   |       
|       |   \---SearchBox - Text Input for Book search
|       |           index.js
|       |           
|       +---pages
|       |   |   NoMatch.js - 404 page
|       |   |   
|       |   +---Bookshelf -- App Component page for saved books.
|       |   |       index.js
|       |   |       style.css
|       |   |       
|       |   +---CheckMark -- SVG image component.
|       |   |       index.js
|       |   |       style.css
|       |   |       
|       |   \---Search -- Component page for searching. Main app page. 
|       |           index.js
|       |           style.css
|       |           
|       \---utils - Utilities
|               API.js
|               
+---controllers -- Middleware controllers
|       booksController.js
|       
+---models -- Persistence models (database)
|       book.js
|       index.js
|       
|               
\---routes - Express JS routes
    |   index.js
    |   
    \---api
            books.js
            index.js
</code></pre>
<h2 id="technologies-used">Technologies Used</h2>
<p>Front End/User Interface:</p>
<ul>
<li>HTML/CSS/Javascript : Languages</li>
<li><a href="https://reactjs.org/">React</a> JS component library (The “R” in MERN).</li>
<li><a href="https://www.npmjs.com/package/axios">Axios</a> library (For API calls from React)</li>
<li><a href="https://reacttraining.com/react-router/">React Router</a> : Provides routing to the React app</li>
</ul>
<p>Back End:</p>
<ul>
<li><a href="https://nodejs.org/en/about/">NodeJS</a> : Asynchronous, event-driven  JavaScript runtime (The “N” in MERN).</li>
<li><a href="https://expressjs.com/">Express</a> : Node.js web application framework  (middleware) (The “E” in MERN)</li>
<li><a href="https://www.mongodb.com/">MongoDB</a> : #### MongoDB is a general purpose, document-based, distributed database (The “M” in MERN).</li>
<li><a href="https://mongoosejs.com/">Mongoose</a> : Schema modelling for MongoDB.</li>
<li><a href="https://www.npmjs.com/package/axios">Axios :</a> An HTTP based client for NodeJS.</li>
</ul>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

