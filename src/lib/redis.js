'use strict';
const envSchema = require('env-schema');
const { config: envConfig } = require('../../config/environmentVariables');
const config = envSchema(envConfig);
const { REDIS_HOST, REDIS_PORT, REDIS_IP_FAMILY, REDIS_PASSWORD } = config;
const fastifyRedis = require('@fastify/redis');

const redisClientConfig = { 
    host: REDIS_HOST, 
    password: REDIS_PASSWORD,
    port: REDIS_PORT,
    family: REDIS_IP_FAMILY
};
const redisClientRegister = async (fastify) => {
    await fastify.register(require('@fastify/redis'), redisClientConfig).ready((error) => {
        if (error) {
          console.error('Redis Server No Found.');
        }
      });
};

const redisClient = (fastify) => {
    const { redis } = fastify;
    if (redis == undefined) {
        redisClientRegister(fastify);
        const { redis } = fastify;
        return redis;
    }
    return redis;
};

module.exports = {
    redisClientRegister,
    redisClient
};