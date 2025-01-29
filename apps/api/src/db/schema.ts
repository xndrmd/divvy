import { integer, pgTable, varchar } from "drizzle-orm/pg-core";

export const category = pgTable("category", {
  id: integer().primaryKey(),

});



/*

category
- id
- name
- 

user
- id
- username
- password
# - email

group
- id
- name

user_group
- user_id
- group_id
- is_admin

expense
- id
- name
- date
- category_id

group_expense
- group_id
- expense_id


*/