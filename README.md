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
- Every few posts, the user increases in Starfleet rank
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

### Client (Front End)

#### Wireframes

> Use the Wireframes section to display desktop, tablet and mobile views. No hand-drawn wireframes. Use a tool like wireframe.cc, Whimsical or AdobeXD



[Whimsical Diagram](https://whimsical.com/N9mLQiu1e5EMegzFjmUG6Q)



![Dummy Link](url)

- Desktop Landing

![Dummy Link](url)

- Desktop Hero

![Dummy Link](url)

- Resource Index

![Dummy Link](url)

- Resource Show

![Dummy Link](url)

- Tablet Resource Index

![Dummy Link](url)

- Mobile Resource Index

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

> Use this section to go into further depth regarding your components, including breaking down the components as stateless or stateful, and considering the passing of data between those components.

|  Component   |    Type    | state | props | Description                                                      |
| :----------: | :--------: | :---: | :---: | :--------------------------------------------------------------- |
|    Header    | functional |   n   |   n   | _The header will contain the navigation and logo._               |
|  Navigation  | functional |   n   |   n   | _The navigation will provide a link to each of the pages._       |
|   Gallery    |   class    |   y   |   n   | _The gallery will render the posts using cards in flexbox._      |
| Gallery Card | functional |   n   |   y   | _The cards will render the post info via props._                 |
|    Footer    | functional |   n   |   n   | _The footer will show info about me and a link to my portfolio._ |

#### Time Estimates

> Use this section to estimate the time necessary to build out each of the components you've described above.

| Task                | Priority | Estimated Time | Time Invested | Actual Time |
| ------------------- | :------: | :------------: | :-----------: | :---------: |
| Add Contact Form    |    L     |     3 hrs      |     2 hrs     |    3 hrs    |
| Create CRUD Actions |    H     |     3 hrs      |     1 hrs     |     TBD     |
| TOTAL               |          |     6 hrs      |     3 hrs     |     TBD     |

> _Why is this necessary? Time frames are key to the development cycle. You have limited time to code your app, and your estimates can then be used to evaluate possibilities of your MVP and post-MVP based on time needed. It's best you assume an additional hour for each component, as well as a few hours added to the total time, to play it safe._

<br>

### Server (Back End)

#### ERD Model

![ERD](https://i.imgur.com/G1Jh0HE.png)

<br>

***

## Post-MVP

- Each post could be associated with a specific category/hashtag
- View posts by category/hashtag
- View all posts by a specific user
- Ability to 'like' posts


***

## Code Showcase

> I will use this section to include a brief code snippet of functionality that I am proud of and a brief description.

## Code Issues & Resolutions

> I will use this section to list of all major issues/changes encountered and their resolution.
