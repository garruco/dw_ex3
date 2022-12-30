const handleOnMouseMove = (e) => {
  const { currentTarget: target } = e;

  const rect = target.getBoundingClientRect(),
    x = e.clientX - rect.left,
    y = e.clientY - rect.top;

  target.style.setProperty("--mouse-x", `${x}px`);
  target.style.setProperty("--mouse-y", `${y}px`);
};

for (const card of document.querySelectorAll(".card")) {
  card.onmousemove = (e) => handleOnMouseMove(e);
}

function show1() {
  var f = document.getElementById("colapse-about1");
  var plus1 = document.getElementById("plus1");

  if (f.style.display === "none") {
    f.style.display = "block";
    f.style.opacity = "1";
    f.style.animation = "1s animopacity";
    plus1.innerHTML = "-";
  } else {
    f.style.display = "none";
    f.style.opacity = "0";
    f.style.animation = "1s reverse animopacity";
    plus1.innerHTML = "+";
  }
}
function show2() {
  var d = document.getElementById("colapse-about2");
  var plus2 = document.getElementById("plus2");

  if (d.style.display === "none") {
    d.style.display = "block";
    d.style.opacity = "1";
    d.style.animation = "1s animopacity";
    plus2.innerHTML = "-";
  } else {
    d.style.display = "none";
    d.style.opacity = "0";
    d.style.animation = "1s reverse animopacity";
    plus2.innerHTML = "+";
  }
}
