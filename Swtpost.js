const sidebarLinks = document.querySelectorAll(".sidebarLink");
const postcontLink = document.querySelector(".post-cont");
const asideitemLink = document.querySelector(".aside-items");

// Define a function to handle the click event
function handleClick(e) {
  e.preventDefault(); // Preventing default link behavior

  // Toggle the classes to show/hide elements
  postcontLink.classList.toggle("hide");
  asideitemLink.classList.toggle("show");

  // Remove the click event listener after it's been triggered once
  sidebarLinks.forEach((link) => {
    link.removeEventListener("click", handleClick);
  });
}

// Iterate through each sidebar link and add event listener
sidebarLinks.forEach((link) => {
  link.addEventListener("click", handleClick);
});
