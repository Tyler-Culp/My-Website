let someObj = {};
let items = JSON.parse(localStorage.getItem("blog-list")) || [];
listItems();

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

function listItems() {
    let blogList = document.getElementById("blogList");
    blogList.innerHTML = "";
    let i = 0;
    for (i; i<items.length; i++) {
        let blogObj = items[i]; 
        let currTitle = blogObj['title'];
        let currDate = blogObj['date'];
        let currSummary = blogObj['summary'];

        let liTag = document.createElement("li");

        liTag.innerHTML = `${currTitle}, ${currDate}: <br> ${currSummary} <button onclick=deleteItem(${i})>Delete</button>`;

        blogList.appendChild(liTag);
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