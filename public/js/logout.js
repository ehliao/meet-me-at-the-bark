const logout = async () => {
    const response = await fetch('/api/owners/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
  
    if (response.ok) {
      document.location.replace('/');
    } else {
      alert(response.statusText);
    }
  };
  
  const logOut = document.querySelector('#logout')
    if (logOut) {
    logOut.addEventListener('click', logout);
    }
  