const cities = ["Paris", "Toulon", "Nantes", "Lille"];
console.log(" -------------- traditional for ----------------------");
for (let i = 0; i < cities.length; i++) {
  console.log(cities[i]);
}
console.log(" --------------  for of ----------------------");

for (let city of cities) {
  if (city === "Paris") {
    console.log(city + " << My favorite city");
  } else {
    console.log(city);
  }
}
console.log(" --------------  for each ----------------------");

cities.forEach((city) => console.log(city));

console.log(" --------------  Growh array----------------------");
cities.push("Toulouse");
console.log(cities);
