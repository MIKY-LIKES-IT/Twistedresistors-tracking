fetch('tracking-data.json')
  .then(response => response.json())
  .then(data => {
    const form = document.getElementById('tracking-form');
    const input = document.getElementById('orderInput');
    const result = document.getElementById('result');

    form.addEventListener('submit', function(e) {
      e.preventDefault();
      const order = input.value.trim();
      const match = data.find(entry => entry.order === order);

      if (match) {
        result.innerHTML = `
          <p>Tracking Code: <strong>${match.imb}</strong></p>
          <p>Status: <strong>${match.status}</strong></p>
          <p>${match.date ? 'Last Updated: ' + match.date : ''}</p>
        `;
      } else {
        result.textContent = 'Sorry, no tracking info found for that order number.';
      }
    });
  })
  .catch(err => {
    console.error('Error loading tracking data:', err);
  });