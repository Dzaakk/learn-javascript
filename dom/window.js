{
  <p id="content"></p>;
  <p id="location"></p>;

  const content = document.getElementById("content");
  const locationParagraph = document.getElementById("location");

  const height = window.screen.height;
  const width = window.screen.width;
  const url = window.location;

  content.textContent = `Window width : ${width}, heigth : ${height} `;
  locationParagraph.textContent = url;
}
