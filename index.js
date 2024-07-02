function scrollToElement(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  }


document.querySelectorAll('.contactme-button').forEach(button => {
    button.addEventListener('click', () => {
      const form = document.getElementById('contact-form');
      scrollToElement(form, 2000); // 2000ms for slower scrolling
      form.querySelector('#name').focus();
    });
  });

  function scrollToElement(element, duration) {
    const targetPosition = element.getBoundingClientRect().top + window.scrollY;
    const startPosition = window.scrollY;
    const distance = targetPosition - startPosition;
    let startTime = null;
  
    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = ease(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }
  
    function ease(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }
  
    requestAnimationFrame(animation);
  }
  
  document.querySelectorAll('.contactme-button').forEach(button => {
    button.addEventListener('click', () => {
      const form = document.getElementById('contact-form');
      scrollToElement(form, 2000); // 2000ms for slower scrolling
      form.querySelector('#name').focus();
    });
  });
  
  document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent the default form submission
  
    // Create explosion element
    const explosion = document.createElement('div');
    explosion.classList.add('explosion');
    document.body.appendChild(explosion);
  
    // Wait for animation to complete before submitting the form
    setTimeout(() => {
      // Remove explosion element
      document.body.removeChild(explosion);
  
      // Submit the form programmatically
      event.target.submit();
    }, 500); // Duration of the explosion animation
  });
  