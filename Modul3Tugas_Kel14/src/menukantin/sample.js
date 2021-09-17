function sampleFunction() {
  var none = document.getElementById('none');
  var option = none.options[none.selectedIndex].text;
  var sampleText = document.getElementById('resultElem').value;
  sampleText = sampleText + option;
  document.getElementById('resultElem').value = sampleText;
}
