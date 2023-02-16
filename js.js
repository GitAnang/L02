function Luas() {
  var p = document.getElementById("p").value;
  var l = document.getElementById("l").value;
  var t = document.getElementById("t").value;
  var Luas = p * l * t;

  document.getElementById("Luas").innerHTML = Luas;
}
