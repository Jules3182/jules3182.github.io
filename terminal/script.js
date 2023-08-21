const inputField = document.querySelector('.input-field');
const outputArea = document.querySelector('.output');
// simple way to check if it is desktop or mobile
const isDesktop = window.innerWidth > 768;
// Allows for follow up information to be input
let awaitingFollowUpInput = false;
// Little toggle to change up the dialog
let lightMode = false;

// This code handles all of the input field stuff
inputField.addEventListener('keydown', function (event) {
    if (event.key === 'Enter') {
        // Automatically jumps to the bottom on enter
        window.scrollTo(0, document.body.scrollHeight);

        event.preventDefault();
        const command = inputField.value.toLowerCase().trim();
        inputField.value = '';

        // Handles different commands and redirects

        // Follow up input for setting new username
        if (awaitingFollowUpInput) {
            // Some fun junk
            // Checks all cases to make sure its valid
            if (command.length <= 5 && command.length > 0 && command !== 'exit' && command !== 'baker') {
                // Changes user to given name and removes spaces
                document.getElementById("username").innerHTML = command.replace(' ', '');
                // Announces in console that it worked
                outputArea.innerHTML += '<p>Your username is now set to <strong class="halp">' + command + '</strong>!</p>';
                // Returns to main state
                awaitingFollowUpInput = false;

                // Exit command to leave without changing
            } else if (command === 'exit') {
                // Announces this to make it clear
                outputArea.innerHTML += '<p>Action canceled. Username not changed.</p>';
                // Returns to main state
                awaitingFollowUpInput = false;

            } else if (command === 'baker') {
                // lol
                outputArea.innerHTML += '<p>My leige, welcome back. Allow me to get things right for you.</p>';
                document.getElementById("username").innerHTML = 'Baker';
                // Returns to main state
                awaitingFollowUpInput = false;
                if (lightMode) {
                    const terminalWindow = document.querySelector('.terminal-window');
                    terminalWindow.classList.toggle('light-mode');
                    lightMode = false;
                }

            } else {
                // If case check fails and it wasn't an exit command prints out a warning to let the user know to type a different username or exit the prompt
                outputArea.innerHTML += '<p>The username you\'ve entered is invalid. Please enter a username under 5 characters long or type <strong>EXIT</strong> to cancel this opporation.</p>';
            }
        } else {

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
                window.location.href = 'https://github.com/Jules3182';

                // fun little command to change the user and help learn some more js
            } else if (command === 'set_user') {
                outputArea.innerHTML += 'Please enter your desired username below.';
                // Sends to follow up input section
                awaitingFollowUpInput = true;

                // link to baked blend ig
            } else if (command === 'baked') {
                window.location.href = 'https://www.instagram.com/baked.blend/';

                // Simple clear console command
            } else if (command === 'clear') {
                outputArea.innerHTML = '';

                // Toggle for light mode
            } else if (command === 'light_mode') {
                // Checks to see whats active to give a proper snarky response
                if (!lightMode) {
                    outputArea.innerHTML += '<p>You disgust me... Very well, it\'s your eyes not mine. (type it again to toggle it off)</p>';
                } else {
                    outputArea.innerHTML += '<p>My god its about time, thank you. Truly.</p>';
                }
                // Targets the class terminal-window
                const terminalWindow = document.querySelector('.terminal-window');
                // Toggles the light-mode class
                terminalWindow.classList.toggle('light-mode');
                // Flip flops the bool to keep track of the currrent mode
                lightMode = !lightMode;



            } else if (command === 'filler') {
                //outputArea.innerHTML = '';
                //window.location.href = 'filer.html';

            } else if (command === 'filler') {
                //outputArea.innerHTML = '';
                //window.location.href = 'filer.html';

                // This is for me to be bale to copyy and quicly make new commands
            } else if (command === 'filler') {
                //outputArea.innerHTML = '';
                //window.location.href = 'filer.html';


                // Yeahhh this is the help command.. if you're reading this deal with it because I have to aswell. It's obviously super inifient.. but its MY website not yours lol. Code it yourself
            } else if (command === 'help') {
                outputArea.innerHTML += '<p><strong>Oh, so you need help huh? very well.. I\'ll give in...</strong><br><br><strong class="halp">home</strong>: will bring you to the main landing page of my website<br><strong class="halp">main</strong>: Same as home<br><strong class="halp">social</strong>: Redirects to a page showing my various social media accounts to get in conntact with me <br> <strong class="halp">baked</strong>: Directly sends you to my art instagram <br><strong class="halp">heil_spez</strong>: You really wanna see my reddit? Welp, good luck.<br><strong class="halp">top_secret</strong>: Did you not read that?? It\'s <strong>TOP. SECRET.</strong> Understand?<br><strong class="halp">h4ck3r_m0d3</strong>: This redirects you to my github page<br><strong class="halp">set_user</strong>: Prompts you to change the username of who is logged in<br><strong class="halp">clear</strong>: Clears the console<br><strong class="halp">light_mode</strong>: Toggles between light and dark mode in the console<br></p>';
            } else {
                outputArea.innerHTML += `<p>Command not recognized: ${command}. Are you sure you typed that correctly?</p>`;
            }
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
