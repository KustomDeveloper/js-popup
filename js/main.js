
(() => {
// Directory paths
const imagesDirectory = '/wp-content/plugins/magistrate-page-popups/images';

// Create Containers
const popupContainer = document.createElement("div");
const popupContent = document.createElement("div");
const mainContent = document.createElement("p");

// Create Elements
const popupImage = document.createElement("div");
const mainLogo = document.createElement("img");
const popupFader = document.createElement("div");
const closeBtn = document.createElement("a"); 
const phoneText = document.createElement("span");
const phoneNum = document.createElement("a");
const tel = '6106328630';
const phone = '610.632.8630';

// Add elements to main container
popupContainer.appendChild(popupContent);
popupContainer.appendChild(popupImage);

// Add elements to main content container
popupContent.appendChild(mainLogo);
popupContent.appendChild(mainContent);
popupContent.appendChild(phoneText);
popupContent.appendChild(phoneNum);

// Add close button
popupImage.appendChild(closeBtn);

// Attach elements to body element
document.body.appendChild(popupContainer);
document.body.appendChild(popupFader);

// Add classes for styling
popupContainer.className = "popupContainer";
popupContent.className = "popupContent";  
popupImage.className = "popupImage";  
popupFader.className = "popupFader";
closeBtn.className = "popupCloseBtn";
phoneText.className = "phoneText";
phoneNum.className = "phoneNum";
mainLogo.className = "mainLogo";

// Add href to phone number 
phoneNum.href = `tel: ${tel}`;

// Add img src
if(window.location.host === 'localhost') {
  mainLogo.src = 'http://localhost/benarilaw' + imagesDirectory + '/Benari-Law-Group-Logo.png';
} else {
  mainLogo.src = imagesDirectory + '/Benari-Law-Group-Logo.png';
}

// Get h1 element 
const title = document.querySelector('h1').textContent;
const pattern = /\d{1,}-\d{1,}-\d{1,}/;
const districtNumber = title.match(pattern);

// Add content to elements
closeBtn.innerHTML = "X";
mainContent.innerHTML = `Benari Law Group has successfully helped clients reduce or dismiss their charges at District Court ${districtNumber[0]}. Need a tough defense attorney to fight for you? Get a free consult!`;
phoneText.innerHTML = 'Click Button To Call Now ';
phoneNum.innerHTML = phone;

// Remove popup when close button is clicked
closeBtn.addEventListener('click', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'none'; 
  popupFader.style.display = 'none'; 
});

// Remove popup when fade screen is clicked
popupFader.addEventListener('click', (e) => {
  e.preventDefault();
  popupContainer.style.display = 'none'; 
  popupFader.style.display = 'none'; 
});

}) ();
