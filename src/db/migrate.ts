import { migrate } from "drizzle-orm/node-postgres/migrator";
import db from "./db";

async function main() {
  console.log("Migration Started!");
  await migrate(db, { migrationsFolder: "mirations" });
  console.log("Migration Finished!");
  process.exit(0);
}

main().catch((error) => {
  console.error(error);
  process.exit(0);
});
