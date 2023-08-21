const inputField = document.querySelector('.input-field');
const outputArea = document.querySelector('.output');
// simple way to check if it is desktop or mobile
const isDesktop = window.innerWidth > 768;
// Allows for follow up information to be input
let awaitingFollowUpInput = false;
// Little toggle to change up the dialog
let lightMode = false;
// Keeps track of whether an html tag is open or closed for the type message function
let tagOpened = false;
// Toggle typing speed
let typeSpeed = 40;
// Janky way to handle follow up types
let FUname = false;
let FUspeed = false;
// Custom escape map
const escapeMap = {
    '\\b': '<strong>',
    '\\e': '</strong>',
    '\\i': '<strong class="halp">',
    '\\h': '<strong class="heart">',
    '\\f': '<strong class="tip">',
    '\\n': '<br><br>'
};
// tracks type message activity
let isTyping = false;
//Implementing command history like a normal terminal
let commandHistory = [];
let historyIndex = -1;

document.addEventListener('DOMContentLoaded', function () {
    //  typing effect for the message
    const welcomeMessage = "\\bIt seems you've stumbled apon my personal terminal.. Please, enter the command I gave you below to continue on to the correct path... Good luck, it was a pleasure meeting you \\e\\h<3\\e \\n \\f(Feel free to use the help command to see all of your options!)\\e";
    const welcomeMessageElement = document.querySelector('.welcome-message');

    function typeMessage(text, element) {
        isTyping = true;
        let i = 0;
        let currentEscape = '';
        let tagContent = '';
        let isEscaping = false;

        const typingInterval = setInterval(function () {
            if (i < text.length) {
                const char = text.charAt(i);

                if (char === '\\' && !isEscaping) {
                    isEscaping = true;
                    currentEscape = char;
                } else if (isEscaping) {
                    currentEscape += char;
                    if (escapeMap[currentEscape]) {
                        tagContent += escapeMap[currentEscape];
                        currentEscape = '';
                        isEscaping = false;
                    }
                } else {
                    tagContent += char;
                }

                element.innerHTML = tagContent;
                window.scrollTo(0, document.body.scrollHeight);
                i++;

            } else {
                isTyping = false;
            }
        }, typeSpeed); // Typing Speed
    }

    typeMessage(welcomeMessage, welcomeMessageElement);


    // Quick little add on snip that will automatically place the cursor in the input if on desktop
    if (isDesktop) {
        var input = document.getElementById('termIn');
        input.focus();
        input.select();
    }

    // This code handles all of the input field stuff
    inputField.addEventListener('keydown', function (event) {
        // makes sure the typeMessage function has stopped
        if (isTyping) {
            event.preventDefault();
            return;
        }

        // Code handling the arrow navigation
        if (event.key === 'ArrowUp' || event.key === 'ArrowDown') {
            event.preventDefault();

            if (commandHistory.length > 0) {
                if (event.key === 'ArrowUp' && historyIndex < commandHistory.length - 1) {
                    historyIndex++;
                } else if (event.key === 'ArrowDown' && historyIndex > -1) {
                    historyIndex--;
                }

                if (historyIndex > -1) {
                    inputField.value = commandHistory[historyIndex];
                } else {
                    inputField.value = '';
                }
            }

        } else if (event.key === 'Enter') {
            // Automatically jumps to the bottom on enter
            window.scrollTo(0, document.body.scrollHeight);
            // Checks if it's a mobile device and will deselct the input after so the keyboard goes away
            if (!isDesktop) {
                this.blur();
            }

            event.preventDefault();
            const command = inputField.value.toLowerCase().trim();

            //If the command isn't empty it will save the last sent one to an array
            if (command !== '') {
                commandHistory.unshift(command);
                historyIndex = -1; // Resets history index
            }

            inputField.value = '';

            // Handles different commands and redirects

            // Follow up input for setting new username
            if (awaitingFollowUpInput && FUname) {
                // Some fun junk
                // Checks all cases to make sure its valid
                if (command.length <= 5 && command.length > 0 && command !== 'exit' && command !== 'baker') {
                    // Changes user to given name and removes spaces
                    document.getElementById("username").innerHTML = command.replace(' ', '');
                    // Announces in console that it worked
                    typeMessage("Your username is now set to \\i" + command + "\\e!", outputArea);
                    // Returns to main state
                    awaitingFollowUpInput = false;
                    FUname = false;

                    // Exit command to leave without changing
                } else if (command === 'exit') {
                    // Announces this to make it clear
                    typeMessage("Action canceled. Username not changed.", outputArea);
                    // Returns to main state
                    awaitingFollowUpInput = false;
                    FUname = false;

                } else if (command === 'baker') {
                    // lol
                    typeSpeed = 20;
                    typeMessage("My leige, welcome back. Allow me to get things right for you.", outputArea);
                    document.getElementById("username").innerHTML = 'Baker';
                    // Returns to main state
                    awaitingFollowUpInput = false;
                    FUname = false;
                    if (lightMode) {
                        const terminalWindow = document.querySelector('.terminal-window');
                        terminalWindow.classList.toggle('light-mode');
                        lightMode = false;
                    }

                } else {
                    // If case check fails and it wasn't an exit command prints out a warning to let the user know to type a different username or exit the prompt
                    typeMessage("The username you\'ve entered is invalid. Please enter a username under 5 characters long or type \\bEXIT\\e to cancel this opporation.", outputArea);
                }
            } else if (awaitingFollowUpInput && FUspeed) {

                if (command === 'slow') {
                    typeSpeed = 100;
                    awaitingFollowUpInput = false;
                    FUspeed = false;
                    typeMessage("Type speed has been set to \\islow.\\e\\n", outputArea);
                } else if (command === 'medium') {
                    typeSpeed = 40;
                    awaitingFollowUpInput = false;
                    FUspeed = false;
                    typeMessage("Type speed has been set to \\imedium.\\e\\n", outputArea);
                } else if (command === 'fast') {
                    typeSpeed = 20;
                    awaitingFollowUpInput = false;
                    FUspeed = false;
                    typeMessage("Type speed has been set to \\ifast.\\e\\n", outputArea);
                } else if (command === 'exit') {
                    awaitingFollowUpInput = false;
                    FUspeed = false;
                } else {
                    typeMessage("The input you have entered is invalid, please try again or type Exit to cancel.\\n", outputArea);
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
                    typeMessage("\\b So you wanna get in contact then?\\e \\n \\i Instagram\\e: baked.blend\\n\\iSnapchat\\e: jb4339\\n\\iDiscord\\e: Halfrican420 \\n \\iSteam\\e: Halfrican420\\n \\iGithub\\e: Jules3182\\n", outputArea);

                    // Redirects to github page
                } else if (command === 'h4ck3r_m0d3') {
                    window.location.href = 'https://github.com/Jules3182';

                    // fun little command to change the user and help learn some more js
                } else if (command === 'set_user') {
                    typeMessage("Please enter your desired username below.\\n", outputArea);
                    // Sends to follow up input section
                    awaitingFollowUpInput = true;
                    FUname = true;

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
                        typeMessage("You disgust me... Very well, it\'s your eyes not mine. (type it again to toggle it off)\\n", outputArea);
                    } else {
                        typeMessage("My god its about time, thank you. Truly.\\n", outputArea);
                    }
                    // Targets the class terminal-window
                    const terminalWindow = document.querySelector('.terminal-window');
                    // Toggles the light-mode class
                    terminalWindow.classList.toggle('light-mode');
                    // Flip flops the bool to keep track of the currrent mode
                    lightMode = !lightMode;

                    // command to set text typing speed
                } else if (command === 'set_speed') {
                    typeMessage("There are 3 speeds to choose from. Slow, Medium, and Fast. Please enter in one of these values to apply or type \\iEXIT\\e to cancel.\\n", outputArea);
                    awaitingFollowUpInput = true;
                    FUspeed = true;

                } else if (command.includes("yes")) {
                    typeMessage("Don't give me attitude, I'm only trying to help.\\n", outputArea);

                    // Displays my current PC specs
                } else if (command === 'specs') {
                    //outputArea.innerHTML = '';
                    //window.location.href = 'filer.html';

                    // Shows the code from this website
                } else if (command === 'show_code') {
                    outputArea.innerHTML = 'https://github.com/Jules3182/jules3182.github.io/tree/master/terminal';

                    // This is for me to be bale to copyy and quicly make new commands
                } else if (command === 'filler') {
                    //outputArea.innerHTML = '';
                    //window.location.href = 'filer.html';

                    // This is for me to be bale to copyy and quicly make new commands
                } else if (command === 'filler') {
                    //outputArea.innerHTML = '';
                    //window.location.href = 'filer.html';


                    // Yeahhh this is the help command.. if you're reading this deal with it because I have to aswell. It's obviously super inifient.. but its MY website not yours lol. Code it yourself
                } else if (command === 'help') {
                    typeSpeed = 10;
                    typeMessage("\\b Oh, so you need help huh? very well.. I\'ll give in... \\e \\n \\i home\\e or \\i main\\e: will bring you to the main landing page of my website\\n\\isocial\\e: Reads off my various social media accounts to get in contact with me \\n \\ibaked\\e: Directly sends you to my art instagram \\n\\iheil_spez\\e: You really wanna see my reddit? Welp, good luck.\\n\\itop_secret\\e: Did you not read that?? It\'s \\bTOP. SECRET.\\e Understand?\\n\\ih4ck3r_m0d3\\e: This redirects you to my github page\\n\\i set_user\\e: Prompts you to change the username of who is logged in\\n\\iclear\\e: Clears the console\\n\\ilight_mode\\e: Toggles between light and dark mode in the console\\n \\iset_speed\\e: Allows you to adjust the typing speed\\n\\i specs\\e: Shows the specs of my current PC build\\n\\i show_code\\e: Brings you to the code base of this page\\n\\i help\\e: homie... this is help you know what it does\\n", outputArea);
                    typeSpeed = 40;
                    //     \\i COMMAND\\e: DESCRIPTION\\n

                    // Command not recognized state
                } else {
                    typeMessage("Command not recognized: " + command + ". Are you sure you typed that correctly?\\n", outputArea);
                    setTimeout(function () {
                        typeMessage("You can also always enter help to get a list of commands.", outputArea);
                    }, 5000);
                }
            }
        }
    });
});
