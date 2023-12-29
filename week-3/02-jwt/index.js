const jwt = require('jsonwebtoken');
const jwtPassword = 'secret';
const zod = require('zod');

const UserSchema = zod.object({
    email : zod.string().email(),
    password: zod.string().min(6)
})

function signJwt(username, password) {
    let userData = {'email': username, 'password': password}
    try{
        let validateData = UserSchema.parse(userData);
        //return validateData;
        let token = jwt.sign({  username }, jwtPassword);
        return token;
    }catch(error){
        return null;
    }
}

function verifyJwt(token) {
    try{
        const valueVerified = jwt.verify(token,jwtPassword);
        return true;
    }catch(error){
        return false;
    }
    return false;

}


function decodeJwt(token) {
    if( jwt.decode(token)){
        return true;
    }else{
        return false;
    }
}


module.exports = {
  signJwt,
  verifyJwt,
  decodeJwt,
  jwtPassword,
};


/**
 * Generates a JWT for a given username and password.
 *
 * @param {string} username - The username to be included in the JWT payload.
 *                            Must be a valid email address.
 * @param {string} password - The password to be included in the JWT payload.
 *                            Should meet the defined length requirement (e.g., 6 characters).
 * @returns {string|null} A JWT string if the username and password are valid.
 *                        Returns null if the username is not a valid email or
 *                        the password does not meet the length requirement.
 */


/**
 * Verifies a JWT using a secret key.
 *
 * @param {string} token - The JWT string to verify.
 * @returns {boolean} Returns true if the token is valid and verified using the secret key.
 *                    Returns false if the token is invalid, expired, or not verified
 *                    using the secret key.
 */

/**
 * Decodes a JWT to reveal its payload without verifying its authenticity.
 *
 * @param {string} token - The JWT string to decode.
 * @returns {object|false} The decoded payload of the JWT if the token is a valid JWT format.
 *                         Returns false if the token is not a valid JWT format.
 */