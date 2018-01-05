const config = require('./config.json')

const { ShardingManager } = require('discord.js');
const shard = new ShardingManager('./app.js', {
  token: config.token,
  autoSpawn: true
});

shard.spawn(2);

shard.on('launch', shard => console.log(`[SHARD] Shard ${shard.id}/${shard.totalShards}`));


