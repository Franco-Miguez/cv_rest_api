const API_URL = "https://randomuser.me/api/"

fetch(API_URL)
.then(res=>res.json())
.then(response=> {
    const name = `${response.results[0].name.first} ${response.results[0].name.last}` ;
    const imge = response.results[0].picture.large;
    const gender = response.results[0].gender;
    const phone_number = response.results[0].cell;
    const email = response.results[0].email;
    const country = response.results[0].location.country;
    const state = response.results[0].location.state;
    const city = response.results[0].location.city;
    const live = `${country}, ${state}, ${city}`;
    const birthday = response.results[0].dob.date.slice(0, 10);


    document.querySelector('#name').innerHTML = name;
    document.querySelector('#front-photo').src = imge;
    if (gender == "female"){
        document.querySelector('#gender').innerHTML = '<i class="bi bi-gender-female">';
        document.querySelector('#gender').style.color = "#fdcae1";
    }
    else{
        document.querySelector('#gender').innerHTML = '<i class="bi bi-gender-male">';
        document.querySelector('#gender').style.color = "#84b6f4";
        
    }
    document.querySelector("#phone-number").innerHTML = phone_number;
    document.querySelector("#email").innerHTML = email;
    document.querySelector("#city").innerHTML = live;
    document.querySelector("#birthday").innerHTML = birthday; 

    console.log(response);
    })
