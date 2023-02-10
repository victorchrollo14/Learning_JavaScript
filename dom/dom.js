
// Adding and Deleting Elements and text

// document.createElement(element)	    Create an HTML element
// document.removeChild(element)	    Remove an HTML element
// document.appendChild(element)	    Add an HTML element
// document.replaceChild(new, old)	    Replace an HTML element
// document.write(text)	                Write into the HTML output stream
// element.setAttribute()               adds an attribute to html element

// events references https://www.w3schools.com/jsref/dom_obj_event.asp
// Tip: To get the size of an element, use the 
// clientWidth, clientHeight, innerWidth, innerHeight, outerWidth, outerHeight, offsetWidth and/or offsetHeight properties.


// methods to Selecting elements
// querySelector(), querySelectorAll(), getElementById(), getElementsByTagName()


// changing the style of an element
const heading = document.getElementById("heading");
heading.style.color = "red";


// methods to change html elements
// element.innerHTML =  new html content	Change the inner HTML of an element
// element.attribute = new value	        Change the attribute value of an HTML element
// element.style.property = new style	    Change the style of an HTML element
// element.setAttribute(attribute, value)	Change the attribute value of an HTML element


// events and eventListners
// most common events - click, mouseover, keydown


// Tree traversal methods
// children, childNodes, firstChild, firstElementChild, 
// lastElementChild, lastChild, nextElementSibling, previousElementSibling


const main = document.querySelector('.main');
const newSecond = document.querySelector('.secondgendup');
const newSecond1 = newSecond;


let chNodes = main.childNodes;
console.log(chNodes);            // childNodes - includes text element

let children = main.children;
console.log(children);              // children - only returns the elements.

const isParent = main.hasChildNodes();     // checks whether the main has child nodes
console.log(isParent);

const firstChild = main.firstChild;         // returns the first child of main.
console.log(firstChild);                  

const firstChildEle = main.firstElementChild;   // returns the first child element of main.
console.log(firstChildEle);    

const lastChild = main.lastChild;                    // reutuns the last child of main.
console.log(lastChild);

const lastChildEle = main.lastElementChild;             // returns the last child element.
console.log(lastChildEle);

const secondChildEle = firstChildEle.nextElementSibling;     // returns the nextElement after firstElementChild
console.log(secondChildEle);


const childOne = lastChildEle.children[0].children[0];
console.log(childOne);

childOne.replaceWith(newSecond);        // replace a node with another node

const firstgenChild = lastChildEle.children[1];
firstgenChild.replaceChildren(newSecond, firstgenChild.children[1]);        // replace the childElement with another childElement

const totalChild = main.childElementCount;        // returns the total number of children
console.log(totalChild);

const newChild = document.createElement('div');
newChild.innerHTML = "New child";                       // adds a new child
main.appendChild(newChild);

main.removeChild(newChild);                     // removes a child element;
