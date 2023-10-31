export const Rating=(data)=>{
    let rating = data.toString().split(".");
    let dec = `0.${rating[1]}`;
    let decRating = parseFloat(dec).toFixed();
    var rateArray = ["", "", "", "", ""];
    for (var i = 0; i < Number(rating[0]); i++) {
      rateArray[i] = "-fill";
    }
    if (decRating === "1") {
      rateArray[i] = "-half";
    }
    return rateArray;
}