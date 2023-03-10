const navBar = document.querySelector("#hamburger");
const aside = document.querySelector('.mob-nav');
const cancel = document.querySelector('.cross');
console.log(navBar)
console.log(aside)

const showNav = (e) =>{
    aside.style.right = "0px";
}

const hideNav = (e) => {
    aside.style.right = "-50%";
}
cancel.addEventListener('click', hideNav)

navBar.addEventListener('click', showNav)

