# TenForward

<br>

- [Overview](#overview)
- [MVP](#mvp)
  - [Goals](#goals)
  - [Libraries and Dependencies](#libraries-and-dependencies)
  - [Client (Front End)](#client-front-end)
    - [Wireframes](#wireframes)
    - [Component Tree](#component-tree)
    - [Component Hierarchy](#component-hierarchy)
    - [Component Breakdown](#component-breakdown)
    - [Time Estimates](#time-estimates)
  - [Server (Back End)](#server-back-end)
    - [ERD Model](#erd-model)
- [Post-MVP](#post-mvp)
- [Code Showcase](#code-showcase)
- [Code Issues & Resolutions](#code-issues--resolutions)

<br>

## Overview

**TenForward** is a virtual lounge where Star Trek fans can go and exchange memes, pose questions, start discussions, and generally hang out in a place surrounded by like-minded people.  Or aliens.  Either way.  

<br>

## MVP
<br>

### Goals

- User should be able to log in to their own account
- User should be able to create, read, update, and delete posts relating to Star Trek
- User should have the ability to comment on posts
- Utilize at least three tables in a Rails database, with a React front-end
- Polished design
- Responsive Design for at least three sizes of screen

<br>

### Libraries and Dependencies

|Library/Dependency| Description                                |
| :--------------: | :----------------------------------------- |
|      react       | The umbrella library for the entire front-end |
|   react router   | Specifies which routes call which components |
| react-router-dom | Allows Links within the components |
|      axios       | Makes calls to the database |

<br>

## Client (Front End)

### Wireframes

### Desktop


Landing Page

![Landing Page](https://i.imgur.com/GoVXK4r.png)

Register

![Register](https://i.imgur.com/wIGHNnd.png)

Create Post

![Create Post](https://i.imgur.com/gESF7LE.png)

Post Detail

![Post Detail](https://i.imgur.com/j92eEQ2.png)

Update/Delete

![Update/Delete](https://i.imgur.com/KvowWex.png)

Profile

![Profile](https://i.imgur.com/axhXIi2.png)


### Mobile

Landing Page

![Landing Page](https://i.imgur.com/h3oqD87.png)

Register

![Register](https://i.imgur.com/fm9uRXC.png)

Create Post

![Create Post](https://i.imgur.com/SmvhsPF.png)

Post Detail

![Post Detail](https://i.imgur.com/bM4HnAu.png)

Update/Delete

![Update/Delete](https://i.imgur.com/wAdBwe8.png)

Profile

![Profile](https://i.imgur.com/A66ngvG.png)



### Component Tree

##### - Original Whimsical Diagram can be found [here](https://whimsical.com/N9mLQiu1e5EMegzFjmUG6Q) -

<!-- ![Whimsical Diagram](https://i.imgur.com/RPaaFCh.png) -->

### Component Hierarchy

``` structure

src
|__ assets/
      |__ images
|__ components/
      |__ CommentCard.jsx
      |__ PostCard.jsx
|__ containers/
      |__ MainContainer.jsx
|__ layouts/
      |__ Layout.jsx
      |__ SideBar.jsx
|__ screens/
      |__ CreatePost.jsx
      |__ DetailPost.jsx
      |__ EditPost.jsx
      |__ EditProfile
      |__ Login.jsx
      |__ Posts.jsx
      |__ Register.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ comments.js
      |__ posts.js
      |__ users.js
|__ App.js
|__ index.js
      
```

### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|  CommentCard   | functional |   y   |   y   | Basic layout for a comment            |
|  PostCard   | functional |   n   |   y   | Basic layout of a post              |
| MainContainer    |   functional    |   y   |   y   | Axios call for all posts, functions for manipulating posts, passing down props     |
|    Layout  | functional |   n   |   y   | Will conitionally display Guinan/Login/Register or your profile info/edit profile/logout       |
|    SideBar  | functional |   y   |   y   | Either Guinan or your profile       |
|    CreatePost    | functional |   y   |   y   | Create a post |
|    DetailPost    | functional |   y   |   y   | Details on a specific post |
|    EditPost    | functional |   y   |   y   | Edit or delete a post |
|    EditProfile | functional |   y   |   y   | Post information and comments                |
|    Login    | functional |   y   |   y   | Log into your profile |
|    Posts    | functional |   n   |   y   | Displays all posts and comments |
|    Register    | functional |   y   |   y   | Register for the site |
|    App    | functional |   y   |   n   | Register for the site |

### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|  Setup back end file structure   |     L   |     2 hrs      |     1.5 hrs     |    1.5 hrs    |
| Layout    |    M     |     3 hrs      |    2 hrs     |    2 hrs   |
| Basic screen interaction     |    M     |     4 hrs      |     3.5 hrs    |    3.5 hrs   |
| Back end CRUD    |    H     |     7 hrs      |   6 hrs    |    6 hrs    |
|  Setup front end file structure   |    L     |     2 hrs      |    2 hrs     |  2 hrs    |
| Front end CRUD    |    H     |     6 hrs      |    11 hrs    |    11 hrs   |
| Comments working    |    H     |     3.5 hrs      |     4 hrs    |   4 hrs   |
| Auth   |    H     |     3 hrs      |     2 hrs     |    2 hrs   |
| CSS    |    M     |     10 hrs      |    16 hrs     |   16 hrs   |
| Responsive Design    |    M     |     4 hrs      |     5.5 hrs   |   5.5 hrs   |
| *Increase Rank    |    L     |     1 hrs      |     4.5 hrs     |    4.5 hrs    |
| *Implementing Categories    |    L     |     2 hrs      |     -     |   -   |
| *Category View    |    L     |     2 hrs      |    -   |   -   |
| *Views by User    |    L     |     2 hrs      |     -   |    -    |
| Troubleshooting    |    M     |     -      |     12 hrs   |    12 hrs    |
| TOTAL               |   *P-MVP: 7 hrs       |     MVP: 44.5 hrs      |     70 hrs    |    70 hrs    |

<br>

## Server (Back End)

### ERD Model

![ERD](https://i.imgur.com/CCkSVm3.png)

<br>

***

## Post-MVP

#### - Every few posts, the user increases in Starfleet rank
- Each post could be associated with a specific category/hashtag
- View posts by category/hashtag
- View all posts by a specific user
- Ability to 'like' posts
- The Enterprise warping across screen on load
- Image uploading (as opposed to image_url)


***

## Code Showcase

```
fromCreate ? history.push('/posts/create') : history.push('/');
```
It's so simple, but I'm really proud of it.  When a user who is not logged in clicks 'Create Post', they are taken to the login page _and_ a state variable is set, indicating that the user got to the login page via the 'Create Post' button. Once the user logs in, instead of being redirected to the main page as normal they are taken through to the create page like they originally wanted, where the state variable is reset.

## Code Issues & Resolutions

- Upon adding a column to the db late in the project, the app worked on localhost but not on heroku. After hours of troubleshooting, the answer was that the new column was type 'text'. The solution was changing it to type 'string'
- Mobile development & form styling presented challenges to be overcome with time and patience