import { route } from "./router";

class Initialize {

  constructor() {

    const app = document.createElement("div");
    app.id = "app";
    document.body.appendChild(app);

    const nav = document.createElement("nav");
    nav.id = "main-nav";
    app.appendChild(nav);

    const mainpage = document.createElement("section");
    mainpage.id = "mainpage";
    app.appendChild(mainpage);

    const links = [
      { text: 'Home', href: '/' },
      { text: 'About', href: '/about' },
      { text: 'Contact', href: '/contact' }
    ];

    links.forEach(link => {
      const a = document.createElement('a');
      a.textContent = link.text;
      a.href = link.href;
      a.addEventListener('click', route);
      nav.appendChild(a);
    });

  } // END constructor
} // END class

export default Initialize;