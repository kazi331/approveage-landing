const form = document.querySelector("form");
const btn = document.querySelector("#submit-btn");
const message = document.querySelector("#message");
const fieldset = document.querySelector("fieldset");
const successModal = document.querySelector("#success-modal");
const modalContent = document.querySelector("#modal-content");
const closeBtn = document.querySelectorAll(".close-modal");

let isLoading = false;
let verifying = false;

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

//  modal close event
closeBtn.forEach((actionBtn) => {
    actionBtn.addEventListener("click", closeModal);
});

// subscribe to news letter
const subscribe = async (email) => {
    try {
        const res = await fetch("https://apis-dev.approveage.com/client/subscribe-to-news-letter", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email })
        });
        const data = await res.json();
        if (data.status === 200) {
            resetForm();
            openModal();
        }

    } catch (err) {
        console.log('err', err);
        message.innerText = "An error occured, please try again later";
        message.style.color = 'red';
        resetForm();
        closeModal();
    }
}

//  submit event for form
form.addEventListener("submit", async e => {
    e.preventDefault();
    if (e.target.email.value === '') {
        verifying = true;
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
        verifying = true;
        if (verifyEmail(e.target.email.value)) {
            isLoading = true;
            e.target.email.style.outline = '1px solid gray';
            disableForm();
            await subscribe(e.target.email.value);
        } else {
            e.target.email.style.outline = '1px solid red';
            message.innerText = "Please enter a valid email address";
        }
    }
});

// email validation;
const verifyEmail = email => {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailPattern.test(email);
}
//  onchange event for email input field
form.addEventListener("input", e => {
    if (!verifying) return;
    if (verifyEmail(e.target.value)) {
        e.target.style.outline = '1px solid #2db04a';
        message.innerText = "";
    } else {
        e.target.style.outline = '1px solid red';
        message.innerText = "Please enter a valid email address";
    }
})