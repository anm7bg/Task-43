document.title = "No new messages"
var myFunc = function() {
    // alert('After 3 seconds of page load!');
    document.title = "One new message"
  }
window.onload = function() {
    console.log("Hello")

    setTimeout(myFunc, 3000);
  }