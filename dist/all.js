const tabItems=document.querySelectorAll(".tab-item"),tabContentItems=document.querySelectorAll(".tab-content-item"),fas=document.querySelectorAll(".fas");function selectItem(e){removeBorder(),removeShow(),this.classList.add("tab-border");document.querySelector(`#${this.id}-content`).classList.add("show")}function removeBorder(){tabItems.forEach((e=>e.classList.remove("tab-border")))}function removeShow(){tabContentItems.forEach((e=>e.classList.remove("show")))}tabItems.forEach((e=>e.addEventListener("click",selectItem)));
//# sourceMappingURL=all.js.map