export const InputEditEnableAndDisable=(e)=>{
    if (e.target.classList.contains("bi-x-lg")) {
        e.target.parentElement.previousSibling.setAttribute("disabled", "");
        e.target.classList.remove("bi-x-lg");
        e.target.classList.add("bi-pen-fill");
      } else if (e.target.classList.contains("btn")) {
        let ItemData = e.target.children[0].classList;
        if (e.target.children[0].classList.contains("bi-pen-fill")) {
          e.target.previousSibling.removeAttribute("disabled");
          ItemData.add("bi-x-lg");
          ItemData.remove("bi-pen-fill");
        } else {
          e.target.previousSibling.setAttribute("disabled", "");
          ItemData.remove("bi-x-lg");
          ItemData.add("bi-pen-fill");
        }
      } else {
        if (e.target.classList.contains("bi")) {
          e.target.parentElement.previousSibling.removeAttribute("disabled");
          e.target.classList.add("bi-x-lg");
          e.target.classList.remove("bi-pen-fill");
        } else {
          e.target.previousSibling.removeAttribute("disabled");
          e.target.children[0].classList.add("bi-x-lg");
          e.target.children[0].classList.remove("bi-pen-fill");
        }
      }
}