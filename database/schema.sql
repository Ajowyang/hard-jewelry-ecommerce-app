set client_min_messages to warning;

-- DANGER: this is NOT how to do it in the real world.
-- `drop schema` INSTANTLY ERASES EVERYTHING.
drop schema "public" cascade;

create schema "public";

CREATE TABLE "customers" (
  "username" text,
  "hashedPassword" text,
  "customerId" serial PRIMARY KEY,
  "createdAt" timestamptz DEFAULT now() NOT NULL
);

CREATE TABLE "items" (
  "name" text,
  "imageUrl" text,
  "category" text,
  "itemId" serial PRIMARY KEY,
  "description" text,
  "lowestPrice" text
);

CREATE TABLE "cart" (
  "cartItemId" serial PRIMARY KEY,
  "customerId" integer,
  "itemId" integer,
  "size" text,
  "material" text,
  "qty" integer
);

CREATE TABLE "sizes" (
  "itemId" integer,
  "size" text
);

CREATE TABLE "materials" (
  "itemId" integer,
  "material" text
);

CREATE TABLE "listingImages" (
  "itemId" integer,
  "imageURL" text
);

CREATE TABLE "inventory" (
  "itemId" integer,
  "size" text,
  "material" text,
  "qtyInStock" integer,
  "price" integer
);

ALTER TABLE "cart" ADD FOREIGN KEY ("customerId") REFERENCES "customers" ("customerId");

ALTER TABLE "cart" ADD FOREIGN KEY ("itemId") REFERENCES "items" ("itemId");

ALTER TABLE "sizes" ADD FOREIGN KEY ("itemId") REFERENCES "items" ("itemId");

ALTER TABLE "materials" ADD FOREIGN KEY ("itemId") REFERENCES "items" ("itemId");

ALTER TABLE "listingImages" ADD FOREIGN KEY ("itemId") REFERENCES "items" ("itemId");

ALTER TABLE "inventory" ADD FOREIGN Key ("itemId") REFERENCES "items" ("itemId");
