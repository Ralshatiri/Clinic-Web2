const search = document.querySelector('.input-group input'),
    table_rows = document.querySelectorAll('tbody tr'),
    table_headings = document.querySelectorAll('thead th');



// 2. Sorting | Ordering data of HTML table

table_headings.forEach((head, i) => {
    let sort_asc = true;
    head.onclick = () => {
        table_headings.forEach(head => head.classList.remove('active'));
        head.classList.add('active');

        document.querySelectorAll('td').forEach(td => td.classList.remove('active'));
        table_rows.forEach(row => {
            row.querySelectorAll('td')[i].classList.add('active');
        })

        head.classList.toggle('asc', sort_asc);
        sort_asc = head.classList.contains('asc') ? false : true;

        sortTable(i, sort_asc);
    }
})


function sortTable(column, sort_asc) {
    [...table_rows].sort((a, b) => {
        let first_row = a.querySelectorAll('td')[column].textContent.toLowerCase(),
            second_row = b.querySelectorAll('td')[column].textContent.toLowerCase();

        return sort_asc ? (first_row < second_row ? 1 : -1) : (first_row < second_row ? -1 : 1);
    })
        .map(sorted_row => document.querySelector('tbody').appendChild(sorted_row));
}



// ---------------------- Add animation to welcome message ----------------------



function startTypingEffect() {
    const welcomeMessage = document.getElementById("welcome-message");
    const fullText = welcomeMessage.innerHTML; 
    const typingSpeed = 150; 
    let charIndex = 0;
  
    function typeEffect() {
      if (charIndex <= fullText.length) {
        welcomeMessage.textContent = fullText.substring(0, charIndex);
        charIndex++;
        setTimeout(typeEffect, typingSpeed);
      }
    }
  
    welcomeMessage.textContent = "";
    typeEffect();
  }
  





document.addEventListener("DOMContentLoaded", function () {

  
    let exploreButton = document.querySelector('.cta-btn'); 

    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            let targetSection = document.querySelector('.specialists'); 
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth'
                });
            } else {
                console.error("Error: Target section '.info' not found.");
            }
        });
    } else {
        console.error("Error: Explore More button not found.");
    }

});



    // 4. Login & Sign-Up
    const container = document.querySelector('.container');
    const registerBtn = document.querySelector('.register-btn');
    const loginBtn = document.querySelector('.login-btn');

    if (registerBtn && loginBtn) {
        registerBtn.addEventListener('click', () => container.classList.add('active'));
        loginBtn.addEventListener('click', () => container.classList.remove('active'));
    }

    const loginForm = document.getElementById("loginform");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault();
            const role = document.querySelector('input[name="select"]:checked');

            if (!role) {
                alert("Please select a role (Patient or Doctor).");
                return;
            }

            console.log("Login role selected:", role.value);
            window.location.href = role.value === "Patient" ? "PatientPage.html" : "DoctorPage.html";
        });
    }

    // 5. Patient & Doctor Registration Form Handling
    const doctorFields = document.getElementById("doctor-fields");
    const patientFields = document.getElementById("patient-fields");
    const doctorRadio = document.getElementById("option-22");
    const patientRadio = document.getElementById("option-11");
    const registerForm = document.getElementById("registerform");

    if (doctorFields && patientFields) {
        doctorFields.style.display = "none";
        patientFields.style.display = "none";
    }

    function toggleFields() {
        if (doctorRadio && doctorRadio.checked) {
            doctorFields.style.display = "block";
            patientFields.style.display = "none";
        } else if (patientRadio && patientRadio.checked) {
            doctorFields.style.display = "none";
            patientFields.style.display = "block";
        }
    }

    if (doctorRadio && patientRadio) {
        doctorRadio.addEventListener("change", toggleFields);
        patientRadio.addEventListener("change", toggleFields);
    }

    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            event.preventDefault();
            console.log("Registration form submitted!");

            if (doctorRadio && doctorRadio.checked) {
                console.log("Redirecting to DoctorPage.html...");
                window.location.href = "DoctorPage.html";
            } else if (patientRadio && patientRadio.checked) {
                console.log("Redirecting to PatientPage.html...");
                window.location.href = "PatientPage.html";
            } else {
                alert("Please select either Doctor or Patient.");
            }
        });
    } else {
        console.error("Register form not found!");
    }