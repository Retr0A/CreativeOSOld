function DisplayOutput() {

    var inputValue = document.getElementById('inputValue');
    
    var outputFrame = document.getElementById('outputFrame');

    if (inputValue.value == 'help') {

        outputFrame.src = 'commands/help.html';

    } else if (inputValue.value == 'files') {

        outputFrame.src = 'commands/files.html';

    } else if (inputValue.value == 'about') {

        outputFrame.src = 'commands/about.html';

    } else if (inputValue.value == 'clear') {

        outputFrame.src = 'commands/clear.html';

    } else if (inputValue.value == 'write') {

        outputFrame.src = 'commands/write.html';

    }  else if (inputValue.value == 'test') {

        outputFrame.src = 'commands/test.html';

    // files

    } else if (inputValue.value == 'Text.text') {

        outputFrame.src = 'commands/files/Text.text.html';
    
    } else {

        outputFrame.src = 'commands/notfound.html';

    }

    inputValue.value = '';
}

document.addEventListener('contextmenu', event => event.preventDefault());