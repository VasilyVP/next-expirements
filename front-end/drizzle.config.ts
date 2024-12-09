import { config } from '@/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
    out: './drizzle',
    schema: './src/drizzleDb/schema.ts',
    dialect: 'postgresql',
    dbCredentials: {
        url: config.drizzleDatabaseUrl,
    },
});
