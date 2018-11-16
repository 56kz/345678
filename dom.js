function blurFunction(){
  var x = document.forms["myForm"]["firstname"].value;
  if (x == ""){
    document.getElementById("text").disabled = true;
  }
  else {
    document.getElementById("text").disabled = false;
  }
}
