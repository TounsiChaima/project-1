

const upcomingEV = [
  {
    _id: "5b21ca3eeb7f6fbccd471815",
    title
    :
    "CSTC",
    dsc
    :
    "The Computer Society Tech Congress (CSTC) is a national event that wil...",
    image
    :
    "http://localhost:5000/uploads/image-1593554669080.jpg",
    __v
    :
    0,
    start
    :
    "2020-06-29T00:00:00.000+00:00",
    end
    :
    "2020-07-03T00:00:00.000+00:00"
  },
  {
    title
    :
    "AERODAY",
    dsc
    :
    "Tunisian Aeroday est la journée nationale de l'aéronautique en Tunisie...",
    image
    :
    "http://localhost:5000/uploads/image-1593556431612.jpg",
    __v
    :
    0,
    start
    :
    "2020-07-12",
    end
    :
    "2020-07-20"
    
  }
];

export function getUpcomingEV() {
  return upcomingEV ;
}
/*
export function getEvent(id) {
  return upcomingEV.find(m => m._id === id);
}

export function saveevent(event) {
  let eventInDb = events.find(m => m._id === event._id) || {};
  eventInDb.name = event.name;
  eventInDb.genre = genresAPI.genres.find(g => g._id === event.genreId);
  eventInDb.numberInStock = event.numberInStock;
  eventInDb.dailyRentalRate = event.dailyRentalRate;

  if (!eventInDb._id) {
    eventInDb._id = Date.now();
    events.push(eventInDb);
  }

  return eventInDb;
}

export function deleteevent(id) {
  let eventInDb = events.find(m => m._id === id);
  events.splice(events.indexOf(eventInDb), 1);
  return eventInDb;
}
*/