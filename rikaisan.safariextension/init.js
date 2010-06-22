function init() {
    var theBody = document.body ;
    // create a para and insert it at the top of the body
    var element = document.createElement("p");
    var element2 = document.createElement("div");
    element2.id = "test";
    element.id = "magpie";
    element.style = "float:right; color:red; font-size: 16pt";
    element.textContent = "New Element.";
    element.textContent = "This is element 2.";
    theBody.insertBefore(element2, theBody.firstChild);
}