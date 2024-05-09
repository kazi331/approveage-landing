const form = document.querySelector("form");
const btn = document.querySelector("#submit-btn");
const message = document.querySelector("#message");
const fieldset = document.querySelector("fieldset");
const successModal = document.querySelector("#success-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelectorAll(".close-modal");

let isLoading = false;

const disableForm = () => {
    isLoading = true;
    btn.innerHTML = "Loading...";
    btn.disabled = true;
    fieldset.disabled = true;
};
const resetForm = () => {
    isLoading = false;
    btn.innerHTML = "Subscribe";
    btn.disabled = false;
    fieldset.disabled = false;
    form.reset();
};

const openModal = () => {
    successModal.classList.remove("h-0");
};
const closeModal = () => {
    successModal.classList.add("h-0");
    successModal.classList.remove("h-full");
};


closeBtn.forEach((actionBtn) => {
    actionBtn.addEventListener("click", closeModal);
});


form.addEventListener("submit", async e => {
    e.preventDefault();
    if (e.target.email.value === '') {
        e.target.email.style.outline = '1px solid red';
        e.target.email.animate([
            { transform: 'translateX(0px)' },
            { transform: 'translateX(10px)' },
            { transform: 'translateX(-10px)' },
            { transform: 'translateX(0px)' }
        ], {
            duration: 100,
            iterations: 2
        });

    } else {
        isLoading = true;
        e.target.email.style.outline = '1px solid gray';
        disableForm();
        try {
            const res = await fetch("https://apis-dev.approveage.com/client/subscribe-to-news-letter", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email: e.target.email.value })
            });
            const data = await res.json();
            if (data.status === 200) {
                resetForm();
                // message.innerText = "You have successfully subscribed to our newsletter";
                openModal();
            }

        } catch (err) {
            message.innerText = "An error occured, please try again later";
            message.style.color = 'red';
            resetForm();
            closeModal();
        }
    }
}) 
