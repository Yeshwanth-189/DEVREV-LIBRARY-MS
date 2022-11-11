let products = {
  data: [
    {
      productName: "Atomic Habits",
      category: "science",
      author:"james",
      price: "30",
      year:"2022",
      image: "img-1.jpg",
    },
    {
      productName: "The Heart is a Lonely Hunter",
      category: "novel",
      author:"mary",
      price: "49",
      year:"2022",
      image: "img-2.jpg",
    },
    {
      productName: "The Oath of the Vayuputras",
      category: "adventure",
      author:"carl",
      price: "99",
      year:"2020",
      image: "img-3.jpg",
    },
    {
      productName: "Madhouse at the End of Earth",
      category: "adventure",
      author:"james",
      price: "29",
      year:"2021",
      image: "img-4.jpg",
    },
    {
      productName: "Woman on Fire",
      category: "novel",
      author:"mary",
      price: "129",
      year:"2022",
      image: "img-5.jpg",
    },
    {
      productName: "The Tobacco Wives",
      category: "science",
      author:"mary",
      price: "89",
      year:"2021",
      image: "img-6.jpg",
    },
    {
      productName: "The Library of the Dead",
      category: "adventure",
      author:"carl",
      price: "189",
      year:"2021",
      image: "img-7.jpg",
    },
    {
      productName: "The Last Queen",
      category: "novel",
      author:"james",
      price: "49",
      year:"2020",
      image: "img-8.jpg",
    },
    {
      productName: "Popular Science",
      category: "science",
      author:"carl",
      price: "49",
      year:"2020",
      image: "img-9.jpg",
    },
  ],
};

for (let i of products.data) {
  //Create Card
  let card = document.createElement("div");
  //Card should have category and should stay hidden initially
  card.classList.add("card", i.category, "hide");
  card.classList.add("card", i.year, "hide");
  card.classList.add("card", i.author, "hide");
  //image div
  let imgContainer = document.createElement("div");
  imgContainer.classList.add("image-container");
  //img tag
  let image = document.createElement("img");
  image.setAttribute("src", i.image);
  imgContainer.appendChild(image);
  card.appendChild(imgContainer);
  //container
  let container = document.createElement("div");
  container.classList.add("container");
  //product name
  let name = document.createElement("h5");
  name.classList.add("product-name");
  name.innerText = i.productName.toUpperCase();
  container.appendChild(name);
  //price
  let price = document.createElement("h6");
  price.innerText = "$" + i.price;
  container.appendChild(price);

  card.appendChild(container);
  document.getElementById("products").appendChild(card);
}

//parameter passed from button (Parameter same as category)
function filterProduct(value) {
  //Button class code
  let buttons = document.querySelectorAll(".button-value");
  buttons.forEach((button) => {
    //check if value equals innerText
    if (value.toUpperCase() == button.innerText.toUpperCase()) {
      button.classList.add("active");
    } else {
      button.classList.remove("active");
    }
  });

  //select all cards
  let elements = document.querySelectorAll(".card");
  //loop through all cards
  elements.forEach((element) => {
    //display all cards on 'all' button click
    if (value == "all") {
      element.classList.remove("hide");
    } else {
      //Check if element contains category class
      if (element.classList.contains(value)) {
        //display element based on category
        element.classList.remove("hide");
      } else {
        //hide other elements
        element.classList.add("hide");
      }
    }
  });
}

//Search button click
document.getElementById("search").addEventListener("click", () => {
  //initializations
  let searchInput = document.getElementById("search-input").value;
  let elements = document.querySelectorAll(".product-name");
  let cards = document.querySelectorAll(".card");

  //loop through all elements
  elements.forEach((element, index) => {
    //check if text includes the search value
    if (element.innerText.includes(searchInput.toUpperCase())) {
      //display matching card
      cards[index].classList.remove("hide");
    } else {
      //hide others
      cards[index].classList.add("hide");
    }
  });
});
//Initially display all products
window.onload = () => {
  filterProduct("all");
};
