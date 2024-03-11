// Constants for ticket costs
const GENERAL_ADMISSION_TICKET_COST = 20;
const CHILD_AND_SENIOR_TICKET_COST = 10;
const MORINGA_DISCOUNT = 3;

// Function to handle purchasing ticket
function buyTicket() {
    // Prompt user for age
    const age = prompt('What is your age?');
    console.log(age);

    // Get the base ticket cost based on age
    let cost = getBaseTicketCost(age);
    console.log("base cost: " + cost);

    // Prompt user for moringa school attendance
    const isMoringaStudent = prompt('Are you a Moringa School student?').toLowerCase();
    console.log(isMoringaStudent);

    // Apply moringa discount if applicable
    cost = applyMoringaDiscount(cost, isMoringaStudent);

    // Display ticket cost to the user
    alert('Your ticket will cost: $' + cost);
}

// Function to get the base ticket cost based on age
function getBaseTicketCost(age) {
    if ((age <= 12) || (age >= 65)) {
        return CHILD_AND_SENIOR_TICKET_COST;
    }
    return GENERAL_ADMISSION_TICKET_COST;
}

// Function to apply moringa discount
function applyMoringaDiscount(cost, isMoringaStudent) {
    if ((isMoringaStudent === 'yes') || (isMoringaStudent === 'y')) {
        console.log("apply discount");
        return cost - MORINGA_DISCOUNT;
    }
    return cost;
}
