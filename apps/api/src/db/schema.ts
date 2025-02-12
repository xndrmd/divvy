import {
  integer,
  pgTable,
  varchar,
  numeric,
  boolean,
  date,
  timestamp,
  serial,
  //bytea,
  text,
} from "drizzle-orm/pg-core";

// 1. User
export const User = pgTable("User", {
  id: serial("id").primaryKey(),
  username: varchar("username", { length: 30 }).notNull(),
  password: varchar("password", { length: 50 }).notNull(),
});

// 2. Category
export const Category = pgTable("Category", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
});

// 3. Group
export const Group = pgTable("Group", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
});

// 4. Period
export const Period = pgTable("Period", {
  id: serial("id").primaryKey(),
  group_id: integer("group_id")
    .notNull()
    .references(() => Group.id),
  start_date: date("start_date").
    notNull()
    .defaultNow(),
  end_date: date("end_date").notNull(),
});

// 5. Expense
export const Expense = pgTable("Expense", {
  id: serial("id").primaryKey(),
  name: varchar("name", { length: 50 }).notNull(),
  date: timestamp()
    .notNull()
    .defaultNow(),
  user_id: integer("user_id"
    //comment: "The one who registered the expense",
  )
    .notNull()
    .references(() => User.id),
  period_id: integer("period_id")
    .notNull()
    .references(() => Period.id),
  category_id: integer("category_id")
    .notNull()
    .references(() => Category.id),
  amount: numeric("amount", { precision: 9, scale: 2 }).notNull(),
  //receipt: bytea("receipt"),
  comment: text("comment"),
});

// 6. Contribution
export const Contribution = pgTable("Contribution", {
  expense_id: integer("expense_id")
    .notNull()
    .references(() => Expense.id),
  user_id: integer("user_id" /*comment: "Contributor"*/ )
    .notNull()
    .references(() => User.id),
  is_percentage: boolean("is_percentage").notNull(),
  contribution_made: numeric("contribution_made", {
    precision: 9,
    scale: 2,
  }).notNull(),
  balance: numeric("balance", { precision: 9, scale: 2 }).notNull(),
});

// 7. Debt
export const Debt = pgTable("Debt", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => User.id),
  period_id: integer("period_id")
    .notNull()
    .references(() => Period.id),
  final_balance: numeric("final_balance", { precision: 9, scale: 2 }).notNull(),
});

// 8. Card
export const Card = pgTable("Card", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id", /*comment: "owner"*/)
    .notNull()
    .references(() => User.id),
  name: varchar("name", { length: 50 }).notNull(),
  number: varchar("number", { length: 19 /*comment: "at least last 4"*/}),
});

// 9. User_Group
export const User_Group = pgTable("User_Group", {
  id: serial("id").primaryKey(),
  user_id: integer("user_id")
    .notNull()
    .references(() => User.id),
  group_id: integer("group_id")
    .notNull()
    .references(() => Group.id),
  default_quota: numeric("default_quota", {
    precision: 5,
    scale: 2,
    //comment: "5 & 2 -> 100.00%",
  }).notNull(),
});

// 10. User_Group_Category
export const User_Group_Category = pgTable("User_Group_Category", {
  user_id: integer("user_id")
    .notNull()
    .references(() => User.id),
  group_id: integer("group_id")
    .notNull()
    .references(() => Group.id),
  category_id: integer("category_id")
    .notNull()
    .references(() => Category.id),
  default_quota: numeric("default_quota", { precision: 5, scale: 2 }).notNull(),
});