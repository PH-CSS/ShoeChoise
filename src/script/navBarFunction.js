class Navbar {
    constructor(menu, navList, navLinks){
        this.menu = document.querySelector(menu);
        this.navList = document.querySelector(navList);
        this.navLinks = document.querySelectorAll(navLinks);
        this.activeClass = "active";
        this.handleClick = this.handleClick.bind(this)
    }

    animateLink() {
        this.navLinks.forEach((link, index) => {
            link.style.animation
            ?(link.style.animation = "")
            :(link.style.animation = `navLinkFrame 0.5s ease forwards  ${index / 7 + 0.3}s`);
        });
    }

    handleClick(){
        this.navList.classList.toggle(this.activeClass);
        this.menu.classList.toggle(this.activeClass);
        this.animateLink();
    }

    addClickEvent(){
        this.menu.addEventListener("click" , this.handleClick);
    }

    init(){
        if (this.menu) {
            this.addClickEvent();
        }
        return this;
    }
}

const navBar = new Navbar(
    ".menu",
    ".nav-list",
    ".nav-list li",
);

    navBar.init();