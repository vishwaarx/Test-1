document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('contactForm');
    const responseDiv = document.getElementById('response');

    form.addEventListener('submit', async function(e) {
        e.preventDefault();
        
        // Get form data
        const formData = new FormData(form);
        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            message: formData.get('message')
        };

        // Show loading state
        const submitButton = form.querySelector('button[type="submit"]');
        const originalText = submitButton.textContent;
        submitButton.textContent = 'Submitting...';
        submitButton.disabled = true;

        try {
            const response = await fetch('/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(data)
            });

            const result = await response.json();

            if (response.ok) {
                showResponse('success', result.message);
                form.reset();
            } else {
                showResponse('error', result.message || 'An error occurred');
            }
        } catch (error) {
            showResponse('error', 'Network error. Please try again.');
        } finally {
            // Reset button state
            submitButton.textContent = originalText;
            submitButton.disabled = false;
        }
    });

    function showResponse(type, message) {
        responseDiv.textContent = message;
        responseDiv.className = `response ${type}`;
        
        // Auto-hide after 5 seconds
        setTimeout(() => {
            responseDiv.textContent = '';
            responseDiv.className = 'response';
        }, 5000);
    }
}); 