const navslide = () => {
    const burger=document.querySelector('.burger');
    const nav= document.querySelector('.navlinks');
    const navlinks=document.querySelectorAll('.navlinks li')

    burger.addEventListener('click',() =>{
        nav.classList.toggle('nav-active');

        navlinks.forEach((link,index) =>{
            if(link.style.animation){
                link.style.animation='';
            }
            else{
                link.style.animation =`navLinkFade 0.5s ease forwards ${index/7 + 0.3}s`;
            }
        });
        //burger
        burger.classList.toggle('toggle');
     });

    
}

navslide();

document.getElementById('contactForm').addEventListener('submit', async function (e) {
    e.preventDefault();

    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    const errorMessageDiv = document.getElementById('errorMessage');

    errorMessageDiv.textContent = ''; // Clear previous error messages

    if (!name || !email || !message) {
        errorMessageDiv.textContent = 'Please fill the form to contact me.';
        return;
    }

    try {
        const response = await fetch('https://myportfolio-bb613-default-rtdb.firebaseio.com/contactUsForm.json', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ name, email, message })
        });

        if (response.ok) {
            alert('Thank You For Contacting Me');
            document.getElementById('contact Form').reset(); // Clear the form fields
        } else {
            alert('There was an issue with the submission. Please try again.');
        }
    } catch (error) {
        console.error('Error submitting the form:', error);
        alert('There was an error submitting the form. Please try again later.');
    }
});
