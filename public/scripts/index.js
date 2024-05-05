const subsForm = document.querySelector('#subs-form');
const newsLetterBtn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
let isLoading = false;

const disableBtn = () => {
    isLoading = true;
    newsLetterBtn.innerHTML = "Loading...";
    newsLetterBtn.disabled = true;
}
const resetBtn = () => {
    isLoading = false;
    newsLetterBtn.innerHTML = "Subscribe";
    newsLetterBtn.disabled = false;
}

subsForm.addEventListener("submit", async e => {
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
        disableBtn();

        const res = await fetch("https://apis-dev.approveage.com/client/subscribe-to-news-letter", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ email: e.target.email.value })
        });
        const data = await res.json();
        if (data.status === 200) {
            // e.target.email.value = '';
            console.log(data.message)
            resetBtn();
            message.innerHTML = "You have successfully subscribed to our newsletter";
            subsForm.reset();
            subsForm.disable = true;
        }

    }


})

const fieldset = document.querySelector("#subs-form-field");
