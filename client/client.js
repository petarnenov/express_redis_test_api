const redis = require('redis');
const client = redis.createClient();
client.on('connect',()=>console.log('Connect to RedisDB...'));
module.exports =  client;

