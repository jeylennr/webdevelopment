// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function name(){
  let input1 = document.getElementById("input1").value;
  let input2 = document.getElementById("input2").value;
  let output = document.getElementById("output");
  let result = Number(input1) + Number(input2);
}


/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  let animal1 = document.getElementById("animal1").value;
  let feeling = document.getElementById("emotion").value;
  let output = documnet.getElementById("output");
  let picture = "";
  
  if(animal  == "Bear" && feeling == "sad"){
    picture = "sadBear.jpg";
  }
if(animal == "Bear" && feeling == "sad")
}