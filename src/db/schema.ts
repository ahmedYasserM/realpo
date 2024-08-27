import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

const UserTable = pgTable("users", {
  id: serial("id").notNull(),
  name: varchar("name").notNull(),
});
