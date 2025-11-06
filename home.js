    AOS.init();
    AOS.init();
    
    
    function searchFunction(event) {
        event.preventDefault();
        const searchTerm = document.getElementById('searchBar').value;
        if (searchTerm.trim() !== '') {
            alert('Searching for: ' + searchTerm);
            
        }
    }
    AOS.init({
    once: false 
});


    
// const emailInput = document.getElementById('emailInput');
// const arrowBtn = document.getElementById('arrowBtn');
// const subscribeBtn = document.getElementById('subscribeBtn');

// function handleSubscribe() {
//   if (!emailInput.checkValidity()) {
//     alert('Please enter a valid email address.');
//     return;
//   }
//   alert('Thank you for subscribing!');
//   emailInput.value = '';
// }



document.getElementById("subscribeBtn").addEventListener("click", function(event) {
  event.preventDefault(); // Form submit rokne ke liye

  const emailInput = document.getElementById("emailInput").value.trim();
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailPattern.test(emailInput)) {
    Swal.fire({
      title: 'Thank you!',
      text: 'Thanks for subscribing!',
      icon: 'success',
      background: '#1E293B', // dark slate background
      color: '#E2E8F0', // light gray text
      showConfirmButton: false, // OK button removed
      timer: 2000, // auto-close after 2 seconds
      timerProgressBar: true
    });

    document.getElementById("emailInput").value = '';
  } else {
    Swal.fire({
      title: 'Invalid Email',
      text: 'Please enter a valid email address.',
      icon: 'error',
      background: '#F8FAFC', // soft white background
      color: '#1E293B', // dark text
      showConfirmButton: false,
      timer: 2000,
      timerProgressBar: true
    });
  }
});

arrowBtn.addEventListener('click', handleSubscribe);
subscribeBtn.addEventListener('click', handleSubscribe);
emailInput.addEventListener('keypress', e => {
  if (e.key === 'Enter') handleSubscribe();
});

    // Example of a small JS function, if you need a popup on hover
document.querySelectorAll('.footer a').forEach(link => {
  link.addEventListener('mouseover', function () {
    link.style.color = '#007bff'; // Change link color on hover
  });
  link.addEventListener('mouseout', function () {
    link.style.color = ''; // Reset color
  });
});
