
document.getElementById('donate-btn').addEventListener('click', function () {
  const amount = document.getElementById('amount').value;
  if (amount) {
    alert(`Thank you for your generous donation of $${amount}!`);
    document.getElementById('donate-form').reset();
  } else {
    alert('Please enter a valid donation amount.');
  }
});

