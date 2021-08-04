var myelem = document.getElementById('press');
myelem.onclick = function () {
  function makeid() {
    
  
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for (var i = 0; i < 10; i++)
        text += possible.charAt(Math.floor(Math.random() * possible.length));

    return text;
  }
    document.getElementById('output').value = makeid()
}
function myFunction() {
  
  var copyText = document.getElementById("output");

  /* Select the text field */
  copyText.select();
  // copyText.setSelectionRange(0, 999); /* For mobile devices */

  /* Copy the text inside the text field */
  document.execCommand("copy");
document.getElementById("copy-button").innerHTML = `Copied` 
 setTimeout(() => {
   document.getElementById('copy-button').innerHTML = `copy`
 }, 1500);

}

