/**
 * Eksempel 1
 * Tilføjer/fjerner en css klasse med større skrifttype til alle elementer
 * Benytter metoden addEventListener til at lytte på et onclick event på knappen
 */
document.getElementById('example1').addEventListener('click', function () {
  //Henter array med alle child elementer til #contentarea
  let elements = document.querySelectorAll('#contentarea *');
  //Lopper array med elementer
  for (let i = 0; i < elements.length; i++) {
    //Tilføj klassen tx-big hvis den ikke eksisterer i et elements classList
    if (!elements[i].classList.contains('tx-big')) {
      elements[i].classList.add('tx-big');
    } else {
      //Ellers fjern klassen hvis den eksisterer i elementets classList
      elements[i].classList.remove('tx-big');
    }
  }
});

/**
 * Eksempel 2
 * Toggler en css klasse med større skrifttype til alle elementer
 * Anvender onclick metode direkte på getElementById metoden
 * Anvender forEach metode til at loope array med
 */
document.getElementById('example2').onclick = function () {
  //Henter array med alle child elementer til #contentarea og kører en foreach på arrayet
  document.querySelectorAll('#contentarea *').forEach(function (element) {
    //Toggler class tx-big til elementernes classList
    element.classList.toggle('tx-big');
  });
};

// example 3 chance h1 to yap yap yaap
document.getElementById('example3').onclick = function () {
  // ændrer tekst inholdet i h1 til "Hello World"
  let h1 = document.querySelector('#contentarea h1');
  h1.innerHTML = 'Yap Yap Yapp';
};

// example 4 toggle color of all paragraphs between red and default
document.getElementById('example4').onclick = () => {
  let paragraphs = document.querySelectorAll('p');
  paragraphs.forEach((element) => {
    element.style.color = element.style.color === 'red' ? '' : 'red';
  });
};

// example 5 rotate all li tags
document.getElementById('example5').onclick = () => {
  let listItems = document.querySelectorAll('ol li, ul li');
  listItems.forEach((element) => {
    element.style.transform = 'rotate(45deg)';
  });
};

// example 6 hide all h tags
document.getElementById('example6').onclick = () => {
  let headings = document.querySelectorAll('h1, h2, h3, h4, h5, h6');
  headings.forEach((element) => {
    element.style.display = 'none';
  });
};

// example 7 chance font famaly for links
document.getElementById('example7').onclick = () => {
  let links = document.querySelectorAll('a');
  links.forEach((element) => {
    element.style.fontFamily = 'helvetica, sans-serif';
  });
};

// example 8 new li element after nr 5
document.getElementById('example8').onclick = () => {
  let listItems = document.querySelectorAll('ol li');
  let newLi = document.createElement('li');
  newLi.textContent = 'New List Item';
  listItems[4].after(newLi);
};

// example 9 chance color for each other li element
document.getElementById('example9').onclick = () => {
  let listItems = document.querySelectorAll('ol li, ul li');
  listItems.forEach((element, index) => {
    element.style.color = index % 2 === 0 ? 'blue' : 'green';
  });
};

// example 10 swap position of ol and ul
document.getElementById('example10').onclick = () => {
  const contentArea = document.getElementById('contentarea');
  const ol = contentArea.querySelector('ol');
  const ul = contentArea.querySelector('ul');

  // Sørg for at begge lister findes
  if (!ol || !ul) return;

  const olNext = ol.nextSibling;
  const ulNext = ul.nextSibling;

  const olClone = ol.cloneNode(true);
  const ulClone = ul.cloneNode(true);

  // Erstat originalerne med hinandens kloner
  contentArea.replaceChild(ulClone, ol);
  contentArea.replaceChild(olClone, ul);
};

// example 11 animation for li tags to fly in from left using existing css animation
document.getElementById('example11').onclick = () => {
  let listItems = document.querySelectorAll('ol li, ul li');
  listItems.forEach((element) => {
    element.classList.add('fly-in');
  });
};

// Ensure the CSS for the 'fly-in' animation is included
const style = document.createElement('style');
style.innerHTML = `
    @keyframes flyInFromLeft {
        from {
            transform: translateX(-100%);
            opacity: 0;
        }
        to {
            transform: translateX(0);
            opacity: 1;
        }
    }
    .fly-in {
        animation: flyInFromLeft 0.5s ease-out forwards;
    }
`;
document.head.appendChild(style);

// example 12 click here to hide or show the other buttons
document.getElementById('example12').onclick = function () {
  let buttons = document.querySelectorAll('#contentarea button:not(#example12)');
  buttons.forEach((button) => {
    button.style.display = button.style.display === 'none' ? '' : 'none';
  });
};
