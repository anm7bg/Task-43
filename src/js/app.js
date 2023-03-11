import "../scss/app.scss";

window.addEventListener("DOMContentLoaded", () => {
  // This block will be executed once the page is loaded and ready

  const button = document.querySelector(".button");
  button.addEventListener("click", () => {
    alert("💣");
  });

  const myFunc = function() {
    // alert('After 3 seconds of page load!');
    document.title = "One new message"
  }
  window.onload = function() {
      console.log("Hello")

      setTimeout(myFunc, 3000);
  }

});
