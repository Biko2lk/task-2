let out = document.getElementById("Output");
let button = document.getElementById("Bttn");

var male = document.getElementById("radio");
var female = document.getElementById("radio-1");

let clear = document.getElementById("Clear");
let inputs = document.querySelectorAll("input");

function details() {
  if (num.value.length > 10) {
    alert("Enter the valid phone Number");
  } else {
    let newe = document.createElement("ul");

    let skillss = [];

    document.querySelectorAll(`[type="checkbox"]`).forEach((va) => {
      if (va.checked == true) {
        skillss.push(va.value);
      }
    });

    if (male.checked == true) {
      var m = male.value;
    } else if (female.checked == true) {
      var m = female.value;
    }

    var llk = (newe.innerHTML = `
    <div class="Box" id="Box">
    <h2 id="delete">+</h2>
    <div class="box-image">
<img src="${Im.value}" alt="Copy/paste image address of image">
    </div>
    <div class="box-detail">
        <p>First Name : <span>${Firstn.value}</span> </p>
        <p>Last Name : <span>${Lastn.value}</span> </p>
        <p>E-mail : <span>${emaill.value}</span> </p>
        <p id="genders">Gender: <span>${m}</span></p>
        <p id="skills">Skills: <span>${skillss}</span></p>
        <p>Contact-No : <span>${num.value}</span> </p>
        
    </div>
    </div>`);

    out.appendChild(newe);

    newe.querySelector("#delete").addEventListener("click", remove);
    function remove() {
      newe.remove();
    }
  }
}



button.addEventListener("click", details);

clear.addEventListener("click", function () {
  // inputs.forEach(input => input.value="");
  document.getElementById("Firstn").value = "";
  document.getElementById("Lastn").value = "";
  document.getElementById("emaill").value = "";
  document.getElementById("num").value = "";
  document.getElementById("Im").value = "";

  if (male.checked == true) {
    male.checked = false;
  } else {
    female.checked = false;
  }

  var H = document.getElementById("H");
  var C = document.getElementById("C");
  var J = document.getElementById("J");

  if (H.checked == true) {
    H.checked = false;
    C.checked = false;
    J.checked = false;
  } else {
    H.checked = false;
    C.checked = false;
    J.checked = false;
  }
});
