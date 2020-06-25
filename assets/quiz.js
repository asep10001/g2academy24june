// function playerNumber1(name, role, level){
//     if(name === ''){
//     alert('Please enter your name');
//   }else if (role === ''){
//     alert('Please insert your role');
//   } 
//   else if ( role.toUpperCase() != 'KNIGHT' && role.toUpperCase() != 'ROUGE' && role.toUpperCase() != 'MAGICIAN'){
//     alert('Role is not available');
//   }else{
//     if (level >= 0 && level <=20){
//           console.log(`Welcome Player ${name} your role is ${role} and you are still in Beginner level, Explore more and conquer this game`);
//         }else if(level >= 21 && level <=60){
//           console.log(`Welcome Player ${name} your role is ${role} and you are in Advance level, May the force strong with you`);
//         } else{
//           console.log(`Welcome Player ${name} your role is ${role} and you are in Master Level, it's easy for you to slay a dragon`);
//         }
//   }
// }

// var name = 'asep';
// var role = 'magician';
// var level = 60;
// playerNumber1(name, role, 60);

// function bandingkan(angka1, angka2) {
//   if (angka1 < angka2){
//     return console.log(true);
//   } else if (angka1 > angka2){
//     return console.log(false)
//   } else if (angka1 === angka2){
//     return console.log('Pas')
//   }
// }

// bandingkan(2, 7);

// bandingkan(8, 1);
// bandingkan(6, 6); // pas
// bandingkan(1, 1); // pas
// bandingkan(21, 3); // false
var peopleVote = [01,01,02,02,02,01,02,01,01]

function ministryOfMagicVote(peopleVote){
  var albusVote = 0;
  var grindelVote = 0;
  var results = '';
    for(var i =0; i< peopleVote.length; i++){
      if(peopleVote[i] === 01){
        albusVote+=1;
      }else if(peopleVote[i] === 02){
        grindelVote+=1;
      } else{
        'Lu milih siapa ga ada tauk!'
      }
    }
    if (albusVote > grindelVote){
      results = 'Congratulation Albus Siberus , now you are Ministry Of Magic';
    } else if (albusVote < grindelVote) {
      results = 'Congratulation Grindel Waduh, now you are Ministry Of Magic';
    } else{
      results = "It's A Draw!"
    }
    return console.log(results);
}

ministryOfMagicVote(peopleVote);
