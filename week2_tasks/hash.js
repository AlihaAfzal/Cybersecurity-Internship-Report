const bcrypt = require('bcrypt');
const saltRounds = 10;

// The password we want to hash
const myPassword = 'MySecretPassword123';

// bcrypt.hash() takes two arguments: the password and the number of salt rounds
// It returns a promise that resolves with the hashed password
bcrypt.hash(myPassword, saltRounds, (err, hash) => {
  if (err) {
    console.error('Error hashing password:', err);
    return;
  }
  
  // The hashed password will be a long string of characters
  console.log('Original password:', myPassword);
  console.log('Hashed password:', hash);
  
  // Now, let's compare the original password with the hashed one
  // bcrypt.compare() takes two arguments: the password and the hashed password
  // It returns a promise that resolves to 'true' or 'false'
  bcrypt.compare(myPassword, hash, (err, result) => {
    if (err) {
      console.error('Error comparing password:', err);
      return;
    }
    
    // The result will be 'true' if the passwords match, 'false' otherwise
    console.log('Password comparison result:', result);
  });
});