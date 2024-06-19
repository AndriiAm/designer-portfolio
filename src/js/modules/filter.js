const filter = () => {
    const triggers = document.querySelectorAll(".triggers__item");
    const blocks = document.querySelectorAll(".library__block");

    function filterContent(triggerType, structure) {
        structure.forEach(item => {
            if (item.dataset.type === triggerType) {
                item.classList.remove("hide");
                item.classList.add("active");
            } else {
                item.classList.remove("active");
                item.classList.add("hide")
            }
        })
    }

    filterContent("italy", triggers);
    filterContent("italy", blocks);

    triggers.forEach(trigger => {
        trigger.addEventListener("click", (e) => {
            const type = e.target.dataset.type;
            filterContent(type, triggers);
            filterContent(type, blocks)
        })
    })
}

export default filter;