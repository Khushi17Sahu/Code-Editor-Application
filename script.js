
const codeEditor = document.querySelector('.code-editor');
const copyButton = document.querySelector('.controlbutton--copy');
const saveButton = document.querySelector('.controlbutton--save');
const lockButton = document.querySelector('.controlbutton--lock');
let isLocked = false;

// Function to copy code to the clipboard
copyButton.addEventListener('click', () => {
    const codeToCopy = codeEditor.innerText;
    navigator.clipboard.writeText(codeToCopy)
        .then(() => {
            alert('Code copied to clipboard!');
        })
        .catch((error) => {
            console.error('Copy failed: ', error);
        });
});

// Function to save code 
saveButton.addEventListener('click', () => {
    alert('Code saved!');
});

// Function to on/off code editor's lock/unlock state
lockButton.addEventListener('click', () => {
    isLocked = !isLocked;
    codeEditor.contentEditable = !isLocked;
    lockButton.textContent = isLocked ? 'Unlock' : 'Lock';
});

// Basic indentation 
codeEditor.addEventListener('keydown', (event) => {
    if (event.key === 'Tab') {
        event.preventDefault();
        const cursorPosition = codeEditor.selectionStart;
        const code = codeEditor.textContent;
        codeEditor.textContent = code.substring(0, cursorPosition) + '    ' + code.substring(cursorPosition);
        codeEditor.setSelectionRange(cursorPosition + 4, cursorPosition + 4);
    }
});
