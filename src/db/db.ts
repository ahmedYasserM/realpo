import { drizzle, NodePgDatabase } from "drizzle-orm/node-postgres";
import { Pool } from "pg";
import "dotenv/config";
import * as schema from "./schema"

const pool = new Pool({
  connectionString: process.env.POSTGRES_URL!,
});

const db: NodePgDatabase<typeof schema> = drizzle(pool);

export default db;
