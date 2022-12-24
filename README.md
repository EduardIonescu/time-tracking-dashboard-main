### Links

-   Live Site URL: [Click here to see webpage](https://eduardionescu.github.io/time-tracking-dashboard-main/)

# Frontend Mentor - Time tracking dashboard solution

This is a solution to the [Time tracking dashboard challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/time-tracking-dashboard-UIQ7167Jw)

## Table of contents

-   [Overview](#overview)

    -   [The challenge](#the-challenge)

-   [My process](#my-process)
    -   [Built with](#built-with)
    -   [What I learned](#what-i-learned)
    -   [Continued development](#continued-development)
-   [Author](#author)

## Overview

### The challenge

Users should be able to:

-   View the optimal layout for the site depending on their device's screen size
-   See hover states for all interactive elements on the page
-   Switch between viewing Daily, Weekly, and Monthly stats

## My process

### Built with

-   Semantic HTML5 markup
-   CSS custom properties
-   Flexbox
-   CSS Grid
-   Mobile-first workflow
-   JavaScript
-   Fetch

### What I learned

I've built the sections only using JavaScript and that was a fun challenge.

I've also practiced some CSS Grid since it would've been way more difficult to implement it with flexbox because I've created the mobile version first.

```css
main {
	display: grid;
	/* Makes the aside occupy 2 spaces on the Y axis*/
	grid-template: "longAside . . ." "longAside . . .";
}
main aside {
	grid-area: longAside;
}
```

### Continued development

I want to learn further CSS Grid and work with APIs to get cool data.

## Author

-   Website - [EduardIonescu](https://ionescueduard.netlify.app)
-   Frontend Mentor - [@EduardIonescu](https://www.frontendmentor.io/profile/EduardIonescu)
