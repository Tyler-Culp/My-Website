let someObj = {};

someObj.alertPressed = function() {
    let Dlog = document.getElementById("dialog");
    Dlog.showModal();
};

someObj.confirmPressed = function () {
    let Dlog = document.getElementById("dialog2");
    Dlog.showModal();

    let outP = document.getElementById('outP');
    outP.innerHTML = `Confirm result: ${didConfirm}`;
    outP.hidden = false
};

someObj.okBtn2Pressed = function() {
    let outP = document.getElementById("outP");
    outP.innerText = "Confirm result: true";
    outP.hidden = false;
}

someObj.cancelBtn2Pressed = function() {
    let outP = document.getElementById("outP");
    outP.innerText = "Confirm result: false";
    outP.hidden = false;
}

someObj.promptBtnPressed = function() {
    let Dlog = document.getElementById("dialog3");
    Dlog.showModal();
}

someObj.cancelBtn3Pressed = function() {
    let Dlog = document.getElementById("dialog3");
    Dlog.close();
    let outP = document.getElementById("outP");
    outP.innerText = "No inputted name :(";
    outP.hidden = false;
}

someObj.okBtn3Pressed = function() {
    let Dlog = document.getElementById("dialog3");
    Dlog.close();
    let inputtedText = document.getElementById("inputtedName");
    let name = inputtedText.value;
    // name = sanitize(name);
    let outP = document.getElementById("outP");
    outP.innerText = `Prompt result: ${name}`;
    outP.hidden = false;
}



window.addEventListener('load', function () {
    let alertBtn = document.getElementById('alertBtn');
    let confirmBtn = document.getElementById('confirmBtn');
    let promptBtn = this.document.getElementById("promptBtn");

    let okBtn2 = this.document.getElementById("okBtn2");
    let cancelBtn2 = this.document.getElementById("cancelBtn2");

    let okBtn3 = this.document.getElementById("okBtn3");
    let cancelBtn3 = this.document.getElementById("cancelBtn3");

    alertBtn.addEventListener('click', someObj.alertPressed, true);
    confirmBtn.addEventListener('click', someObj.confirmPressed, true);
    promptBtn.addEventListener('click', someObj.promptBtnPressed, true);

    okBtn2.addEventListener('click', someObj.okBtn2Pressed, true);
    cancelBtn2.addEventListener('click', someObj.cancelBtn2Pressed, true);

    okBtn3.addEventListener('click', someObj.okBtn3Pressed, true);
    cancelBtn3.addEventListener('click', someObj.cancelBtn3Pressed, true);
});