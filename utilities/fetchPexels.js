const pexels = require('pexels')
// import { createClient } from 'pexels';
require('dotenv').config()

const client = pexels.createClient(process.env.pexels_api_key);

const imageId = 5324926;

client.photos.show({ id: imageId }).then(photo => {console.log(photo.src.small)});



// Response:

/* {
    id: 5324926,
    width: 3983,
    height: 5974,
    url: 'https://www.pexels.com/photo/serious-man-working-on-laptop-in-office-5324926/',
    photographer: 'Anna Shvets',
    photographer_url: 'https://www.pexels.com/@shvetsa',
    photographer_id: 1984515,
    avg_color: '#877C7A',
    src: {
      original: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg',
      large2x: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940',
      large: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&h=650&w=940',
      medium: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&h=350',
      small: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&h=130',
      portrait: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=1200&w=800',
      landscape: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&fit=crop&h=627&w=1200',
      tiny: 'https://images.pexels.com/photos/5324926/pexels-photo-5324926.jpeg?auto=compress&cs=tinysrgb&dpr=1&fit=crop&h=200&w=280'
    },
    liked: false,
    alt: 'Concentrated bearded male manager typing on netbook while working with colleague on blurred background in modern office'
  } */



// Pexels API: Image search

// const photosBaseURL = 'https://api.pexels.com/v1';
// const videosBaseURL = 'https://api.pexels.com/videos';

// GET: 

// fetch(photosBaseURL + "/search?query=people",{
//   headers: {
//     Authorization: process.env.pexels_api_key
//   }
// })
//    .then(resp => {
//      return resp.json()
//    })
//    .then(data => {
//      console.log(data.photos)
//    })

   