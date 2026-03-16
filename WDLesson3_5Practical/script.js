/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea(){
      let width = document.getElementById("width").value
      let height = document.getelenmentbyid("height").value
  
      let area = width * height
      document.getElementById("areaResult").innerHTML = "Area: " + area;
}

}

function recPerimeter(){
      let width = document.getElementById("width").value; 
    let height = document.getElementById("height").value
    let perimeter = 2 * (parseFloat(width) + parseFloat(height));
      document.getElementById("perimeterResult").innerHTML = "Perimeter: " + perimeter;
}

}


/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;

function cirArea(){

          let radius = parseFloat(document.getElementById("radius").value);
            let area = pi * radius * radius;
              document.getElementById("areaResult").innerHTML = area.toFixed(2);
}
function cirPerimeter(){
      let radius = parseFloat(document.getElementById("radius").value);
       let perimeter = 2 * pi * radius;
        document.getElementById("perimeterResult").innerHTML = perimeter.toFixed(2);
}
* 

/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function triArea(){
    let base = parseFloat(document.getElementById("base").value);
    let height = parseFloat(document.getElementById("height").value);
}

function triPerimeter(){

}