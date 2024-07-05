// Assuming RatingBox is already selected correctly
let RatingBox = document.querySelector(".box");
let rate = 0;
let thxbox = document.querySelector(".thxbox");
let resault = document.querySelector(".rate");
// Select all choices within RatingBox
let choices = document.querySelectorAll(".choice");
let submitbtn = document.querySelector(".submit-button");
// Add click event listener to each choice
choices.forEach((choice) => {
  choice.addEventListener("click", function () {
    // Remove 'active' class from all choices
    choices.forEach((c) => c.classList.remove("active"));

    // Add 'active' class to the clicked choice
    this.classList.add("active");
    rate=parseInt(this.innerText)
  });
});
submitbtn.onclick = function () {
  RatingBox.style.display = "none";
  thxbox.style.display = "block";
  resault.innerHTML = `You selected ${rate} out of 5`;
  setTimeout(() => {
    // Show thxbox and add transition effect
    thxbox.style.transition = "opacity 0.3s ease-in";
    thxbox.style.opacity = "1";
    
    // Update the result text
    resault.textContent = `You selected ${rate} out of 5`;
  }, 300); // Match the transition duration for a smooth transition
  

};


