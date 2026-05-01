/*
  List of all the images. "beeftips.jpg","brisket.jpg","ribeye.jpg","steak.jpg","clams.jpg","crabs.jpg","lobster.png","scallops.jpg","shrimp.jpg","tuna.jpg","flan.jpg","passionberry.jpeg","oreocup.jpg"
*/ 
//Challenge 1: Add the appropriate images to each array below from the list above.
//Challenge 2: Add appropriate prices for each food in their corresponding array.
//Challenge 3: Add appropriate titles for each food in their corresponding array.  Use the image names as a hint for the food title.
let meat_titles = ["beeftips","brisket", "ribrye","steak"];
let meats = ["beeftips.jpg", "brisket.jpg","ribeye.jpg","steak.jpg"];
let meat_prices = [5,6,7,8,9,10];
let seafood_titles = ["calms.jpg","crabs.jpg","lobster.jpg","scallops.jpg","shrimp.jpg", "tuna.jpg"];
let seafood = ["calms.jpg","crabs.jpg","lobster.jpg","scallops.jpg","shrimp.jpg", "tuna.jpg"];
let seafood_prices = [10, 20,20,15,25];
let dessert_titles = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert = ["flan.jpg","passionberry.jpeg","oreocup.jpg"];
let dessert_prices = [7, 8,11,10];

function init(){
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;
  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
for(let i = 0; i < meats.lenght;  i+= 1){
  build += '<div>';
  build += '     <h2> ${ meat_titles[i] } </h2>';
  build += '     <image src'= " {meats[i]}>'; "
  build += '     <span>${meat_prices[i]</span>}';
  build += '</div>';
}
m.innerHTML = build;


  
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.

  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.

  /*Notes for Challenges 4 through 6:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with the title, image and price.
  */
}
