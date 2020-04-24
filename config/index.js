const dbuser = 'gokul';
const dbpassword = 'hellothere123';

const MONGODB_URI = `mongodb+srv://${dbuser}:${dbpassword}@cluster0-uehh0.mongodb.net/test?retryWrites=true&w=majority`

module.exports = MONGODB_URI;