

const signupFormHandler = async (event) => {
    event.preventDefault();
    const first_name = document.querySelector('#first-name').value.trim();
    console.log(firstName)
    const last_name = document.querySelector('#last-name').value.trim();
    const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();
    const zipcode = document.querySelector('#zipcode').value.trim();
    // const petName = document.querySelector('#pet-name').value.trim();
    // const petBreed = document.querySelector('#pet-breed').value.trim(); 
    // const petDOB = document.querySelector('#birthday').value.trim(); 
    
    if (first_name && last_name && email && password && zipcode) {
        const response = await fetch('/api/owners', {
            method: 'POST',
            body: JSON.stringify({ first_name, last_name, email, password, zipcode }),
            headers: { 'Content-Type': 'application/json' },
        });
        console.log(response)
        if (response.ok) {
            document.location.replace('/profile');
        } else {
            console.log(response)
            alert(response.statusText);
        }
    }
    
        // if (petName && petBreed && petDOB) {
    //   const response = await fetch('/api/pets', {
    //     method: 'POST',
    //     body: JSON.stringify({ petName, petBreed, petDOB }),
    //     headers: { 'Content-Type': 'application/json' },
    //   });
  
    //   if (response.ok) {
    //     document.location.replace('/profile');
    //   } else {
    //     alert(response.statusText);
    //   }
    // }
  };

  const submit = document.getElementById('submitBtn');
    
    submit.addEventListener('click', () => {
        signupFormHandler();
    })
    


//   const signUp = document.querySelector('.signup-form')
//   if (signUp) {
//       console.log(signUp)
//       signUp.addEventListener('submit', signupFormHandler);
//     }
