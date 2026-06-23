(function() {
      const form = document.getElementById('contactForm');
      const successDiv = document.getElementById('successMessage');
      form.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();
        if (!name || !email || !message) {
          form.reportValidity();
          return;
        }
        successDiv.classList.add('show');
        const submitBtn = form.querySelector('.btn-submit');
        submitBtn.disabled = true;
        submitBtn.style.opacity = '0.7';
        submitBtn.textContent = '✓ sent';
        setTimeout(() => {
          form.reset();
          submitBtn.disabled = false;
          submitBtn.style.opacity = '1';
          submitBtn.textContent = '✦ Submit ✦';
        }, 2500);
        successDiv.classList.remove('show');
        void successDiv.offsetWidth; 
        successDiv.classList.add('show');
    });
      window.addEventListener('load', function() {
        successDiv.classList.remove('show');
      });
    })();
