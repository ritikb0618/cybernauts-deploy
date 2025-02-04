require('dotenv').config();
const bcrypt = require('bcrypt');

const hashfnc=async () => {
    const pass = process.env.ADMIN.trim();
    const hash = await bcrypt.hash(pass, 10);
    return hash
};

module.exports=hashfnc()