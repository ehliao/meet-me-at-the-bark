// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const name = document.querySelector('#pet-name').value.trim();
//     const breed = document.querySelector('#breed').value.trim();
//     const dob = document.querySelector('#birthday').value.trim();
  
//     if (name && breed && dob) {
//       const response = await fetch(`/api/pets`, {
//         method: 'POST',
//         body: JSON.stringify({ name, breed, dob }),
//         headers: {
//           'Content-Type': 'application/json',
//         },
//       });
  
//       if (response.ok) {
//         document.location.replace('/profile');
//       } else {
//         alert('Failed to create project');
//       }
//     }
//   };

//   document
//   .querySelector('.form-group')
//   .addEventListener('submit', newFormHandler);