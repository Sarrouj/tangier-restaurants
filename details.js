let sp = document.querySelector('.specialityP');

let detail = localStorage.getItem('detail');
let data = JSON.parse(detail);

// Display Spéciality
sp.textContent = data.Spécialité

