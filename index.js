function scuberGreetingForFeet(distance){
  // Write your code here!
  let charge;
  if (distance > 2500) {
    charge = 'No can do.';
  }else if (distance > 2000) {
    charge = 'I will gladly take your thirty bucks.';
  }else if (distance > 400) {
    charge = 'That will be twenty bucks.';
  } else {
    charge = 'This one is on me!';
  }
  return charge;
}

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC'? "Ok, sounds good." : "No go."
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let response = '';
  switch (tip) {
    case 'generous':
    return 'Thank you so much.';
    break;  
    case 'not as generous':
    return  'Thank you.';
    break; 
    default:
    return 'Bye.';
  }
}