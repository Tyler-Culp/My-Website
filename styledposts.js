let someObj = {};
let items = JSON.parse(localStorage.getItem("blog-list")) || [];
listItems();
resetLook();

function addItem() {

    let titleInput = document.getElementById("titleInput").value;
    let summaryInput = document.getElementById("summaryInput").value;

    if (titleInput === "" || summaryInput === ""){
        return alert("Must fill in all fields");
    }

    items.push({
        title: titleInput,
        date: new Date().toLocaleDateString("en-US"),
        summary: summaryInput
    });

    localStorage.setItem("blog-list", JSON.stringify(items));

    listItems();

    titleInput.value = "";
    summaryInput.value = "";
}

function deleteItem(index) {
    items.splice(index, 1);
    localStorage.setItem("blog-list", JSON.stringify(items));
    listItems();
}

function editItem(index) {
    let editItem = items[index];
    let dLog = document.getElementById("dialog");
    dLog.showModal();
    let titleInput = document.getElementById("titleInput")
    let summaryInput = document.getElementById("summaryInput");

    titleInput.value = editItem['title'];
    summaryInput.value = editItem['summary'];

    items.splice(index, 1);
    localStorage.setItem("blog-list", JSON.stringify(items));
}

function listItems() {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = "";
    let i = 0;
    for (i; i < items.length; i++) {
        let blogObj = items[i]; 
        let currTitle = blogObj['title'];
        let currDate = blogObj['date'];
        let currSummary = blogObj['summary'];

        let liTag = document.createElement("li");

        liTag.innerHTML = `${currTitle}, ${currDate}: <br> ${currSummary} <br>`;
        let editBtn = document.createElement("button");
        let deleteBtn = document.createElement("button");

        editBtn.setAttribute(`onclick`, `editItem(${i})`);
        editBtn.setAttribute(`class`, `editBtns`);
        editBtn.textContent = `Edit`;

        deleteBtn.setAttribute(`onclick`, `deleteItem(${i})`);
        deleteBtn.setAttribute(`class`, `deleteBtns`);
        deleteBtn.textContent = `Delete`;

        liTag.appendChild(editBtn);
        liTag.appendChild(deleteBtn);


        blogList.appendChild(liTag);
        resetLook();
    }
}

someObj.postBtnPressed = function() {
    let dLog = document.getElementById("dialog");
    dLog.showModal();
}


window.addEventListener('load', function() {
    let postBtn = this.document.getElementById("postBtn");
    let submitBtn = this.document.getElementById("submitBtn");

    postBtn.addEventListener('click', someObj.postBtnPressed, true);
    submitBtn.addEventListener('click', someObj.submitBtnPressed, true);
});


function resetLook() {
    let editBtns = document.getElementsByClassName("editBtns");
    let deleteBtns = document.getElementsByClassName("deleteBtns");

    let firstHeader = document.getElementById("header");

    firstHeader.style.display = "flex";
    firstHeader.style.justifyContent = "center";
    firstHeader.style.fontSize = "4rem";
    firstHeader.style.padding = ".5rem";

    let allElements = document.querySelector("*");
    allElements.style.fontSize = "1rem";
    allElements.style.fontFamily = "Sans-serif, Serif";

    let wholeList = document.getElementById("blogList");

    wholeList.style.background = "white";
    wholeList.style.maxWidth = "40rem";
    wholeList.style.marginLeft = "auto";
    wholeList.style.marginRight = "auto";

    let listElements = document.getElementsByTagName("li");

    for (i = 0; i < listElements.length; i++) {
        listElements[i].style.background = 'white';
        listElements[i].style.padding = '1rem';
        listElements[i].style.maxWidth = '40rem';

        //let horizontalLine = document.createElement("hr");
        listElements[i].appendChild(horizontalLine);
    }

    for (i = 0; i < editBtns.length; i++){
        deleteBtns[i].style.background = 'red'
        editBtns[i].style.background = 'yellow'
    }
}