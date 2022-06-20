main = (first, second) =>{
    const createElement = document.createElement(first);

    createElement.textContent = second;
    document.body.appendChild(createElement);
}

main('h1',"Hello World");
main('p',"Welcome to programming")