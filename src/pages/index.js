import data from "./data.json"

export const renderHome = async () => {
    const mpage = document.querySelector("#mainpage");

    if (!mpage) {
        console.error("mainpage element not found.");
        return;
    }

    while (mpage.firstChild) {
        mpage.removeChild(mpage.firstChild);
    }

    const title = document.createElement("h1");
    title.textContent = "A story about anything...";
    title.id = "title";
    mpage.appendChild(title);

    const index = document.createElement("div");
    index.id = "image-container";

    data.content.forEach(element => {
        const imgWrapper = document.createElement("div");
        imgWrapper.id = "image-wrapper";

        const img = document.createElement("img");
        img.src = element.image;
        img.id = "styled-image";

        const caption = document.createElement("p");
        caption.textContent = element.text;
        caption.id = "image-caption";

        imgWrapper.appendChild(img);
        imgWrapper.appendChild(caption);
        index.appendChild(imgWrapper);
    });

    mpage.appendChild(index);
};