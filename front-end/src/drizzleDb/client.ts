import { drizzle } from 'drizzle-orm/node-postgres';
import { config } from '../config';

const drizzleClient = drizzle(config.drizzleDatabaseUrl);

export default drizzleClient;
