const subsForm = document.querySelector('#subs-form');
subsForm.addEventListener("submit", e => {
    e.preventDefault();
    console.log(e.target.email.value);
})