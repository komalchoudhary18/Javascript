// Create first element
const newElement = document.createElement("h2");
newElement.innerText = "This is created by JS";
newElement.id = "second";
document.body.appendChild(newElement); // append to body

// Create another element
const newElement2 = document.createElement("h3");
newElement2.textContent = "This is created by JS using textContent";
newElement2.id = "third";
document.body.appendChild(newElement2);

// Add classes
newElement2.className = "newClass"; // replaces existing class
newElement2.classList.add("class1", "class2"); // adds multiple classes

// Create a new list item
const list = document.createElement("li");
list.textContent = "item 4";

const unorderedList = document.getElementById("list");
unorderedList.appendChild(list);

// Add multiple items from array
const arr = ["milk", "eggs", "bread", "butter"];
const ul = document.getElementById("li");

for (let item of arr) {
  const listItem = document.createElement("li");
  listItem.textContent = item;
  ul.appendChild(listItem);
}
 // this is not a good practice to add multiple items one by one it will take more time

// better approach is to use document fragment

const fragment = document.createDocumentFragment();
for (let item of arr) {
    const listItem = document.createElement("li");
    listItem.textContent = item;
    fragment.appendChild(listItem);
}
ul.appendChild(fragment);
// it will take less time because it will create all items in memory and then append to DOM at once