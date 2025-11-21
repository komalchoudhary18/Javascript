const newElement = document.createElement("h2");
newElement.textContent = "This is created by JS in second file";
newElement.id = "secondFile";

const element=document.getElementById("first");

element.after(newElement);

const newElement2 = document.createElement("h3");
newElement2.textContent = "This is created by JS using textContent in second file";
newElement2.id = "thirdFile";
newElement2.className = "newClassSecondFile"; // replaces existing class

element.before(newElement2)