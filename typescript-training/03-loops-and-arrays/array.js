var cities = ["Paris", "Toulon", "Nantes", "Lille"];
console.log(" -------------- traditional for ----------------------");
for (var i = 0; i < cities.length; i++) {
    console.log(cities[i]);
}
console.log(" --------------  for of ----------------------");
for (var _i = 0, cities_1 = cities; _i < cities_1.length; _i++) {
    var city = cities_1[_i];
    if (city === "Paris") {
        console.log(city + " << My favorite city");
    }
    else {
        console.log(city);
    }
}
console.log(" --------------  for each ----------------------");
cities.forEach(function (city) { return console.log(city); });
console.log(" --------------  Growh array----------------------");
cities.push("Toulouse");
console.log(cities);
