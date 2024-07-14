function editElement(el,match,replace) {
    let content = el.textContent;
    el.textContent = content.split(match).join(replace);
}