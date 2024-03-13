let isfront = true;

document.querySelector(".front").addEventListener("click", () => {
  if (isfront) {
    document.querySelector(".front").style.display = "none";
    document.querySelector(".back").style.display = "block";
    isfront = false;
  } else {
    document.querySelector(".front").style.display = "none";
    document.querySelector(".back").style.display = "block";
    isfront = true;
  }
});
document.querySelector(".back").addEventListener("click", () => {
  if (isfront) {
    document.querySelector(".back").style.display = "none";
    document.querySelector(".front").style.display = "block";
    isfront = true;
  } else {
    document.querySelector(".back").style.display = "none";
    document.querySelector(".front").style.display = "block";
    isfront = false;
  }
});
