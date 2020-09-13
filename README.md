# PROJECT 4 

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

_**Project Title** is lorem ipsum dolor sit amet. Phasellus dapibus fermentum risus vitae bibendum. Integer vel ipsum mollis odio sollicitudin ornare eu vel ex. In quis fringilla velit, ac maximus quam. Etiam eget placerat neque. Aenean faucibus sem non nisi lobortis ullamcorper._


<br>

## MVP

<br>

### Goals

- User should be able to create, read, update, and delete posts relating to Star Trek
- Each post should also be associated with a specific category that their post falls into (to be designated by the user)
- User should have the ability to comment on posts
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

> Use this section to display the structure of how your React components are being rendered. This should show the parent to child relation between you components. In other words, show which components are rendering the other components. 

#### Component Hierarchy

> Use this section to define your React components and the data architecture of your app. This should be a reflection of how you expect your directory/file tree to look like. 

``` structure

src
|__ assets/
      |__ fonts
      |__ graphics
      |__ images
      |__ mockups
|__ components/
      |__ Header.jsx
|__ services/

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

[ERD can be found here](https://viewer.diagrams.net/?highlight=0000ff&edit=_blank&layers=1&nav=1&title=ERD.drawio#R7Vptc5s4EP41%2FtgMAuOXjzWx25k6PU%2Fa6%2FU%2BdRQjY00BeYT8dr%2F%2BVkgyYOwYEuM4TWY8ibQsC9rn2dUu0HK8aPOJ48X8jvkkbNmWv2k5ty3bRla%2FD%2F%2BkZKsknT5SgoBTXytlgm%2F0P2LO1NIl9UlSUBSMhYIuisIpi2MyFQUZ5pyti2ozFhavusABKQm%2BTXFYlv5DfTFX0p5rZfLPhAZzc2Vk6SMRNspakMyxz9YFEdmIEYuFvsUJ4RGOSSzgyB3mvwlvucO5EHKlH1v2CH4zqX0TMBaEBC9ocjNlEYinCaiMZjiioXRzztBAG4LLOcOW43HGhBpFG4%2BEEisDg7qn0ZGjOz9wabfCCd6H1Xb82xLx57XzQ9zdBZPuwwdtZYXDpfav9o3YGocTH%2Fyvp3ApKrb3JMSCsniYHRmQ2P8o0QWl4T0sFpY9SATmIpOyWCuOKNyYc2sZldycbKj4CWOkx%2F9K%2BU237%2Bj57SaneLvNTcDHNCICXKtlseDbn%2FmJsuWaaWYqne1sxYb0yDU3mBeU3a59mLAln5JHfG13dbhgHhDxiKKjyegXIkGj%2BokwWCbfgsI64%2F%2BO5fM8942Qp4CtihGENcuDncHdNSaMpqTXScNpazs6ZXRNuBgTaun6rDwF9wy19wx19g0p15QMwSC38EyUMrwO2%2B16dGdczFnAYhw2QfWnElSHiHXT7vVzYYKeECIvTnXUvjKuo26Rojvu1%2BZ6p2jIttyLcr1MdQ8LEjBOYffeJz1shQs5FPghpXieCo6kCuzmAtM4pQ5K52GIFwlN1ZVkTkN%2FjLdsKYwhMxvM6Ib492rrl7oQJmMwlmgeyk3UhJw8jEMaxDCeAu%2FkFQecJHAvY5wIrXGUmSvCBdk8yiSDj1vEB5lclGOa7R5gWt86zqkCiHURc04nJ4MTrFxQHN5DgYXjIIWsiIh0q8%2FZ4rsJQClYSK4RPlwRVeKkvoeE5LGQSWBjlbZStXRx7gB%2BsFxPZiUXbsCDOcrm8JPqXHgsTgTHNEWDAE5rIrEaCLbQ1wnJzNwG176U4wcmBFRMx1B9lNmnoTYxXBFZpylk2yVkJ1%2FqYMtgrbMw3Vvm1PdJrCJS1tc4w%2FsAlAf9v%2FP5Phj7cVgRD6cyHjkAnEv63y35H9Svz%2F8m7yndQbLAUxoHY3VmZw%2Bgwxv0MwHatI4GjH1JwDpvORVaDabCzkunwu6zkL1QIFb0fqey918q8fVK3o5xRFJ3c0gtMPj613f59%2B%2Fx%2BApxOJkQzw7UtSRAu1wMTlgi3it3ONI7Xbij%2FqEWsdcYWuUC7w3tV3VK9%2BqlyPHa%2FSC4zUViuXj8k4r3HXWvdxOzy9Xgmyrfa0B0fPtCnYtC9rwy75UnxDoFfO2EeKCCP7zb7T9bPx%2B45aqyJWPUQWrhTxqOrjGnVgWxWxnEEzm0QdD6JdBkZahebppu4BAwgoqQnNChUfBrycMTWlP1%2FHn7S2ZvSz0sf93tRz6hW%2BcnS81s3hx5ULkb8VgUpan3vSGxnb1XCU6v4lOWxl4loPeGpFo0onM0JJd9gob%2B7IYEXX9Dgt54Q1IDomt5nobeG5KmEuKLv1JA5X7kNXcT6GzdRHMer9JMvPLa%2FvxoNZ8LYZp9T6o%2BJMo%2BAnaG%2FwM%3D)

<br>

***

## Post-MVP

- Login/Auth
- Ability to 'like' posts
- View posts by category
- View all posts by a specific user


***

## Code Showcase

> Use this section to include a brief code snippet of functionality that you are proud of and a brief description.

## Code Issues & Resolutions

> Use this section to list of all major issues encountered and their resolution.
