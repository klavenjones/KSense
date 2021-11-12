# Users and Posts Code Challenge


This was a fun little code challenge that I completed in a few hours, where I needed to consume the following API: https://jsonplaceholder.typicode.com/.

The goal was to display all the users in a table, and when a user clicks on one of the users, then the posts that are associated with them would show below them. The fun part of the code challenge was to do it in either vanilla JavaScript or JQuery.

I chose to do it in vanilla JavaScript, because I'm so used to using a JavaScript framework like React, I wanted to refresh my memory on how to achieve the goal with vanilla JavaScript. 



The project was not too difficult, although I did run into a bit of a challenge when dealing with the posts. 


## Approach

The approach I decided to use for the whole project was to reference the parent element, and then append the children to it dynamically, when I make a request to the API. 

## Challenge

Whenever I clicked on a user from the table, it would make a request to the Post API, and append their posts dynamically to the end of the list. This was fine when you clicked on one user. But If I decided to click on other users it would continue to append their posts to the end of the list. 

So I figured out that I needed to remove the old children, before appending new children to the end of the list. 

