import request from 'superagent'


const baseUrl = 'https://ghibliapi.herokuapp.com/films'


export function getGhibliFilm() {
  return request
    // .set('Authorization', 'Bearer ' + key) // If you need an auth header use .set
    .get(baseUrl)
    .then(res => res.body)
}

// display array 
// make button nest to each film > id take and add to end in api . js and the film data will appear
// 1 Display film GET films
// 3> GET film details (call this> pass in id to end of base url)