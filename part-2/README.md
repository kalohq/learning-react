# Part 2 - React Patterns

<!-- TOC -->

- [Part 2 - React Patterns](#part-2---react-patterns)
  - [1. Starting up](#1-starting-up)

<!-- /TOC -->

## 1. Starting up

If you're here you should've created a new app using `create-react-app` by now. `cd` there and run `npm start`. Your new application should appear in your browser of choice!

## 2. Presentation

Find [here](TODO)

## 3. Exercise

### Part 1

Write an abstraction (using the patterns you learnt from the presentation) that will fetch an image every 5 seconds from Giphy.

The fetch call to giphy (returning a promise to a image url) can be written as below:

```js
async function getImage() {
  const ENDPOINT = 'http://api.giphy.com/v1/gifs/random?api_key=dc6zaTOxFJmzC';
  const response = await fetch(ENDPOINT);
  return response.json().data.image_original_url;
}
```

### Part 2

Use that abstraction to render the most up-to-date image using a simple `img` component

### Part 3

Enhance your abstraction to allow the user to enter a search term to filter the image search.

Adding the following query parameter to the giphy request will allow filtering to a search term: `?tag=it-crowd`

### Part 4

Repeat the exercise using a different pattern.
