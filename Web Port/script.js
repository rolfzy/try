// script.js
document.querySelectorAll('.inf-item').forEach(button => {
    button.addEventListener('click', () => {
      const answer = button.nextElementSibling;
      const isVisible = answer.style.display === "block";
  
      // Close all answers
      document.querySelectorAll('.inf-answer').forEach(item => item.style.display = 'none');
  
      // Toggle current answer
      answer.style.display = isVisible ? 'none' : 'block';

    });
  });
  document.addEventListener("DOMContentLoaded", function() {
  document.getElementById("contact-form").addEventListener("submit",function(event){
    event.preventDefault();
    const nama = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const pesan = document.getElementById("message").value;

    alert(`Name : ${nama}\n Email:${email}\nMessage: ${pesan}`);
    

  });
});