---


---

<h1 id="newsscraper">newsScraper</h1>
<p>UCF Bootcamp Week 18 Homework - an online news scraper app using Mongo and Mongoose.</p>
<h2 id="access-and-usage">Access and Usage</h2>
<p>The application has been deployed to <a href="https://damp-tor-55631.herokuapp.com/articles">Heroku</a>.  The landing page shows article headings and bylines extracted recently from the New York Times’ home page:</p>
<p><img src="https://github.com/j0serobles/newsScraper/blob/master/images/homepage.jpg" alt="newsScraper landing page"></p>
<p>Cliking on an article’s image or the “Read More” button below it opens the article in a new web browser tab.<br>
Following the “Be First to comment on this article” or “View Comments” link opens the “Comments” modal dialog for this article.  Here, the user can review existing comments other users have left for this article, and create a new one.<br>
The user can also remove comments from the list of comments by clicking the trashcan icon.</p>
<p><img src="https://github.com/j0serobles/newsScraper/blob/master/images/commentmodal.jpg" alt="Article Comments modal Dialog"></p>
<p>To retrieve the articles from the current home page for the New York Times, the user should click on</p>
<p><img src="https://github.com/j0serobles/newsScraper/blob/master/images/nytimesbutton.jpg" alt="NY Times button"></p>
<p>The number of articles retrieved will be shown in the status mesage below the button.</p>
<p>Other functionality available:</p>
<ul>
<li><strong>List all scraped articles in JSON format</strong>: This can be done by cliking the “Articles JSON” link in the home page.</li>
<li><strong>Remove all articles</strong> : This link will remove all articles downloaded to the local database (This is always done as the first step when new articles are retrieved).</li>
</ul>
<h2 id="file-structure">File Structure</h2>
<pre><code>+--- newsScraper
    |   .eslintignore - Files ignored by eslint
    |   .eslintrc.json - eslink rules
    |   .gitignore - Files ignored by Git
    |   package-lock.json - Created by npm init
    |   package.json - Created by npm init
    |   README.md - This file
    |   server.js - The main server file
    |   
    +---images - Documentation images
    |       commentmodal.jpg
    |       homepage.jpg
    |       nytimesbutton.jpg
    |       
    +---models -- Mongoose/MongoDB entities.
    |       Article.js
    |       index.js
    |       Note.js
    |       
    +---public - Static/Public content
    |   |   app.js
    |   |   left-sidebar.html
    |   |   LICENSE.txt
    |   |   no-sidebar.html
    |   |   right-sidebar.html
    |   |   
    |   +---css - Stylings
    |   |   |   font-awesome.min.css
    |   |   |   modal.css
    |   |   |   skel.css
    |   |   |   style-mobile.css
    |   |   |   style-narrow.css
    |   |   |   style-narrower.css
    |   |   |   style-normal.css
    |   |   |   style-wide.css
    |   |   |   style.css
    +---routes
    |       apiRoutes.js - API routes for Express
    |       htmlRoutes.js - HTML routes for Express
    |       
    \---views - Handlebars Front End
        |   home.handlebars - Home Page
        |   
        +---layouts
        |       main.handlebars - Main HBS Layout
        |       
        \---partials
                notes_table.handlebars - Used in Modal dialog to render comments.
</code></pre>
<h2 id="technologies-used">Technologies Used</h2>
<p>Front End:</p>
<ul>
<li>HTML/CSS/Javascript</li>
<li><a href="https://jquery.com/">jQuery</a> - DOM Manipulation, event handling,<br>
Ajax library</li>
<li><a href="https://handlebarsjs.com/">HandlebarsJS</a> - View rendering engine</li>
</ul>
<p>Back End:</p>
<ul>
<li><a href="https://nodejs.org/en/about/">NodeJS</a> : Asynchronous, event-driven<br>
JavaScript runtime.</li>
<li><a href="https://expressjs.com/">Express</a> : Node.js web application framework<br>
(middleware).</li>
<li><a href="https://www.mongodb.com/">MongoDB</a> : #### MongoDB is a general<br>
purpose, document-based, distributed database.</li>
<li><a href="https://mongoosejs.com/">Mongoose</a> : Schema modelling for MongoDB.</li>
<li><a href="https://www.npmjs.com/package/axios">Axios :</a> An HTTP based client<br>
for NodeJS.</li>
</ul>
<blockquote>
<p>Written with <a href="https://stackedit.io/">StackEdit</a>.</p>
</blockquote>

