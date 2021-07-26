console.log('so fetch!')

// Pick between 1 of the resources available in the api (users, animals, or sports teams), and do the following:
// 1. Make a GET request to get all of the items for a given resource, and log those items to the console.
// 2. Make a POST request to create a new instance of that resource, and log the result to the console.
// 3. Rerun your previous GET fetch request to verify you added the new resource

fetch("http://localhost:3001/api/v1/animals").then(response => response.json()).then(json => console.log(json)).catch(err => console.log('OPPPPPS!'));
fetch("http://localhost:3001/api/v1/animals", {
 method: "POST",
 body: JSON.stringify({ id: 5, name: 'llama', diet: 'grass', fun_fact: 'they are beautiful creatures'}),
 headers: {
   "Content-Type": "application/json",
 }
}).then(response => response.json()).then(json => console.log(json)).catch(err => console.log('OPPPPPS!'));

// Hook it up to the dom!
// 4. On page load, fire off #1 from above and populate the section (.js-collection) with those items
// 5. Add an event listener, so that when you click button.js-add-item, it will make a fetch request to POST that item to the server, AND update the page with the newly updated collection

const collection = document.querySelector('.js-collection')
const addUser = document.querySelector('.js-add-item')
let fetchedData;
addUser.addEventListener('click', addUsers);
window.addEventListener('load', function() {
  getData('sport-teams')
})
function addUsers(data) {
  postData(4, 'Fara', 'Jason Hughes', 'Golf');
  data.map(user => {
    collection.innerHTML += `<h3> Id: ${user.id} </h3>
    <p>UserName: ${user.name}</p>
    <p>Coach: ${user['head_coach']}</p>
    <p>Sport: ${user.sport}</p> `
  })
}
const getData = (path) => {
  fetch(`http://localhost:3001/api/v1/${path}`)
    .then(response => response.json())
    .then(data => {
      fetchedData = data
      addUsers(data)
    })
}
const postData = (id, name, coach, sport) => {
  let newObj = {
    id: id,
    name: name,
    head_coach: coach,
    sport: sport,
  }
  fetch('http://localhost:3001/api/v1/sport-teams', {
      method: 'POST',
      body: JSON.stringify(newObj),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    .then(response => response.json())
    .then(data => console.log(data))
}

// EXTRA CREDIT:
// Create a form and event listener so that the user can add an item of their choosing
// Handle the use case where a 422 is given back from the server (this will happen if not all params are sent with the POST)