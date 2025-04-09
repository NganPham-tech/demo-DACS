document.addEventListener('DOMContentLoaded', function() {
    // Load header
    fetch('/partials/header.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => {
        document.getElementById('header').innerHTML = data;
      })
      .catch(error => console.error('Error loading header:', error));
  
    // Load footer
    fetch('/partials/footer.html')
      .then(response => {
        if (!response.ok) throw new Error('Network response was not ok');
        return response.text();
      })
      .then(data => document.getElementById('footer').innerHTML = data)
      .catch(error => console.error('Error loading footer:', error));
  });
  