import Redis from 'ioredis';
import config from '../config/config';
import logger from '../utils/logger';

class RedisService {
  private static instance: RedisService;
  private client: Redis;

  private constructor() {
    this.client = new Redis(config.redis.url);

    this.client.on('error', (error) => {
      logger.error('Redis error:', error);
    });

    this.client.on('connect', () => {
      logger.info('Connected to Redis');
    });
  }

  public static getInstance(): RedisService {
    if (!RedisService.instance) {
      RedisService.instance = new RedisService();
    }
    return RedisService.instance;
  }

  public getClient(): Redis {
    return this.client;
  }

  public async set(key: string, value: string, expireTime?: number): Promise<'OK'> {
    if (expireTime) {
      return this.client.set(key, value, 'EX', expireTime);
    }
    return this.client.set(key, value);
  }

  public async get(key: string): Promise<string | null> {
    return this.client.get(key);
  }

  public async del(key: string): Promise<number> {
    return this.client.del(key);
  }

  public async flushAll(): Promise<'OK'> {
    return this.client.flushall();
  }
}

export default RedisService.getInstance();
