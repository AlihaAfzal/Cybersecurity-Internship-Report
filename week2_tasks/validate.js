const validator = require('validator');

// This is the input we want to validate (an example email)
const email = 'test@example.com'; 

// This is a second input that is NOT a valid email
const badEmail = 'invalid-email.com';

// The validator.isEmail() function checks if the string is a valid email format.
// It will return 'true' or 'false'.
if (validator.isEmail(email)) {
  console.log(`"${email}" is a valid email address.`);
} else {
  console.log(`"${email}" is NOT a valid email address.`);
}

if (validator.isEmail(badEmail)) {
  console.log(`"${badEmail}" is a valid email address.`);
} else {
  console.log(`"${badEmail}" is NOT a valid email address.`);
}