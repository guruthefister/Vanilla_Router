export const renderContact = async () => {

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

    const contact = document.createElement("div");
    contact.id = "contact";
    contact.textContent = "Contact";
    mpage.appendChild(contact);

        return contact;

    
}