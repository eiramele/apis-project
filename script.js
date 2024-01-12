const dogsUrl = "https://dog.ceo/api/breeds/image/random/10";
const catsUrl = "https://api.thecatapi.com/v1/images/search?limit=10";

const dogsDiv = document.querySelector(".dogsDiv");
const btnDogs = document.querySelector(".dogs");

const getDogsImgs = function () {
  fetch(dogsUrl)
    .then((response) => response.json())
    .then((data) => {
      data.message.forEach((element) => {
        const image = document.createElement("img");
        image.src = element;
        dogsDiv.append(image);
      });
    });
};

btnDogs.addEventListener("click", getDogsImgs);
