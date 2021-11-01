let objects = [
  { carModel: 'Mazda', engineVolume: '2.5' },
  { carModel: 'Toyota', engineVolume: '3.2' },
  { carModel: 'Nissan', engineVolume: '2.0' },
];

function filterObjects() {

  for (let i in objects) {

    let value = Object.values(objects[i])





    console.log('carModel' + value);
  }

  // let filtered = filterObjects(objects, 'carModel', 'Mazda');

}


filterObjects();











// export default objectFilter;
