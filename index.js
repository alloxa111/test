var ul = document.querySelector("ul");

ul.addEventListener("click", function(event) {
    if (event.target.localName !=="li") return;
    console.log(event.target.inner.HTML);
});
    