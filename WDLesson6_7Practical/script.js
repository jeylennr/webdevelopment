
let data;
async function init(){


  let link = "311.json"
  info = await fetch(link);
  data = await info.json();

  let output = document.getElementById("output");
  let build = "";

  for(let i = 0; i < data.length; i+=1){
    let complaint = data[i];
    build += `<div class="fitted card">
    <h3>${complaint.contributing_factor_vehicle_1}</h3>
    <hr>
    <p>${complaint.on_street_name}</p>
    <p>${complaint.borough}</p>
    <p>${complaint.zip_code}</p>
    <hr>
    <p>Total People Injured: ${complaint.number_of_persons_injured}</p>
    <p>Total People Killed: ${complaint.number_of_persons_killed}</p>
    <hr>
      <p>${complaint.crash_date}</p>
    </div>`
  }
      output.innerHTML = build;
  }