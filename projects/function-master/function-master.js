
function objectValues(object){
   var output = [];
        for(var keys in object){
            output.push(object[keys]);
        }
    return output;
}


function keysToString(object){
    return  Object.keys(object).join(' ');
}



function valuesToString(object){
    var output = [];
        for (var keys in object){
            if(typeof object[keys] === 'string'){
                 output.push(object[keys]);
            }
         }
   return output.join(' ');
}


function arrayOrObject(argument){
    if(Array.isArray(argument)){
        return 'array';
    } else if(typeof argument === 'object'){
        return 'object';
    }
}


function capitalizeWord(string){
    string = string.charAt(0).toUpperCase() + string.slice(1);
        return string;
}


function capitalizeAllWords(string){
    var newString = string.split(' ');
        var output = [];
            for(var i =0; i < newString.length; i++){
                var capitalLetter = newString[i][0].toUpperCase();
                var wordArray = newString[i].split('');
                wordArray.splice(0, 1, capitalLetter);
                var capitalWord = wordArray.join('');
                output.push(capitalWord);
            }
    return output.join(' ');
}


function welcomeMessage(object){
    //console.log(object);
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
        if(object.hasOwnProperty('name')){
           return 'Welcome ' + object.name + '!';
     }
}



function profileInfo(object){
    //console.log(object);
    object.name = object.name.charAt(0).toUpperCase() + object.name.slice(1);
        object.species = object.species.charAt(0).toUpperCase() + object.species.slice(1);
            if(object.hasOwnProperty('name') && object.hasOwnProperty('species')){
                return object.name + ' is a ' + object.species;
            }
}


function maybeNoises(object){
    //  console.log(object);
        if(object.noises){
            if(Array.isArray(object.noises)){
                if(object.noises.length > 0){
                    return (object.noises.join(' '));
                }else if(object.noises.length === 0){
            return ('there are no noises');
                }
            }
        }else{
            return ('there are no noises');
        }
}
  

function hasWord(string, word){
    // console.log(string, word);
        if(string.toLowerCase().includes(word.toLowerCase())){
            return true;
        } else{
            return false;
        }
}


function addFriend(name, object){
    // console.log(name, object);
    var output = ''
        for(var i = 0; i < name.length; i++){
            output += name[i];
        } 
    object.friends.push(output);
    return object;
 }



function isFriend(name, object){
   if(object.hasOwnProperty('friends')){
   //console.log('i gots friends bish');
        for(var i = 0; i < object.friends.length; i++){
            if(name.toLowerCase() === object.friends[i].toLowerCase() ){ 
                return true;
            } 
        }
    }
    return false;
} 

function nonFriends(name, list){
  //console.log(name, list);
  var currentFriends;
  var notAFriend = [];
  for(var i = 0; i < list.length; i++){
      if(list[i].name === name){
          currentFriends = list[i].friends;
      }
  }
  
  
    for(var i = 0; i < list.length; i++){
        if(!currentFriends.includes(list[i].name)){
            notAFriend.push(list[i].name);
        }
    }
    var index = notAFriend.indexOf(name);
    //console.log(index);
    notAFriend.splice(index, 1);
    //console.log(notAFriend);
    return notAFriend;
}


function updateObject(object, key, value){
    object[key] = value;
    return object;
}


function removeProperties(object, array){
    // console.log(object);
    // console.log(array);
    
    var newObj = Object.keys(object);
    
    for (var i = 0; i < newObj.length; i++) {
        for (var j = 0; j < array.length; ++j) {
            if(newObj[i] !== array[j] && newObj.includes(array[j])){
              delete object[array[j]];
              //console.log(object[newObj]);
            }
        } 
    } 
    //console.log(object);
}


function dedup(array){
    var newString = [];
        for (var i = 0; i < array.length; i++) {
            if(!newString.includes(array[i])){
                newString.push(array[i]);
            }
        } 
    return newString;
}