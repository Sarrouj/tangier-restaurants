let sp = document.querySelector('.specialityP');
let map = document.getElementById('map');

let Monday = document.querySelector('.Monday');
let Tuesday = document.querySelector('.Tuesday');
let Wednesday = document.querySelector('.Wednesday');
let Thursday= document.querySelector('.Thursday');
let Friday= document.querySelector('.Friday');
let Saturday= document.querySelector('.Saturday');
let Sunday= document.querySelector('.Sunday');

let detail = localStorage.getItem('detail');
let data = JSON.parse(detail);

// Display Spéciality
sp.textContent = data.Spécialité;
map.setAttribute('src', data.Adresse);
Monday.textContent = data.Horaires.Monday;
Tuesday.textContent = data.Horaires.Tuesday;
Wednesday.textContent = data.Horaires.Wednesday;
Thursday.textContent = data.Horaires.Thursday;
Friday.textContent = data.Horaires.Friday;
Saturday.textContent = data.Horaires.Saturday;
Sunday.textContent = data.Horaires.Sunday;

