
// 👉 TASK 1- Select the following elements from the DOM:

// A- BUTTONS
const launchButton = document.querySelector('#launchButton')
const confirmButton = document.querySelector('#confirmButton')
const cancelButton = document.querySelector('#cancelButton')

// B- MESSAGES
const successMessage = document.querySelector('.success')
const failureMessage = document.querySelector('.failure')

// C- MODAL
const modal = document.querySelector('.modal')


// 👉 TASK 2- Demo handling click events on button#launchButton, using:
//  A- HTML inside index.html
//  B- The DOM's element.onclick attribute
//  C- element.addEventListener('click', callback)
launchButton.onclick = () => console.log('hi there!');

launchButton.addEventListener('click', (evt) => {
    console.log(`
        event type: ${evt.type}
        event target: ${evt.target.nodeName}
    `)
})

// 👉 TASK 3- Create a function that launches!
// It should open the confirmation modal.
// Add it as an event listener for click events on the launch button.
// Create a function:
// 1. : function declaration: function funcName() {} HOISTED 
// 2. : function expression: const funcName = () => {} NOT HOISTED
function launch() {
    openModal();
}
launchButton.addEventListener('click', launch) // <= not invoked yet, just when it is clicked! 

// 👉 TASK 4- Create a function to confirm the launch.
// It should close the modal and display a success report.
// Add it as a listener for clicks on the confirmation button.
function confirm() {
    closeModal();
    showSuccessReport();
}
confirmButton.addEventListener('click', confirm)

// 👉 TASK 5- Create a function to cancel the launch.
// It should close the modal and display a failure report.
// Add it as a listener for clicks on the cancellation button.
function cancel() {
    closeModal();
    showFailureReport();
}
cancelButton.addEventListener('click', cancel)

// 👉 TASK 6- Create a function that closes the modal if
// the user hits the Escape key on their keyboard.
// Add it as an event listener for 'keydown' events on document.
function escape(event) {       // this works with () empty too. why?
    if (event.key === 'Escape') closeModal()
}
document.addEventListener('keydown', escape) // why is this crossed out?

// 👉 TASK 7- Add to ALL ELEMENTS ON THE PAGE an event listener for click events.
// It should console.log the target 🎯 of the event.
// It should also console.log the CURRENT target 🧭 of the event.
// Play with stopPropagation and stopImmediatePropagation.
document
    .querySelectorAll('*') // grab all elements
    .forEach(e => e.addEventListener('click', evt => {
        console.log('🎯 target        ', evt.target);
        console.log('🧭 current target', evt.target);
        console.log('\n');
    }))
// modal.addEventListener('click', evt => {
//     console.log('Should not pass');
//     evt.stopPropagation()
// })

// 👉 TASK 8- [STRETCH] Create helper functions to make the code
// more readable in tasks 3, 4, 5, 6
function openModal() {
    modal.classList.remove('off'); // Removes the 'off' class, making the modal visible
}

function closeModal() {
    modal.classList.add('off'); // Adds the 'off' class, hiding the modal
}

function showSuccessReport() {
    successMessage.classList.remove('off'); // Shows the success message by removing the 'off' class
}

function showFailureReport() {
    failureMessage.classList.remove('off'); // Shows the failure message by removing the 'off' class
}

function killReports() {
    successMessage.classList.add('off'); // Hides the success message by adding the 'off' class
    failureMessage.classList.add('off'); // Hides the failure message by adding the 'off' class
}


// 👉 TASK 9- [STRETCH] Using the mousemove event on 'document',
// log to the console the X and Y coordinates
// of the mouse pointer, as it moves over the screen.

// disabled, made console too busy :)

// document.addEventListener("mousemove", evt => {
//   console.log(`x: ${evt.clientX}...y: ${evt.clientY}`);
// })