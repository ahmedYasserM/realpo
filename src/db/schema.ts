import { pgTable, serial, varchar } from "drizzle-orm/pg-core";

export const UserTable = pgTable("users", {
  id: serial("id").notNull(),
  name: varchar("name").notNull(),
});
