const menuContainer = document.querySelector(".sidebar"); // Adjust the selector based on your HTML structure

if (menuContainer) {
  const menuItem = menuContainer.querySelectorAll("a");

  menuItem.forEach((item) => {
    item.addEventListener("click", (event) => {
      // Remove 'active' class from all menu items
      menuItem.forEach((el) => {
        el.classList.remove("active");
      });

      // Add 'active' class to the clicked menu item
      event.currentTarget.classList.add("active");
    });
  });
}

//////Social media/////--

document
  .getElementById("h3dfacebook")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var url = "https://web.facebook.com/hlearningCambodia/"; // URL you want to open
    window.open(url, "_blank"); // Open URL in a new tab
  });

document
  .getElementById("h3dtiktok")
  .addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the default behavior of the link
    var url =
      "https://www.tiktok.com/@h3dlearningcambodia?_t=8hk5ZF14KUk&_r=1/"; // URL you want to open
    window.open(url, "_blank"); // Open URL in a new tab
  });

//////Load more/////--

let currentItem = 6;

$(".load-more").on("click", function () {
  let boxes = $(".container .MuiGridlist-root li");
  $(".load-more").addClass("show-loader");

  const displayNextItems = () => {
    for (let i = currentItem; i < currentItem + 6 && i < boxes.length; i++) {
      $(boxes[i]).css("display", "flex");
    }

    $(".load-more").removeClass("show-loader");
    currentItem += 6;

    if (currentItem >= boxes.length) {
      $(".load-more").hide();
    }
  };

  setTimeout(displayNextItems, 1000); // Display items after 1 second
});

////// aside close menu /////--

const sideMenu = document.querySelector("aside");
const menuBtn = document.getElementById("menu-btn");
const closeBtn = document.getElementById("close-btn");

const maxWidth = 3900; // Maximum width for the media screen to show the side menu
const mediaQuery = window.matchMedia("(max-width: 768px)");

const displaySideMenu = () => {
  if (window.innerWidth <= maxWidth && !mediaQuery.matches) {
    sideMenu.style.display = "block";
  } else {
    sideMenu.style.display = "none";
  }
};

menuBtn.addEventListener("click", () => {
  sideMenu.style.display = "block"; // Show the side menu on button click
});

closeBtn.addEventListener("click", () => {
  sideMenu.style.display = "none";
});

// Initial check on page load
displaySideMenu();

// Listen for window resize events to adjust the display of the side menu
window.addEventListener("resize", displaySideMenu);

////// Back-to-top /////--

(function () {
  const backToTopButton = document.querySelector(".btn-back-top");
  const BODY_CSS_CLASS = "is-scrolling";

  backToTopButton.addEventListener("click", () => {
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  });

  function handleScroll() {
    const scrollPosition =
      window.scrollY ||
      document.documentElement.scrollTop ||
      document.body.scrollTop;

    if (scrollPosition > 100) {
      document.body.classList.add(BODY_CSS_CLASS);
    } else {
      document.body.classList.remove(BODY_CSS_CLASS);
    }
  }

  window.addEventListener("scroll", handleScroll);
})();

////// Show Post-Contain /////--

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
