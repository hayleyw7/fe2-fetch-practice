console.log('so fetch!')

// Pick between 1 of the resources available in the api (users, animals, or sports teams), and do the following:
// 1. Make a get request to get all of the items for a given resource, and log those items to the console.
// 2. Make a post request to create a new instance of that resource, and log the result to the console.

// Hook it up to the dom!
// 4. On page load, fire off #1 from above and populate the section.js-collection with those items
// 5. Add an event listener, so that when you click button.js-add-item, it will make a fetch request to post that item to the server, AND update the page with the newly updated collection

// EXTRA CREDIT:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if all params aren't sent with the post)