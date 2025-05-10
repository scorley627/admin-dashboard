document.addEventListener("DOMContentLoaded", handleDOMContentLoaded);

function handleDOMContentLoaded() {
  const searchBar = document.querySelector("input[type='search']");
  searchBar.addEventListener("invalid", handleSearchBarInvalid);
}

function handleSearchBarInvalid(event) {
  event.preventDefault();
}
