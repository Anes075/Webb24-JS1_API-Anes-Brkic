//https://randomuser.me/api/

let main = document.getElementById('main');

let createUserData = () => {

    main.innerHTML = '';
    main.style.display = 'grid';

    fetch('https://randomuser.me/api/')
    .then(response =>{
        if(!response.ok){
            throw new Error('Something went wrong -' + response.status);
        }
        return response.json();
    })
    .then(data => {

        let gender = data.results[0].gender;
        let email = data.results[0].email;
        let phone = data.results[0].phone;
        let firstName = data.results[0].name.first;
        let lastName = data.results[0].name.last;

        let userCategory = ['First Name: ','Last Name: ', 'Gender: ','Email: ','Phone Number: ']
        let userData = [firstName,lastName,gender,email,phone];

        let userPicture = document.createElement('div');
        userPicture.style.backgroundImage = `url(${data.results[0].picture.large})`;
        main.appendChild(userPicture);

        for(i = 0; i< userData.length; i++){

            let userElement = document.createElement('p');
            userElement.innerText = userCategory[i] + userData[i];
            main.appendChild(userElement);  

        }
        return data;
    })
    .catch(error =>{
        console.error('Fetch error', error);
    });

}