(() => {
  window.addEventListener("DOMContentLoaded", onHashChange)
  window.addEventListener("hashchange", onHashChange)

  function onHashChange() {
    const indexPage = getById("indexPage")
    const adsContainer = getById("noticeContainer")
    const errorPage = getById("errorPage")

    let page = location.hash.slice(1);

    switch (page) {
      case"":
      case "index":
        indexPage.style.display = "block";
        adsContainer.style.display = "none";
        errorPage.style.display = "none"
        break;

      case "advertisments":
        indexPage.style.display = "none";
        adsContainer.style.display = "block";
        errorPage.style.display = "none"
        break;

      default:
        indexPage.style.display = "none";
        adsContainer.style.display = "none";
        errorPage.style.display = "block"
    }
  }

  function printCategories(categories) {

    let categoriesContainer = getById("categoriesContainer");

    for (let i = 0; i < categories.length; i++) {
      let currentCategory = categories[i];
      let categoryCard = createElement("div");

      categoryCard.className = "category-card";

      let imageContainer = createElement("div");

      imageContainer.style.backgroundColor = currentCategory['background-color'];
      imageContainer.className = "image-container"

      let categoryImage = createElement("img");

      categoryImage.src = currentCategory.image;

      let description = createElement("p", currentCategory.title);

      description.className = "title";
      imageContainer.append(categoryImage);
      categoryCard.append(imageContainer, description);
      categoriesContainer.append(categoryCard);

      categoryCard.addEventListener("click", function(){
        location.hash = "#advertisments"
        // TO DO Use functions to filter and print in the container
      })
    }
  }

  printCategories(categories);


})()