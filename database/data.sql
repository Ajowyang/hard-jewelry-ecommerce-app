-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);


insert into "customers"
  ("username", "hashedPassword")
  values
      ('test', 'testPass');

insert into "items"
  ("name", "imageUrl", "qtyInStock", "size", "category", "material", "price" )
  values
  ('testItem',  'testUrl',  99,  '18"',  'Chains',  'Stainless Steel',  '2999');
