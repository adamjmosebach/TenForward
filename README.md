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

# Client (Front End)

## Wireframes

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



#### Component Tree

##### - Whimsical Diagram can be found [here](https://whimsical.com/N9mLQiu1e5EMegzFjmUG6Q)

![Whimsical Diagram](https://i.imgur.com/RPaaFCh.png)

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ images
|__ components/
      |__ NavBar.jsx
      |__ SideBar.jsx
      |__ ProfileCard.jsx
      |__ PostCard.jsx
|__ services/
      |__ api-config.js
      |__ auth.js
      |__ users.js
      |__ posts.js
      |__ comments.js
|__ screens/
      |__ Landing.jsx
      |__ CreatePost.jsx
      |__ PostDetail.jsx
      |__ EditDeletePost.jsx
      |__ Login.jsx
      |__ Register.jsx
      |__ Profile.jsx
|__ layouts/
      |__ Layout.jsx
|__ containers/
      |__ MainContainer.jsx
|__ App.js
|__ index.js
      
```

#### Component Breakdown

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    NavBar   | functional |   n   |   n   | Name of site, logo, 'create post' button               |
|  SideBar  | functional |   y   |   n   | Either Guinan or your profile       |
|   MainContainer    |   functional    |   y   |   n   | Axios call, passing down props     |
|   ProfileCard    |   functional    |   n   |   y   | Displays your profile information     |
| PostCard | functional |   n   |   y   | Post information and comments                |
|    Landing    | functional |   n   |   y   | Displays all posts and comments |
|    CreatePost    | functional |   y   |   n   | Create a post |
|    PostDetail    | functional |   y   |   n   | Details on a specific post |
|    EditDeletePost    | functional |   y   |   y   | Edit or delete a post |
|    Login    | functional |   y   |   n   | Log into your profile |
|    Register    | functional |   y   |   n   | Register for the site |

#### Time Estimates

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
|  Setup back end file structure   |     L   |     2 hrs      |     -     |    -    |
| Nav    |    M     |     3 hrs      |    -     |    -   |
| Screens    |    M     |     4 hrs      |     -    |    -    |
| Back end CRUD    |    H     |     7 hrs      |    -    |    -    |
|  Setup front end file structure   |    L     |     2 hrs      |    -     | -    |
| Front end CRUD    |    H     |     6 hrs      |    -    |    -   |
| Comments working    |    H     |     3.5 hrs      |     -    |   -   |
| Auth   |    H     |     3 hrs      |     3 hrs     |    -   |
| CSS    |    M     |     3 hrs      |     10 hrs     |   -   |
| Responsive Design    |    M     |     4 hrs      |     -   |   -   |
| *Implementing Categories    |    L     |     2 hrs      |     -     |   -   |
| *Category View    |    L     |     2 hrs      |    -   |   -   |
| *Increase Rank    |    L     |     1 hrs      |     -     |    -    |
| *Views by User    |    L     |     2 hrs      |     -   |    -    |
| TOTAL               |          |     51.5 hrs      |     -     |    -    |
*Denotes Post-MVP

<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/7R3ojgX.png)

<br>

***

## Post-MVP

- Every few posts, the user increases in Starfleet rank
- Each post could be associated with a specific category/hashtag
- View posts by category/hashtag
- View all posts by a specific user
- Ability to 'like' posts


***

## Code Showcase

> I will use this section to include a brief code snippet of functionality that I am proud of and a brief description.

## Code Issues & Resolutions

> I will use this section to list of all major issues/changes encountered and their resolution.
