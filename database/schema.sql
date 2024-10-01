set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "customers" (
  "username" text,
  "hashedPassword" text,
  "customerId" serial PRIMARY KEY,
  "createdAt" timestamptz
);

CREATE TABLE "items" (
  "name" text,
  "imageUrl" text,
  "qtyInStock" integer,
  "size" text,
  "category" text,
  "itemId" serial PRIMARY KEY,
  "material" text,
  "price" integer,
  "description" text
);

CREATE TABLE "cart" (
  "customerId" integer,
  "itemId" integer,
  "size" text
);

ALTER TABLE "cart" ADD FOREIGN KEY ("customerId") REFERENCES "customers" ("customerId");

ALTER TABLE "cart" ADD FOREIGN KEY ("itemId") REFERENCES "items" ("itemId");
