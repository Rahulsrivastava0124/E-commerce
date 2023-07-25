export const WishListCall = (e, element, props) => {
  if (e.target.classList[0] === "btn") {
    var data = e.target.firstChild.classList[1];
  } else {
    data = e.target.classList[1];
  }

  let ClassData = document.querySelector(`.${data}`);

  if (ClassData.classList.contains("bi-heart")) {
    ClassData.classList.add("bi-heart-fill");
    ClassData.classList.remove("bi-heart");
    props.AddTowishlist({ state: element });
  } else {
    ClassData.classList.remove("bi-heart-fill");
    ClassData.classList.add("bi-heart");
  }

  console.log("WishList", props);
};
