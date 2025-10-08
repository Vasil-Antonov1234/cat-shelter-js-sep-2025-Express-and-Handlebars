# cat-shelter-js-sep-2025-Express-and-Handlebars
Recreate SoftUni JS Back End Course "Cat Shelter" using Express and Handlebars

## Steps - 1

### Setup
 - [x] Initialize project
 - [x] Add dev script
 - [x] Setup debugging mode
 - [x] Add Express server
 - [x] Install and Config Handlebars
 - [x] Add resources
 - [x] Setup static middleware
 - [x] Render home page
 - [x] Render create cat page
 - [x] Render add breed page
 - [x] Create main layout
 ---
 ### Architecture and dynamic rendering
 - [x] Add home controller
 - [x] Add cat data layer
 - [x] Add cat service
 - [x] Render cats on home page dynamically
 - [x] Show screen if there are no cats on home page
 - [x] Create and render about page
 - [x] Create and render 404 page not found
 ---
 ### Create cat
 - [x] Add Cat Controller
 - [x] Show create cat page
 - [x] Add routes
 - [x] Add Body Parser
 - [x] Create movie
  - [x] Add action
  - [x] Add service
  - [x] Add model method for creating movie
 - [x] Redirect after creation
 - [x] Add unique id for each cat
 ---
 ### Edit page
 - [x] Add navigation button for details page
 - [x] Add route with param for details page
 - [x] GetOne cat from service
 - [x] Find cat by id from model
 - [x] Render edit page with dynamic data
 - [x] Edit cat
 ---
 ### Search
 - [x] Modify search form
 - [x] Filter cats
 - [x] Remember search words
 ---
 ### Bonus
 - [x] Add dynamic breeds
 - [x] Show breed on cat create
 - [x] Add breed to db
 - [ ] Delete cat (shlter cat button)
  - [x] Render catShelter page
  - [ ] Delete cat from data.json
 - [ ] Show breed on cat edit (selected current breed) (not EASY)

 ## Step 2 - MongoDB Database

 ### Setup Database
 - [x] Install MongoDB
 - [x] Install Mongoose
 - [x] Connect to DB

 ### Refactor cats to use Mongoose
 - [x] Add cat model
 - [x] Create cat schema
 - [x] Create cat model
 - [x] Import file cats to DB
 - [x] Fix own propperty handlebars problem
 - [x] Refactor details
 - [x] Refactor create
 - [x] Refactor search

 ### Add breed
 - [x] Add breed model
 - [x] Add breed service
 - [x] Add breed controller
 - [x] Create add breed functionality
 
 ### Add detail cat page
 - [x] Change home page
 - [x] Add detail cat page
 - [x] Show dateils dynamically on detail page
 - [x] Redirect to details page after editing a cat

### Refactor edit cat page
 - [x] Show breed dynamically
 - [x] Handle edit cat

### Handle delete (shelter) cat
 - [x] Handle delete form on detail page
 - [x] Handle delete functionality

 ### Bonus
 - [ ] Add relation from Cat to Breed

 ## Step 3 - Session and Authentication

 ### Register
 - [x] Add register button
 - [x] Add new controller "authController"
 - [x] Add regster page
 - [x] Add User model
 - [x] Add User service
 - [x] Create User in DB
 - [x] Add password hashing

 ### Login
 - [x] Add login button
 - [x] Add login page
 - [x] Handle login page
 - [ ] Validate User
 - [ ] Validate password
 - [ ] Create token
 - [ ] Return token to client

 ### Logout
 - [x] Add logout button
 - [x] Add logout action
 - [x] Clear cookie

 ### Authorization
 - [x] Install cookie-parser
 - [x] Add authMiddleware
 - [x] Add isAuth route guard
 - [x] Add isGuest route guard