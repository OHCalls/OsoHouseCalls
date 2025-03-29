document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // Collect form data
    const formData = new FormData(this);
    const data = {
        user_name: formData.get('name'),
        user_email: formData.get('email'),
        user_message: formData.get('message'),
    };

    // Send email using EmailJS
    emailjs.send("service_hxyy", "template_h7z5ecj", data)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            document.getElementById('form-status').style.display = 'block';
        }, function(error) {
            console.error('FAILED...', error);
            alert('Failed to send message. Please try again later.');
        });
});
