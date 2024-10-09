-- Use SQL insert statements to add any
-- starting/dummy data to your database tables

-- EXAMPLE:

--  insert into "todos"
--    ("task", "isCompleted")
--    values
--      ('Learn to code', false),
--      ('Build projects', false),
--      ('Get a job', false);

SET standard_conforming_strings = off;


insert into "customers"
  ("username", "hashedPassword")
  values
      ('test', 'testPass');

insert into "items"
  ("name", "imageUrl",  "category", "description", "lowestPrice" )
  values
  ('CUBAN LINK BRACELET',  '/images/cuban-bracelet.webp',   'Bracelet',  'High shine for a high roller. The Cuban Link Bracelet is pure stainless steel with our iconic HJ stamped right in.\nDesigned to help show off your style, and features our innovative lobster clasp that lets you spend less time putting on your accessories and more time dripped out.\n7" is recommended for a clean fitted look whereas 8" is suggested for heavier wrists or a looser fit.', '$32.95'),

('ASTROLOGY RING', '/images/astrology-ring.webp',  'Ring', 'Listen to the messages from the moon. Gaze upon the stars for answers. And always pay attention to the eyes - they never lie.\nHere’s your chance to showcase the true nature of your personality - that’s what astrology’s all about. As one of our most iconic pieces, the Astrology Ring guides you along the path of deeper meaning.\nFeatured in the 4/20 4 Year Anniversary Collection' , '$36.95'),

('10MM HEAVY CUBAN CHAIN', '/images/10-mm-heavy-cuban-chain.webp', 'Chain', 'It’s time to finally go hard. The 10mm Heavy Cuban Chain is here for you to make a statement and create your own look.\nMade of pure solid stainless steel, this chain is designed to have the perfect weight and shine that’ll give you that luxury look you’ve been searching for. It’s purpose-built for those who want to make sure their drip stops going unnoticed.', '$36.95'),
('BUTTERFLY PENDANT', '/images/butterfly-pendant.webp', 'Pendant', 'Spread your wings with our Butterfly Pendant. Embrace the spiritual flow you’ve created between your mind and soul, showing how far you’ve come against the odds. Every day is its own battle, but it’s never a bad idea to take a second to recognize the progress you’ve made.\nSave on your order when you add an HJ chain. Couple this pendant with your choice between six 20” .925 sterling silver chains, ensuring you get the best match for your aesthetic.', '$34.95'),
('SWORD EARRING', '/images/sword-earring.webp', 'Earring', 'A homage to our generation’s obsession with video games, our Sword Earring is a nostalgic piece for us all. The almighty sword is the foundational symbol of strength, protection, and courage.\nWear this earring to display your strength and willingness to fight for what you believe in.', '$26.95' ),
('ASTROLOGY WALLET CHAIN', './images/astrology-wallet-chain.webp', 'Wallet Chain', 'The universe right by your side, eager to aid you in any situation you face. With our Astrology Wallet Chain, unlock the power to channel energy from the strongest celestial bodies: the sun, the moon, and the stars.\nWith its purposefully simple yet elegant design, it’s a nice way to add another touch of style to your fit without stealing the show. This wallet chain not only connects your wallet to your pants but also your entire outfit together by allowing you to rock an elevated style that’s still clean and structured.', '$99.95')
;

insert into "sizes"
  ("itemId", "size")
  values
  (1, '7" (FITTED)'),
  (1, '8" (LOOSE FIT)'),
  (2, '3'),
  (2, '4'),
  (2, '5'),
  (2, '6'),
  (2, '7'),
  (2, '8'),
  (2, '9'),
  (2, '10'),
  (2, '11'),
  (2, '12'),
  (2, '13'),
  (3, '16"'),
  (3, '18"'),
  (3, '20"'),
  (3, '24"'),
  (4, 'REGULAR'),
  (5, 'SINGLE'),
  (5, 'PAIR'),
  (6, '22"');

insert into "materials"
  ("itemId", "material")
  values
  (1, 'SOLID STAINLESS STEEL' ),
  (2, 'SOLID STAINLESS STEEL'),
  (2, 'SOLID .925 STERLING SILVER' ),
  (3, 'SOLID STAINLESS STEEL'),
  (4, 'SOLID STAINLESS STEEL'),
  (5, 'SOLID STAINLESS STEEL'),
  (5, 'SOLID .925 STERLING SILVER'),
  (6, 'SOLID STAINLESS STEEL');

  insert into "listingImages"
  ("itemId", "imageURL")
  values
  (1, 'cuban-bracelet.webp'),
  (1, 'cuban-bracelet-2.webp'),
  (1, 'cuban-bracelet-3.webp'),
  (1, 'cuban-bracelet-4.webp'),
  (1, 'cuban-bracelet-5.webp'),
  (2, 'astrology-ring.webp'),
  (2, 'astrology-ring-2.webp'),
  (2, 'astrology-ring-3.webp'),
  (2, 'astrology-ring-4.webp'),
  (2, 'astrology-ring-5.webp'),
  (3, '10-mm-heavy-cuban-chain.webp'),
  (3, '10-mm-heavy-cuban-chain-2.webp'),
  (3, '10-mm-heavy-cuban-chain-3.webp'),
  (3, '10-mm-heavy-cuban-chain-4.webp'),
  (3, '10-mm-heavy-cuban-chain-5.webp'),
  (4, 'butterfly-pendant.webp'),
  (4, 'butterfly-pendant-2.webp'),
  (4, 'butterfly-pendant-3.webp'),
  (4, 'butterfly-pendant-4.webp'),
  (4, 'butterfly-pendant-5.webp'),
  (5, 'sword-earring.webp'),
  (5, 'sword-earring-2.webp'),
  (5, 'sword-earring-3.webp'),
  (5, 'sword-earring-4.webp'),
  (5, 'sword-earring-5.webp'),
  (6, 'astrology-wallet-chain.webp'),
  (6, 'astrology-wallet-chain-2.webp'),
  (6, 'astrology-wallet-chain-3.webp'),
  (6, 'astrology-wallet-chain-4.webp'),
  (6, 'astrology-wallet-chain-5.webp');

insert into "inventory"
  ("itemId", "size", "material", "qtyInStock", "price")
  values
  (1, '7" (FITTED)', 'SOLID STAINLESS STEEL', 100, 3295),
  (1, '8" (LOOSE FIT)', 'SOLID STAINLESS STEEL', 100, 3295),
  (2, '3', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '4', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '5', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '6', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '7', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '8', 'SOLID STAINLESS STEEL', 77, 3695),
  (2, '9', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '10', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '11', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '12', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '13', 'SOLID STAINLESS STEEL', 80, 3695),
  (2, '3', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '4', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '5', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '6', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '7', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '8', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '9', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '10', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '11', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '12', 'SOLID .925 STERLING SILVER', 80, 9495),
  (2, '13', 'SOLID .925 STERLING SILVER', 80, 9495),
  (3, '16"', 'SOLID STAINLESS STEEL', 10, 3695),
  (3, '18"', 'SOLID STAINLESS STEEL', 10, 3995),
  (3, '20"', 'SOLID STAINLESS STEEL', 10, 4295),
  (3, '24"', 'SOLID STAINLESS STEEL', 10, 4695),
  (4, 'REGULAR', 'SOLID STAINLESS STEEL', 8773, 3495),
  (5, 'SINGLE', 'SOLID STAINLESS STEEL', 80, 2695),
  (5, 'PAIR', 'SOLID STAINLESS STEEL', 80, 4695),
  (5, 'SINGLE', 'SOLID .925 STERLING SILVER', 80, 3695),
  (5, 'PAIR', 'SOLID .925 STERLING SILVER', 80, 6995),
  (6, '22"', 'SOLID STAINLESS STEEL', 457, 9995);

insert into "customers"
  ("username", "hashedPassword" )
  values
  ('test', 'testPass'),
  ('test2', 'testPass2');

insert into "cart"
  ("customerId", "itemId", "size", "material", "qty")
  values
  (1, 1, '7" (FITTED)', 'SOLID STAINLESS STEEL', 2),
  (1, 1, '8" (LOOSE FIT)', 'SOLID STAINLESS STEEL', 1),
  (2, 2, '3', 'SOLID STAINLESS STEEL', 1),
  (2, 2, '9', 'SOLID STAINLESS STEEL', 1);
