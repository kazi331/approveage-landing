const form = document.querySelector('form');
const btn = document.querySelector('#submit-btn');
const message = document.querySelector('#message');
const fieldset = document.querySelector("fieldset");

let isLoading = false;

const disableBtn = () => {
    isLoading = true;
    btn.innerHTML = "Loading...";
    btn.disabled = true;
}
const resetBtn = () => {
    isLoading = false;
    btn.innerHTML = "Subscribe";
    btn.disabled = false;
}

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
        disableBtn();
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
                resetBtn();
                message.innerText = "You have successfully subscribed to our newsletter";
                form.reset();
                fieldset.disabled = true;
            }

        } catch (err) {
            message.innerText = "An error occured, please try again later";
            message.style.color = 'red';
            resetBtn();

        }
    }


})

