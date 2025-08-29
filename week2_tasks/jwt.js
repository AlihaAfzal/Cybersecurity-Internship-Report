const jwt = require('jsonwebtoken');

// A "payload" is the data we want to store in the token.
// Here, we're just using a user ID.
const payload = {
  id: 'user123',
  username: 'Aliha'
};

// This is a secret key that only the server knows.
// It's used to sign the token and verify it later.
const secretKey = 'mySuperSecretKey';

// To create a token, we use jwt.sign().
// It takes the payload and the secret key.
const token = jwt.sign(payload, secretKey);

console.log('Generated JWT:', token);

// To verify the token, we use jwt.verify().
// It takes the token and the secret key.
// If the token is valid, it will decode the payload.
jwt.verify(token, secretKey, (err, decodedPayload) => {
  if (err) {
    console.error('Error verifying token:', err);
    return;
  }
  
  console.log('Decoded Payload:', decodedPayload);
});