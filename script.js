

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
  


/////explore button in home///

// Wait for DOM to fully load
document.addEventListener("DOMContentLoaded", function () {

    /// Explore More button in home ///
    let exploreButton = document.querySelector('.cta-btn'); // Corrected selection

    if (exploreButton) {
        exploreButton.addEventListener('click', function () {
            let targetSection = document.querySelector('.info'); // Corrected target section

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
