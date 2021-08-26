function handleAction(type){
    const listItem = document.getElementById("list-container");
    const list = [...listItem.children];
    var i = 0;
    if(type==='shuffle') list.sort(() => Math.random() - 0.5);
    else list.sort((a, b) => a.innerHTML - b.innerHTML);
    while (i < list.length) {
        listItem.appendChild(list[i]);
        ++i;
    }
}