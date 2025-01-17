const imageInput = document.getElementById("fileInput");
const extractText = document.getElementById("extract-text");
const images = document.getElementById('images')
const text = document.getElementById('text')
const extractImage = () => {
  const imageFile = imageInput.files[0];
  if (imageFile) {
    Tesseract.recognize(imageFile, "eng")
      .then(({ data }) => {
        extractText.innerText = data.text;
      })
      .catch((err) => {
        console.error("Error", err);
        extractText.innerText = ` ${err}`;
      });
  } else {
    extractText.innerHTML = "<span class='text-red-600'>!! Please select an image</span>";
  }
};

imageInput.addEventListener('change', () => {
    let imageLink = URL.createObjectURL(imageInput.files[0])
    images.classList.remove('hidden')
    text.classList.remove('hidden')
    images.style.backgroundImage = `url(${imageLink})`
})
