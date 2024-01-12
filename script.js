const dogsUrl = "https://dog.ceo/api/breeds/image/random/10";
const catsUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const catsDiv = document.getElementById("catsDiv");
const btnCats = document.querySelector(".cats");

const getCatsImgs = function () {
  fetch(catsUrl)
    .then((response) => response.json())
    .then((data) => {
      data.forEach((element) => {
        const image = document.createElement("img");
        image.src = element.url;
        catsDiv.append(image);
      });
    });
};

btnCats.addEventListener("click", getCatsImgs);
