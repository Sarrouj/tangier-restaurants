let sp = document.querySelector('.specialityP');
let map = document.getElementById('map');

let Monday = document.querySelector('.Monday');
let Tuesday = document.querySelector('.Tuesday');
let Wednesday = document.querySelector('.Wednesday');
let Thursday= document.querySelector('.Thursday');
let Friday= document.querySelector('.Friday');
let Saturday= document.querySelector('.Saturday');
let Sunday= document.querySelector('.Sunday');
let website = document.querySelector('.websiteParagraph');
let PhoneNumber = document.querySelector('.PhoneNumberp');
let Name = document.querySelector('.Name');
let Points = document.querySelector('.points');
let starsContainer = document.getElementById('stars');

// Get Data from Local Storage
let detail = localStorage.getItem('detail');
let data = JSON.parse(detail);

// Display Data
sp.textContent = data.Spécialité;
map.setAttribute('src', data.Adresse);
Monday.textContent = data.Horaires.Monday;
Tuesday.textContent = data.Horaires.Tuesday;
Wednesday.textContent = data.Horaires.Wednesday;
Thursday.textContent = data.Horaires.Thursday;
Friday.textContent = data.Horaires.Friday;
Saturday.textContent = data.Horaires.Saturday;
Sunday.textContent = data.Horaires.Sunday;
website.textContent = data.Nom;
website.setAttribute('href', data.Website);
PhoneNumber.textContent = data.Téléphone;
Name.textContent = data.Nom;
Points.textContent = data.Note;

let point = Math.floor(data.Note);

// Create Stars
for(let i=0; i < point; i++){
    let li = document.createElement('li');
    let i = document.createElement('i');
    i.setAttribute('class', 'fa-solid fa-star');
    li.appendChild(i);
    starsContainer.appendChild(li);
}

if(starsContainer.children.length < 5){
    let starNumber = 5-starsContainer.children.length;
    for(let i=0; i<starNumber; i++){
        let li = document.createElement('li');
        let i = document.createElement('i');
        i.setAttribute('class', 'fa-regular fa-star');
        li.appendChild(i);
        starsContainer.appendChild(li);
    }
}


