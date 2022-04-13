/*App that: 1-----> Asks user to enter how many subjects they have. 
2-----> Ask the user to enter the results for each subject. 
3-----> Store these results in an array  
4-----> Print them back to the user along with their average and grade for each module.*/

function subjects() {
  //get user number of subjects
  var numSubjects = parseInt(prompt("How many subjects do you have?"));
  //console.log(numSubjects);

  //Validate prompt to avoid accepting 0 subject as a value
  if (numSubjects === 0) {
    alert("Please, type a number of subjects.");
    return false;
  } else {
    var userArray = []; //Declare array
    var sizeArray = numSubjects; // Array size, depends on number of subjects

    for (var i = 0; i < numSubjects; i++) {
      userArray[i] = parseInt(
        prompt("Enter grade of the subject no " + (i + 1))
      );
      console.log(userArray); //Print in console the array that stores the results
    }

    alert("Your grades introduced are:  " + userArray); //Show grades to user
    hide();
    //average();
    //grade();

    //----->Calculate average
    var avgGrades = 0;

    for (var i = 0; i < userArray.length; i++) {
      avgGrades += userArray[i];
      var average = avgGrades / userArray.length;
    }
    console.log("Average: " + average);
    document.getElementById("pAvg").innerHTML += " " + average; //add average to paragraph "pAvg"

    //----->Calculate grade

    if (average >= 90) {
      console.log("Grade : A");
      document.getElementById("pGrade").innerHTML += " A";
    } else if (average >= 80 && average < 90) {
      console.log("Grade : B");
      document.getElementById("pGrade").innerHTML += " B";
    } else if (average >= 70 && average < 80) {
      console.log("Grade : C");
      document.getElementById("pGrade").innerHTML += " C";
    } else if (average >= 60 && average < 70) {
      console.log("Grade : D");
      document.getElementById("pGrade").innerHTML += " D";
    } else if (average <= 50) {
      console.log("Grade : F");
      document.getElementById("pGrade").innerHTML += " F";
    } else {
      console.log("Not valid");
      document.getElementById("pGrade").innerHTML += "Not valid";
    }
  }

  //hide function to hide button after getting average
  function hide() {
    document.getElementById("button").style.display = "none";
  }
}

// DO ONE SEPARATE FUNCTION FOR AVG AND ANOTHER FOR GRADE
