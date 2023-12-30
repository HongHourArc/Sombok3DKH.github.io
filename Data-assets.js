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
  },
];

const btnEl = document.querySelector(".submit");
const inputEl = document.querySelector(".search-input");

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

// Function to handle search button click
function handleSearch() {
  const searchTerm = $(".search-input").val().trim().toLowerCase();

  const filteredAssets = assetsData.filter((data) =>
    data.title.toLowerCase().includes(searchTerm)
  );

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

// Search
btnEl.addEventListener("click", (e) => {
  let searchValue = inputEl.value.trim(); // Trim to remove leading/trailing spaces

  if (searchValue !== "") {
    let searchCategory = assetsData.filter(function (data) {
      // Check for matching title or category using lowercase for case-insensitive search
      return (
        data.title.toLowerCase().includes(searchValue.toLowerCase()) ||
        data.category.toLowerCase().includes(searchValue.toLowerCase())
      );
    });

    if (searchCategory.length > 0) {
      // Check if filtered array has items
      displayAssets(searchCategory);
    } else {
      alert("No matching results found.");
    }

    inputEl.value = ""; // Reset input after search
  } else {
    alert("Please enter a search term.");
  }
});
