' use strict '

alert("Welcom To Sara Website")

let userName = prompt("  What Is Your Name?");

alert('Welcom ' + userName );

let dgreeQ=0;


let sName = prompt("  Is My Name Sara?" ) .toLowerCase();


switch (sName){
    case 'yes':
    case 'y' :
        // console.log ('correct');
        alert ("correct");
        dgreeQ++; 
        break;

        default :
        // console.log ('Wrong');
        break;

}

let ageS = prompt("Is My Age Above 20 ").toLowerCase();


switch (ageS){
    case 'yes':
    case 'y' :
        // console.log ('correct');
        alert ("correct");
        dgreeQ++; 

        break;

        default :
        // console.log ('Wrong');
        break;

}

let smajor = prompt("  Was my major in college Accounting??" ).toLowerCase() ;


switch (smajor){
    case 'no':
    case 'n' :
        // console.log ('correct');
        alert ("correct");
        dgreeQ++; 

        break;

        default :
        // console.log ('wrong');
        
        
        break;

}


let from = prompt("Am i from Jordan").toLowerCase();


switch (from){
    case 'yes':
    case 'y' :
        // console.log ('correct');
        alert ("correct");
        dgreeQ++; 

        break;

        default :
        // console.log ('Wrong');
        break;

}

let live = prompt("Do I live in Amman ").toLowerCase();


switch (live){
    case 'no':
    case 'n' :

        // console.log ('correct');
        alert ("correct");
        dgreeQ++; 

        break;

        default :

        // console.log ('wrong');
        
        break;

       
}


let userG1 =Number(prompt('Guess the number in my mined'));
 
for (let i=0; i<3 ;i++){


if(userG1===5){
    alert('correct');
    dgreeQ++; 

    break;
}
else if (userG1 > 5){
    alert('Too High');
    userG1 =Number(prompt('Guess the number in my mined'));
}
else {
    alert('TOO Low');
    userG1 =Number(prompt('Guess the number in my mined'));
}
}




let ansQ=['friday', 'satarday', 'thersday'];

let Qans = prompt('What is my favariat days?').toLowerCase();

for(let i=0; i<5;  i++){

if(Qans === ansQ[0] || Qans===ansQ[1] || Qans===[2] ){
    alert('correct');
    alert('My favariate days is friday satarday and thersday');
    dgreeQ++; 

    break;
}
else {alert('wrong');}
Qans = prompt('What is my favariat days?').toLowerCase();

}

alert('Welcom '  + userName  +    '   your grade is   '   + dgreeQ);

