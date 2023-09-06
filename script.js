// const dobInput = document.getElementById("dob");
// const calculateBtn = document.getElementById("calculate-btn");
// const resultDiv = document.getElementById("result");

// calculateBtn.addEventListener("click", function() {

//     const dob = new Date(dobInput.value);
//     const ageInMs = Date.now() - dob.getTime();
//     const ageDate = new Date (ageInMs);
//     const age = Math.abs(ageDate.getUTCFullYear() - 1970);


//     resultDiv.innerHTML = `Your age is ${age} years.`; 

    
// })


// Get references to the HTML elements
const dobInput = document.getElementById("dob");
const calculateBtn = document.getElementById("calculate-btn");
const resultDiv = document.getElementById("result");

// Function to calculate age
function calculateAge() {
    const dob = new Date(dobInput.value);
    const currentDate = new Date();
    
    if (isNaN(dob)) {
        resultDiv.textContent = "Please enter a valid date of birth.";
    } else {
        const ageInMilliseconds = currentDate - dob;
        const ageInYears = Math.floor(ageInMilliseconds / (365 * 24 * 60 * 60 * 1000));
        resultDiv.textContent = `Your Age: ${ageInYears} years`;
    }
}

// Add a click event listener to the "Calculate Age" button
calculateBtn.addEventListener("click", calculateAge);
