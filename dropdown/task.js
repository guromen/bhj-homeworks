document.addEventListener("DOMContentLoaded", () => {
    const dropdown = document.querySelector(".dropdown");
    const dropdownValue = dropdown.querySelector(".dropdown__value");
    const dropdownList = dropdown.querySelector(".dropdown__list");
    const dropdownItems = dropdown.querySelectorAll(".dropdown__item");

    dropdownValue.addEventListener("click", () => {
        dropdownList.classList.toggle("dropdown__list_active");
    });

    dropdownItems.forEach(item => {
        item.addEventListener("click", event => {
            event.preventDefault();
            dropdownValue.textContent = item.textContent.trim();
            dropdownList.classList.remove("dropdown__list_active");
        });
    });
});