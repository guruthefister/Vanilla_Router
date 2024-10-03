export const renderAbout = async () => {

    const mpage = document.querySelector("#mainpage");

    if (!mpage) {
        console.error("mainpage element not found.");
        return;
    }

    if (mpage) {
        while (mpage.firstChild) {
            mpage.removeChild(mpage.firstChild);
        }
    }

    const about = document.createElement("div");
    about.id = "about";
    about.textContent = "About";
    mpage.appendChild(about);

        return about;
}