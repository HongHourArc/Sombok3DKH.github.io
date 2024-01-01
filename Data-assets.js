"use strict";

const assetsData = [
  {
    id: 1,
    title: "ថ្នាក់សិក្សាVantageពីសូន្យដល់បញ្ចប់",
    category: "H3DLessons",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Lesson/HOUR 3a.jpg",
    price: "Free",
    icons: "menu_book",
  },

  {
    id: 2,
    title: "ថ្នាក់សិក្សាEnscapeពីសូន្យដល់បញ្ចប់",
    category: "H3DLessons",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Lesson/HOUR 4a.jpg",
    price: "Free",
    icons: "menu_book",
  },

  {
    id: 3,
    title: "ថ្នាក់សិក្សាVrayពីសូន្យដល់បញ្ចប់",
    category: "H3DLessons",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Lesson/HOUR 5a.jpg",
    price: "Free",
    icons: "menu_book",
  },

  {
    id: 4,
    title: "ថ្នាក់សិក្សាD5ពីសូន្យដល់បញ្ចប់",
    category: "H3DLessons",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Lesson/HOUR 6a.jpg",
    price: "Free",
    icons: "menu_book",
  },

  {
    id: 5,
    title: "ថ្នាក់សិក្សាLumionពីសូន្យដល់បញ្ចប់",
    category: "H3DLessons",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Lesson/HOUR 7a.jpg",
    price: "Free",
    icons: "dmenu_book",
  },

  {
    id: 6,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 7,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre1.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 8,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre2.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 9,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre3.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 10,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre4.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 11,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre5.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 12,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre6.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 13,
    title: "Scene Interior 01",
    category: "H3DPremiums",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Premiums/Pre7.jpg",
    price: "Free",
    icons: "diamond",
  },

  {
    id: 14,
    title: "Scene Interior 01",
    category: "H3DStudents",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu.jpg",
    price: "Free",
    icons: "diversity_1",
  },

  {
    id: 15,
    title: "Scene Interior 01",
    category: "H3DStudents",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu1.jpg",
    price: "Free",
    icons: "diversity_1",
  },

  {
    id: 16,
    title: "Scene Interior 01",
    category: "H3DStudents",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu2.jpg",
    price: "Free",
    icons: "diversity_1",
  },

  {
    id: 17,
    title: "Scene Interior 01",
    category: "H3DStudents",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu3.jpg",
    price: "Free",
    icons: "diversity_1",
  },

  {
    id: 18,
    title: "Scene Interior 01",
    category: "Free",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu3.jpg",
    price: "Free",
    icons: "none",
  },

  {
    id: 19,
    title: "Scene Interior 01",
    category: "Tree",
    size: "235mb",
    releaseDate: "Dec 19 2018",
    upload: "Hour",
    img: "./wp-content/uploads/Students/Stu3.jpg",
    price: "Free",
    icons: "none",
  },
];

const btnEl = document.querySelector(".btn_search");
const inputEl = document.querySelector(".form_control");

// Function to display assets based on input array
function displayAssets(assets) {
  const productContainer = $(".MuiGridlist-root");

  if (!productContainer.length) {
    console.error("Product container not found");
    return;
  }

  const displayData = assets
    .map((asset) => {
      return `<li class="Card-template"> 
            <div class="card-header">
                <img src="${asset.img}" alt="">
                <span class="material-icons-sharp">
                                ${asset.icons}
                            </span>
            </div>
            <div class="card-body">
                <div class="card-content">
                    <h2>${asset.title}</h2>
                    <div class="card-size">
                        <p>Size: ${asset.size}</p>
                    </div>
                    <div class="card-uploadname">
                        <p>Upload by: ${asset.upload}</p>
                    </div>
                </div>
                <div class="card-footer">
                    <div></div>
                    <div class="card-download">
                        <p>Read more</p>
                        <span class="material-icons-sharp">
                            expand_more
                        </span>
                    </div>
                </div>
            </div>
        </li>`;
    })
    .join("");

  productContainer.html(displayData);
}

// Function to filter assets based on category
function filterAssets(category) {
  let filteredAssets = assetsData;

  if (category !== "AllAssets") {
    filteredAssets = assetsData.filter((data) => data.category === category);
  }

  displayAssets(filteredAssets);
}

// jQuery document ready function
$(document).ready(function () {
  displayAssets(assetsData);

  $(".sidebar a").on("click", function (e) {
    const category = $(this).data("h3d");
    filterAssets(category);
  });

  $(".submit").on("click", handleSearch);
});

//Search
btnEl.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent the default form submission behavior if btnEl is inside a form

  let searchValue = inputEl.value.trim().toLowerCase(); // Trim and convert input to lowercase for case-insensitive comparison

  if (searchValue !== "") {
    let searchResults = assetsData.filter(function (data) {
      // Check if title or category contains the searchValue
      return (
        data.title.toLowerCase().includes(searchValue) ||
        data.category.toLowerCase().includes(searchValue)
      );
    });

    if (searchResults.length > 0) {
      displayAssets(searchResults);
    } else {
      alert("No matching results found.");
    }

    inputEl.value = "";
  } else {
    alert("Please enter a search term.");
  }
});

// Function to handle search
function handleSearch() {
  let searchValue = inputEl.value.trim().toLowerCase();

  if (searchValue !== "") {
    let searchResults = assetsData.filter(function (data) {
      return (
        data.title.toLowerCase().includes(searchValue) ||
        data.category.toLowerCase().includes(searchValue)
      );
    });

    if (searchResults.length > 0) {
      displayAssets(searchResults);
    } else {
      alert("No matching results found.");
    }

    inputEl.value = "";
  } else {
    alert("Please enter a search term.");
  }
}

// Event listener for the search button click
btnEl.addEventListener("click", handleSearch);

// Event listener for the Enter key press in the input field
inputEl.addEventListener("keypress", function (e) {
  if (e.key === "Enter") {
    e.preventDefault();
    handleSearch();
  }
});
