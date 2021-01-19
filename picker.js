function changImage(id){
    let imagePath = document.getElementById(id).getAttribute("src");

    let mainImage = document.getElementById("mainImage").setAttribute("src", imagePath);
}