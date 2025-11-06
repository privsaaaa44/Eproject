 document.querySelectorAll('.faq-question').forEach(item => {
      item.addEventListener('click', () => {
        item.parentElement.classList.toggle('active');
      });
    });
    //  const nameInput = document.querySelector('input[type="text"]');
    // nameInput.addEventListener('input', () => {
    //     nameInput.value = nameInput.value.replace(/[^A-Za-z\s]/g, '');
    // });

    // Prevent typing non-digits in phone and limit to 11 digits
    const phoneInput = document.getElementById('phone');
    phoneInput.addEventListener('input', () => {
        phoneInput.value = phoneInput.value.replace(/\D/g, '');
        if(phoneInput.value.length > 11) phoneInput.value = phoneInput.value.slice(0,11);
    });

    // Optional: trim email spaces on submit
    document.getElementById('contactForm').addEventListener('submit', (e) => {
        const emailInput = document.querySelector('input[type="email"]');
        emailInput.value = emailInput.value.trim();
    });
    const form = document.getElementById('contactForm');
const checkbox = document.getElementById('privacy');

form.addEventListener('submit', function(e) {
    // Get all required fields
    const name = this.querySelector('input[type="name"]');
    const email = this.querySelector('input[type="email"]');
    const phone = this.querySelector('input[type="tel"]');
    const message = this.querySelector('textarea');

    // Check if all required fields are filled
    if(name.value && email.value && phone.value && message.value) {
        // Check if checkbox is ticked
        if(!checkbox.checked) {
            e.preventDefault(); // Stop form submission
            alert('Please agree to the Privacy Policy before submitting.');
            checkbox.focus();
        }
    } else {
        // Stop submission if fields are not filled
        e.preventDefault();
    }
});

// Optional: Handle Enter key inside inputs to trigger the form submit
form.querySelectorAll('input, textarea').forEach(input => {
    input.addEventListener('keypress', function(e) {
        if(e.key === 'Enter') {
            e.preventDefault(); // Prevent default Enter behavior
            form.requestSubmit(); // Trigger submit programmatically
        }
    });
});
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById("contactForm");

    form.addEventListener("submit", function(event) {
        event.preventDefault(); // Page reload roke

        // Correct inputs selection
        const name = document.getElementById('nameInput').value.trim();
        const email = form.querySelector('input[type="email"]').value.trim();
        const phone = form.querySelector('input[type="tel"]').value.trim();
        const message = form.querySelector('#message').value.trim();
        const privacyChecked = form.querySelector('#privacy').checked;

        // Validation
        if (!name || !email || !phone || !message || !privacyChecked) {
            Swal.fire({
                title: 'Oops!',
                text: 'Please fill all required fields and accept the Privacy Policy.',
                icon: 'error',
                confirmButtonText: 'OK'
            });
            return;
        }

        // Success popup
       Swal.fire({
    title: 'Message Sent!',
    text: 'Thank you for contacting us. We will get back to you soon.',
    icon: 'success',
    background: '#F8FAFC',
    color: '#000000',
    showConfirmButton: false
});


        form.reset(); // Clear the form
    });
});
