const inputField = document.querySelector('.input-field');
const outputArea = document.querySelector('.output');

inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = inputField.value.toLowerCase().trim();
        inputField.value = '';

        // Handle different commands and redirects

            // link back to main website page
        if (command === 'home' || command === 'main') {
            window.location.href = '../index.html';

            // some memes
        }else if (command === 'top_secret') {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';

            // link to reddit
        }else if (command === 'heil_spez') {
            window.location.href = 'https://www.reddit.com/user/halfrican420';

            // this is for me to quickly make more
        }else if (command === 'filler') {
            //window.location.href = '';
            // outputArea.innerHTML += `';

            // link to baked blend ig
        } else if (command === 'baked') {
            window.location.href = 'https://www.instagram.com/baked.blend/';
        } else {
    outputArea.innerHTML += `<p>Command not recognized: ${command}. Are you sure you typed that correctly?</p>`;
}
}
});


document.addEventListener('DOMContentLoaded', function () {
    //  typing effect for the message
    const welcomeMessage = "It seems you've stumbled apon my terminal.. Please, enter the command given below to continue on to the correct path... Good luck, it was a pleasure meeting you <3";
    const welcomeMessageElement = document.querySelector('.welcome-message');

    function typeMessage(text, element) {
        let i = 0;
        const typingInterval = setInterval(function () {
            if (i < text.length) {
                element.innerHTML += text.charAt(i);
                i++;
            } else {
                clearInterval(typingInterval);
            }
        }, 40); // Typing speed
    }

    typeMessage(welcomeMessage, welcomeMessageElement);
});
