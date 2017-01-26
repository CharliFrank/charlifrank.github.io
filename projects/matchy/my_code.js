var animal = {};
animal.species = 'Dog';
animal['name'] = 'Inuyasha';
animal.noises = [];
console.log(animal);

var noises = [];
noises[0] = 'meow';
noises.push('yodel');
noises.unshift('rawr');
noises[noises.length] = 'Squee';
console.log(noises.length);
console.log(noises[noises.length -1]);
console.log(noises);

for(var i = 0; i < noises.length; i++){
    animal.noises.push(noises[i]);
}
animal.noises.push('Complain');
console.log(animal);

var animals = [];
animals.push(animal);

var duck = {};
duck.species = 'Duck';
duck['name'] = 'Jerome';
duck.noises = ['quack', 'honk', 'sneeze', 'woosh'];
animals.push(duck);

var cat = {};
cat.species = 'Cat';
cat['name'] = 'Neko';
cat.noises = ['meow', 'purr', 'yelp', 'complain'];
animals.push(cat);

var chicken = {};
chicken.species = 'Chicken';
chicken['name'] = 'Kentucky';
chicken.noises = ['bark', 'holler', 'scream', 'complain'];
animals.push(chicken);


// I chose an Array because it is a list of values.
var friends = [];

function pickFriends(animals){
  for(var i = 0; i < animals.length; i++){
     var output = animals[Math.floor(Math.random() * animals.length)];
  }
  console.log(output, 'output');
     return output.name;
}
friends.push(pickFriends(animals));

animal.friends = friends;


function search(name) {
   for (var i = 0; i < animals.length; i++) {
       if(name.toLowerCase() === animals[i].name.toLowerCase()) {
           return animals[i];
       }  
       
   } return null;
}

function edit(nameOfAnimal, object){
    if(nameOfAnimal.toLowerCase() === object.name.toLowerCase()){
        object.species = 'Dog';
        object['name'] = 'Ren';
        object.noises = ['woof', 'oink', 'moo', 'complain'];
    }
}
edit('Jerome', duck);

function remove(nameOfAnimal){
    for(var i = 0; i < animals.length; i++){
        if(nameOfAnimal === animals[i].name){
            animals.splice(animals[i], 1);
        }
    }
}

function create(object){
    var exists = false;
    if(object.name.length > 0 && object.species.length > 0){
        for(var i = 0; i < animals.length; i++){
            if(animals[i].name === object.name){
              exists = true
            }
        }
        if(!exists){
            animals.push(object);
        }
    }
    
}

