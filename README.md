# Frontend Mentor - Interactive comments section solution

This is a solution to the [Interactive comments section challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/interactive-comments-section-iG1RugEG9). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the app depending on their device's screen size
- See hover states for all interactive elements on the page
- Create, Read, Update, and Delete comments and replies
- Upvote and downvote comments
- **Bonus**: If you're building a purely front-end project, use `localStorage` to save the current state in the browser that persists when the browser is refreshed.
- **Bonus**: Instead of using the `createdAt` strings from the `data.json` file, try using timestamps and dynamically track the time since the comment or reply was posted.

### Screenshot

![](/design/preview.jpg)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/a-comment-app-built-with-tailwind-js-bZDigxHdDC)
- Live Site URL: [Add live site URL here](https://sammie-comment-app.netlify.app/)

## My process

Building this with vanilla js was both a pain and a blessing spending minutes, hours sometimes even days not writing or staring at my code well it forced to understandd my code instead of using AI. This project is built with modularity in mind by exporting functions and using different js files for different functions in the app

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [Tailwind css](https://tailwindcss.com/) - For styles
- Vanilla Javascript

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

I learned how to use flexbox and grid to create a responsive layout. I also learned how to use tailwind css and how to use it with vanilla js.

```js
<button
  class="bg-pink-400 text-white font-myfont font-medium px-4 py-2 mt-2 rounded-md cursor-pointer hover:bg-pink-200"
  id="delete-btn-${id}"
>
  YES, DELETE
</button>
```

### Continued development

I would love to explore the purpose/concrpt of modularity and functional programming in the future

## Author

- Frontend Mentor - [@Sammie-oje](https://www.frontendmentor.io/profile/Sammie-oje)
- Twitter - [@0J_codes](https://www.twitter.com/0J_codes)
