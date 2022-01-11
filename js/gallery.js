let arr3 = [];

function gallery() {
  const pictureInnerContainer = document.querySelector(
    ".picture-inner-container"
  );
  let arr = [];
  for (let i = 1; i <= 15; i++) {
    let img = `<img class="gallery-img img-none" src="assets/img/gallery/galery${i}.jpg"  alt="galery${i}">`;
    arr.push(img);
  }
  // pictureInnerContainer.innerHTML = shuffle(arr);
  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }
  let arr2 = shuffle(arr);
  arr2.forEach((elem) => {
    pictureInnerContainer.insertAdjacentHTML("afterbegin", elem);
    // i == 0 || i == 10 ? elem.classList.add("custom-padding") : null;
  });
}

gallery();
const galleryImg = document.querySelectorAll(".gallery-img");

arr3 = [
  galleryImg[0],
  galleryImg[5],
  galleryImg[10],
  galleryImg[1],
  galleryImg[6],
  galleryImg[11],
  galleryImg[2],
  galleryImg[7],
  galleryImg[12],
  galleryImg[3],
  galleryImg[8],
  galleryImg[13],
  galleryImg[4],
  galleryImg[9],
  galleryImg[14],
];

window.addEventListener("scroll", () => {
  if (
    galleryImg[10].getBoundingClientRect().left != 240 &&
    galleryImg[11].getBoundingClientRect().left != 240
  ) {
    if (
      galleryImg[10].getBoundingClientRect().left ==
      galleryImg[11].getBoundingClientRect().left
    ) {
      galleryImg[10].classList.add("padding-top");
    } else {
      galleryImg[11].classList.add("padding-top");
    }
  }
});
setTimeout(() => {
  if (
    galleryImg[10].getBoundingClientRect().left != 240 &&
    galleryImg[11].getBoundingClientRect().left != 240
  ) {
    if (
      galleryImg[10].getBoundingClientRect().left ==
      galleryImg[11].getBoundingClientRect().left
    ) {
      galleryImg[10].classList.add("padding-top");
    } else {
      galleryImg[11].classList.add("padding-top");
    }
  }
}, 500);

const wrap = document.querySelector(".picture-inner-container");
window.addEventListener("scroll", (e) => {
  let variable;
  window.innerWidth > 1100 ? (variable = 5000) : (variable = 4000);
  let b = window.scrollY + window.innerHeight;
  if (b > variable && b < 7000) {
    arr3.forEach((el, i) => {
      setTimeout(() => {
        el.classList.remove("img-none");
      }, 300 * (i + 1));
    });
  } else {
    galleryImg.forEach((el) => {
      setTimeout(() => {
        el.classList.add("img-none");
      });
    }, 1000);
  }
});
