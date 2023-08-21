const inputField = document.querySelector('.input-field');
const outputArea = document.querySelector('.output');
//simple way to check if it is desktop or mobile
const isDesktop = window.innerWidth > 768;

// This code handles all of the input field stuff
inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        event.preventDefault();
        const command = inputField.value.toLowerCase().trim();
        inputField.value = '';

        // Handles different commands and redirects

        // link back to main website page
        if (command === 'home' || command === 'main') {
            window.location.href = '../index.html';

            // some memes
        } else if (command === 'top_secret') {
            window.location.href = 'https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley';

            // link to reddit
        } else if (command === 'heil_spez') {
            window.location.href = 'https://www.reddit.com/user/halfrican420';

            // Brings up a card page with all of my social medias on it, mostly for social junk
        } else if (command === 'social') {
            //window.location.href = '';


            // Redirects to github page
        } else if (command === 'h4ck3r_m0d3') {
            //window.location.href = '';

            // link to baked blend ig
        } else if (command === 'filler') {
            //window.location.href = '';
            // outputArea.innerHTML += `';

            // link to baked blend ig
        } else if (command === 'baked') {
            window.location.href = 'https://www.instagram.com/baked.blend/';

            // Yeahhh this is the help command.. if you're reading this deal with it because I have to aswell. It's obviously super inifient.. but its MY website not yours lol. Code it yourself
        } else if (command === 'help') {
            outputArea.innerHTML += '<p><strong>Oh, so you need help huh? very well.. I\'ll give in...</strong><br><br><strong class="halp">home or main</strong>: will bring you to the main landing page of my website<br><strong class="halp">social</strong>: Redirects to a page showing my various social media accounts to get in conntact with me <br> <strong class="halp">baked</strong>: Directly sends you to my art instagram <br><strong class="halp">heil_spez</strong>: You really wanna see my reddit? Welp, good luck.<br><strong class="halp">top_secret</strong>: Did you not read that?? It\'s <strong>TOP. SECRET.</strong> Understand?<br></p>';
        } else {
            outputArea.innerHTML += `<p>Command not recognized: ${command}. Are you sure you typed that correctly?</p>`;
        }
    }
});


document.addEventListener('DOMContentLoaded', function () {
    //  typing effect for the message
    const welcomeMessage = "It seems you've stumbled apon my personal terminal.. Please, enter the command I gave you below to continue on to the correct path... Good luck, it was a pleasure meeting you <3";
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

// Quick little add on snip that will automatically place the cursor in the input if on desktop
if (isDesktop) {
    var input = document.getElementById('termIn');
    input.focus();
    input.select();
}
