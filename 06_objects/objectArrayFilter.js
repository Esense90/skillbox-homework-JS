let objects = [
  { model: 'Mazda', engineVolume: '2' },
  { model: 'Nissan', engineVolume: '3' },
  { model: 'Toyota', engineVolume: '2.2' },
  { model: 'Mazda', engineVolume: '1.8' },
  { model: 'Mazda', engineVolume: '1.8' }
];

function filterObjects(objects, key, value) {

  let filtered = [];

  for (let i in objects) {
    let obj = objects[i];
    if (obj[key] === value)
      filtered.push(obj)

  }
  return filtered;
}

let filteredObjects = filterObjects(objects, 'model', 'Mazda');

console.log(filteredObjects);


export default filterObjects;
