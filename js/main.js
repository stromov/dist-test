const nativeSel = document.getElementsByClassName("select-native")[0];
const customSel = document.getElementsByClassName("select-custom")[0];
const customBlock = customSel.children[0];
const customParams = customSel.children[1];
const customOptsList = Array.from(customParams.children);

//Переключение кастомного селекта
customBlock.addEventListener("click", (e) => {
    const isClosed = !customSel.classList.contains("isActive");
    if (isClosed) {
        openCustomSel();
    } else {
        closeCustomSel();
    }
});

// Открытие/закрытие кастомного селекта
function openCustomSel() {
    customSel.classList.add("isActive");
    document.addEventListener("click", closeOutsideWindow);
}
// Закрытие кастомного селекта
function closeCustomSel() {
    customSel.classList.remove("isActive");
}
// Изменение текста выбора селекта
function overwriteSelectionText(value, text) {
    customBlock.textContent = text;
}

// Закрытие селекта вне окна
function closeOutsideWindow() {
    const click = !customSel.contains(event.target);
    if (click) {
        closeCustomSel();
    }
}

// Перезаписать кастомный селект при выборе нативного
customOptsList.forEach(function (elOption) {
    elOption.addEventListener("click", (event) => {
        const value = event.target.getAttribute("data-value");
        nativeSel.value = value;
        overwriteSelectionText(value, event.target.textContent);
        closeCustomSel();
    });
});