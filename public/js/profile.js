// const newFormHandler = async (event) => {
//     event.preventDefault();
  
//     const profilePhoto = document.querySelector('#').value.trim();
//     const name = document.querySelector('#').value.trim();
//     const dob = document.querySelector('#').value.trim();
  
//     if (name && needed_funding && description) {
//       const response = await fetch(`/api/owners`, {
//         method: 'POST',
//         body: JSON.stringify({ profilePhoto, name, dob }),
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
  