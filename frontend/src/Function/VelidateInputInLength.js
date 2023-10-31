export const velidateInput = (target, velidLength) => {
  if (target.value.length < velidLength) {
    target.classList.add("border-danger");
    target.classList.contains("border-success")
      ? target.classList.remove("border-success")
      : null;
  } else if (target.value.length >= velidLength) {
    target.classList.add("border-success");
    target.classList.contains("border-danger")
      ? target.classList.remove("border-danger")
      : null;
  }
};
