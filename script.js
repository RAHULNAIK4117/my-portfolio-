// JavaScript to toggle sidebar
const toggleButton = document.getElementById('toggleButton');
const sidebar = document.getElementById('sidebar');

toggleButton.addEventListener('click', () => {
  if (sidebar.style.transform === 'translateX(100%)') {
    sidebar.style.transform = 'translateX(-100%)';
  } else {
    sidebar.style.transform = 'translateX(100%)';
  }
});


// im an developer and introduction secton
var typed = new Typed(".text", {
  strings: ["Web Developer", "designer", "Computer Programmer"],
  typeSpeed: 100,
  backSpeed: 100, // Corrected from 'backspeed' to 'backSpeed'
  backDelay: 1000,
  loop: true,
});


// hire me sections+++++++++++++++++++++++++++++++++++++++++

document.getElementById('hireMeButton').addEventListener('click', function () {
  const email = 'rahulnaik6241@gmail.com'; // Replace with your email address
  const subject = 'Job Opportunity';
  const body = 'Hi Rahul, I would like to discuss a job opportunity with you.';
  const mailtoLink = `mailto:${email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  window.location.href = mailtoLink;
});

// form sections area+++++++++++++++++++++++++++++++++++++++++++++

const BTN1 = document.getElementById('BTN1');
    const DIV10 = document.getElementById('DIV10');
    const BTN2 = document.getElementById('BTN2');

    // Open form
    BTN1.addEventListener('click', () => {
      DIV10.style.zIndex = 1000; // Set z-index high enough to overlay
      DIV10.style.opacity = 1;
      DIV10.style.pointerEvents = 'auto'; // Enable interactions
    });

    // Close form
    BTN2.addEventListener('click', () => {
      DIV10.style.zIndex = -1;
      DIV10.style.opacity = 0;
      DIV10.style.pointerEvents = 'none'; // Disable interactions when hidden
    });

    // Prevent accidental form submission for demo
    document.getElementById('FORM100').addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Form submitted!');
      DIV10.style.zIndex = -1;
      DIV10.style.opacity = 0;
      DIV10.style.pointerEvents = 'none'; // Disable interactions when form is closed
    });