var redis = require('node-redis-promise');
redis.connect();

redis.get("olympus search", true).then((value) => {
    console.log(value);
})
