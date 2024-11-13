# Frontend Mentor - Stats preview card component solution

This is a solution to the [Stats preview card component challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/stats-preview-card-component-8JqbgoU62). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size

### Screenshot

![preview](./public/preview.png)

### Links

- Solution URL: [github](https://github.com/oloude)

### Built with

- Semantic HTML5 markup
- Tailwind
- Flexbox
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library
- [Typescript](https://www.typescriptlang.org/) - extends JavaScript by adding types to the language

**Note: These are just examples. Delete this note and replace the list above with your own choices**

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

```js
function MainContent() {
  return (
    <article className="flex flex-col p-6 lg:basis-1/2 lg:p-10 lg:justify-center">
      <h1 className="text-3xl font-bold text-center text-white lg:text-left mb-5">
        Get <span className="text-accent">insights</span> that help your
        business grow.
      </h1>
      <p className="text-white opacity-75 text-sm text-center mb-10 lg:text-left">
        {" "}
        Discover the benefits of data analytics and make better decisions regarding
        revenue, customer experience, and overall efficiency.
      </p>
      <div className="flex flex-col items-center gap-4 lg:flex-row lg:justify-between ">
        <Stats title="10k+" subtitle="companies" />
        <Stats title="314" subtitle="templates" />
        <Stats title="12m+" subtitle="queries" />
      </div>
    </article>
  );
}
```

## Author

- Frontend Mentor - [@oloude](https://www.frontendmentor.io/profile/oloude)
- Twitter - [@AbosedeOloude](https://www.twitter.com/AbosedeOloude)
