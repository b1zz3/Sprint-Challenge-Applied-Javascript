// STEP 1: Create a header component.
// -----------------------
// Using a function create the component you see below:
//
//  <div class="header">
//    <span class="date">SMARCH 28, 2019</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div >
// And add it to the DOM in the .header-container component

function Header() {
    
    // create elements
    const newHead = document.createElement('div');
    const date = document.createElement('span');
    const heading = document.createElement('h1');
    const temp = document.createElement('span');

    // assign content
    date.textContent = 'MARCH 28, 2019';
    heading.textContent = 'Lambda Times';
    temp.textContent = '98°';

    // add classes
    newHead.classList.add('header');
    date.classList.add('date');
    temp.classList.add('temp');

    // parent child relationship
    newHead.appendChild(date);
    newHead.appendChild(heading);
    newHead.appendChild(temp);

    return newHead;

};

// select entry point and add
const headerEntry = document.querySelector('.header-container');
headerEntry.appendChild(Header());