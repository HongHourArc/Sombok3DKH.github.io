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

const productContainer = document.querySelector(".MuiGridlist-root");
const linksEl = document.querySelectorAll(".sidebar a"); // Changed selector to target by class name
const btnEl = document.querySelector(".submit"); // Changed the selector for the button
const input = document.querySelector(".search-input"); // Changed the selector for the input

// Display all dynamic data
window.addEventListener("DOMContentLoaded", () => {
  displayAssets(assetsData);
  //console.log(displayData);

  // Your existing code for linksEl remains the same before this point

  linksEl.forEach((link) => {
    link.addEventListener("click", (e) => {
      const category = e.target.dataset.h3d;
      console.log("Clicked category:", category); // Check the value of the extracted category

      const assetsCategory = assetsData.filter(
        (data) => data.category === category
      );
      console.log("Filtered assets:", assetsCategory); // Check the filtered assets

      if (category === "AllAssets") {
        displayAssets(assetsData);
      } else {
        displayAssets(assetsCategory);
      }
    });
  });

  // Event listener for button click
  btnEl.addEventListener("click", () => {
    // Handle button click event here
    // For example, perform a search based on the input value
    const searchTerm = input.value.trim();
    const filteredAssets = assetsData.filter((data) =>
      data.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayAssets(filteredAssets);
  });
});

// Rest of your code remains the same

function displayAssets(assets) {
  let displayData = assets.map(function (cat_items) {
    return `<li class="Card-template"> 
            <div class="card-header">
                <img src="${cat_items.img}" alt="">
            </div>
            <div class="card-body">
                <div class="card-content">
                    <h2>${cat_items.title}</h2>
                    <div class="card-size">
                        <p>Size: ${cat_items.size}</p>
                    </div>
                    <div class="card-uploadname">
                        <p>Upload by: ${cat_items.upload}</p>
                    </div>
                    
                </div>
                <div class="card-footer">
                    <div>
                    </div>
                    <div class="card-download">
                        <p>Read more</p>
                        <span class="material-icons-sharp">
                            expand_more
                        </span>
                    </div>
                </div>
            </div>
        </li>`;
  });
  displayData = displayData.join("");
  productContainer.innerHTML = displayData;
}

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
