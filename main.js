let menuIcon = document.querySelector('.menuContainer');
let menu = document.querySelector('.menu');
let pointsSelect = document.getElementById('points');
let specialitySelect = document.getElementById('Speciality');
let gigsContainer = document.querySelector('.gigs');
let resaults = document.querySelector('.resaults');
let searchInput = document.getElementById('searchInput');

// Toggle Menu
menuIcon.addEventListener('click', function(){
    if(menuIcon.classList.contains('displayMenu')){
        menuIcon.classList.remove('displayMenu');
        menu.classList.remove('display')
        
    }else{
        menuIcon.classList.add('displayMenu');
        menu.classList.add('display')
    }
})

let optionsRequest = new XMLHttpRequest();
optionsRequest.open('GET', './data.json');
optionsRequest.send();

optionsRequest.onreadystatechange = function(){
    if(this.readyState == 4 && this.status == 200){
        let data = JSON.parse(optionsRequest.responseText);
        let points = [];
        let Specialty = [];
        for(let i = 0; i < data.Restaurant.length; i++){
            points.push(data.Restaurant[i].Note)
            Specialty.push(data.Restaurant[i].Spécialité);
            // Display Function
            display(data.Restaurant[i]);
        }
        // Remove Repeated Points (Spread Operator)
        let uniquePoints = [...new Set(points)];
        uniquePoints.forEach((point) =>{
            let optionPoint = document.createElement('option');
            optionPoint.setAttribute('value', point);
            optionPoint.textContent = point;
            pointsSelect.appendChild(optionPoint);
        })

        // Remove Repeated Speciality (Spread Operator)
        let uniqueSpeciality = [... new Set(Specialty)];
        uniqueSpeciality.forEach((sp) =>{
            let optionSp = document.createElement('option');
            optionSp.setAttribute('value', sp);
            optionSp.textContent = sp;
            specialitySelect.appendChild(optionSp);
        })

        // Filter Based On Points
        pointsSelect.addEventListener('change', function(){
            let allGigs = document.querySelectorAll('.gig');
            allGigs.forEach((gig)=>{
            gig.remove();
            })
            for(let i=0; i< data.Restaurant.length; i++){
                if(pointsSelect.value == 'All' || pointsSelect.value == data.Restaurant[i].Note){
                    console.log(data.Restaurant[i]);
                    display(data.Restaurant[i]);
                }
            }
            displayDetailsPage();
        })
        // Filter Based On Speciality
        specialitySelect.addEventListener('change', function(){
            let allGigs = document.querySelectorAll('.gig');
            allGigs.forEach((gig)=>{
            gig.remove();
            })
            for(let i=0; i< data.Restaurant.length; i++){
                if(specialitySelect.value == 'All' || specialitySelect.value == data.Restaurant[i].Spécialité){
                    console.log(data.Restaurant[i]);
                    display(data.Restaurant[i]);
                }
            }
            displayDetailsPage();
        })

        // Search
        searchInput.addEventListener('keyup', function(){
            let allGigs = document.querySelectorAll('.gig');
            allGigs.forEach((gig)=>{
            gig.remove();
            })
            for(let i=0; i< data.Restaurant.length; i++){
                let NameUperCase = data.Restaurant[i].Nom.toUpperCase();
                let NameLowerCase = data.Restaurant[i].Nom.toLowerCase();
                let searchUperCase = searchInput.value.toUpperCase();
                let searchLowerCase = searchInput.value.toLowerCase();
                if(searchInput.value == data.Restaurant[i].Nom){
                    display(data.Restaurant[i]);
                }else if((NameUperCase).includes(searchUperCase) || (NameLowerCase).includes(searchUperCase)){
                    display(data.Restaurant[i]);
                }else if((NameUperCase).includes(searchLowerCase) || (NameLowerCase).includes(searchLowerCase)){
                    display(data.Restaurant[i]);
                }
            }
            displayDetailsPage();
            
        })
        
        function displayDetailsPage(){
            // when i click on the gig display the details
            let logo = document.querySelectorAll('.logo');
            logo.forEach((d)=>{
            d.addEventListener('click', (e)=>{
                let id = e.target.id;
                // console.log(data.Restaurant[0].ID)
                // console.log(id)
                for(let i=0; i<data.Restaurant.length;i++){
                    if(id == data.Restaurant[i].ID){
                        let targetData = data.Restaurant[i];
                        // console.log(JSON.stringify(targetData))
                        localStorage.setItem('detail', JSON.stringify(targetData));
                        window.location.href = './details.html';
                        break;
                    }
                }
            })
            })
        }
        displayDetailsPage()
    }
}

// Display Data in Browser
function display(data){
    let gigDiv = document.createElement('div');
    gigDiv.classList.add('gig');
    let img = document.createElement('img');
    img.setAttribute('src', data.images.image3);
    let overlayDiv = document.createElement('div');
    overlayDiv.classList.add('overlay');
    let nameDiv = document.createElement('div');
    nameDiv.classList.add('nameContainer');
    let p = document.createElement('p');
    p.textContent = data.Spécialité;
    let h3 = document.createElement('h3');
    h3.textContent = data.Nom;

    nameDiv.appendChild(p);
    nameDiv.appendChild(h3);

    let logoDiv = document.createElement('div');
    logoDiv.classList.add('logo');
    let logo = document.createElement('img');
    logo.setAttribute('id',data.ID);
    logo.setAttribute('src', data.Logo);
    logoDiv.appendChild(logo);

    let ratesDiv = document.createElement('div');
    ratesDiv.classList.add('rates');
    let icon = document.createElement('i');
    icon.setAttribute('class', 'fa-solid fa-star');
    let point = document.createElement('p');
    point.textContent = data.Note;

    ratesDiv.appendChild(icon);
    ratesDiv.appendChild(point);

    gigDiv.appendChild(img);
    gigDiv.appendChild(overlayDiv);
    gigDiv.appendChild(nameDiv);
    gigDiv.appendChild(logoDiv);
    gigDiv.appendChild(ratesDiv);
    gigsContainer.appendChild(gigDiv)
  }
