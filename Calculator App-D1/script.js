const vport = document.getElementsByClassName('vport')[0];

function setDefaultViewPortValue() {
  vport.innerHTML = "0";
}

function addToViewPort(value) {
    if (vport.innerHTML === "0" && !["/", "*", "+", "-", "."].includes(value)) {
      vport.innerHTML = value;
    } else if (vport.innerHTML === "Error" || vport.innerHTML === "Infinity" || vport.innerHTML === "-Infinity" || vport.innerHTML === "NaN") {
      setDefaultViewPortValue();
    } else {
      // Prevent multiple consecutive operators
      if (["/", "*", "+", "-", "."].includes(value) && ["/", "*", "+", "-", "."].includes(vport.innerHTML.slice(-1))) {
        return;
      }
  
      vport.innerHTML += value;
    }
}

function backspaceViewPort() {
  if (vport.innerHTML === "Error" || vport.innerHTML === "Infinity" || vport.innerHTML === "-Infinity" || vport.innerHTML === "NaN") {
    setDefaultViewPortValue();
  } else {
    vport.innerHTML = vport.innerHTML.slice(0, -1);
  }

  if (vport.innerHTML === "") {
    setDefaultViewPortValue();
  }
}

function displayCalculation() {
  try {
    vport.innerHTML = eval(vport.innerHTML);
  } catch (error) {
    vport.innerHTML = "Error: Invalid expression";
  }
}
