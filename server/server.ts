/* eslint-disable @typescript-eslint/no-unused-vars -- Remove when used */
import 'dotenv/config';
import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();

// Create paths for static directories
const reactStaticDir = new URL('../client/dist', import.meta.url).pathname;
const uploadsStaticDir = new URL('public', import.meta.url).pathname;

app.use(express.static(reactStaticDir));
// Static directory for file uploads server/public/
app.use(express.static(uploadsStaticDir));
app.use(express.json());

app.get('/api/hello', (req, res) => {
  res.json({ message: 'Hello, World!' });
});

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `
    select * from items`;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
// render products on catalog page

app.get('/api/products/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, 'itemId must be an integer');
    }
    const sql = `
    select * from "items"
    where "itemId" = $1
    `;
    const result = await db.query(sql, [itemId]);
    const product = result.rows[0];
    if (!product) {
      throw new ClientError(404, `Product ${itemId} doesn't exist`);
    }
    res.json(product);
  } catch (err) {
    next(err);
  }
});
// get item to go to its details page

app.get('/api/cart/:customerId', async (req, res, next) => {
  try {
    const { customerId } = req.params;
    if (!Number.isInteger(+customerId)) {
      throw new ClientError(400, `customerId must be an integer`);
    }
    const sql = `
    select * from "cart"
    where "customerId" = $1
    `;
    const result = await db.query(sql, [customerId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
// get all items in cart to render on cart page

app.get('/api/materials/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be an integer`);
    }
    const sql = `
    select * from "materials"
    where "itemId" = $1
    `;
    const result = await db.query(sql, [itemId]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'No materials not found');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/sizes/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be an integer`);
    }
    const sql = `
    select * from "sizes"
    where "itemId" = $1
    `;
    const result = await db.query(sql, [itemId]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'No sizes found');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/listingImages/:itemId', async (req, res, next) => {
  try {
    const { itemId } = req.params;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be an integer`);
    }
    const sql = `
    select * from "listingImages"
    where "itemId" = $1
    `;

    const result = await db.query(sql, [itemId]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'No listing images found');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/getPrice', async (req, res, next) => {
  try {
    const { itemId, material, size } = req.body;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be an integer`);
    }

    const sql = `
    select "price" from "inventory"
    where "itemId" = $1
    AND "material" = $2
    AND "size" = $3
    `;
    const result = await db.query(sql, [itemId, material, size]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'No item found in inventory');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/getStock', async (req, res, next) => {
  try {
    const { itemId, material, size } = req.body;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be an integer`);
    }

    const sql = `
    select "qtyInStock" from "inventory"
    where "itemId" = $1
    AND "material" = $2
    AND "size" = $3
    `;
    const result = await db.query(sql, [itemId, material, size]);
    if (result.rows.length === 0) {
      throw new ClientError(404, 'No item found in inventory');
    }
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.post('/api/cart/add', async (req, res, next) => {
  try {
    const { customerId, itemId, material, size, qty } = req.body;
    if (!Number.isInteger(+customerId) || !Number.isInteger(+itemId)) {
      throw new ClientError(400, `userId and customerId must be integers`);
    }
    if (
      !['SOLID STAINLESS STEEL', 'SOLID .92 STERLING SILVER'].includes(material)
    ) {
      throw new ClientError(400, `no such material`);
    }

    const sql = `
      insert into "cart" ("customerId", "itemId", "material", "size", "qty")
      values($1, $2, $3, $4, $5)
      returning *
      `;

    const result = await db.query(sql, [
      customerId,
      itemId,
      material,
      size,
      qty,
    ]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/cart/remove/:cartItemId', async (req, res, next) => {
  try {
    const { cartItemId } = req.params;
    if (!Number.isInteger(+cartItemId)) {
      throw new ClientError(400, `cartItemId must be a number`);
    }

    const sql = `
      delete from "cart"
      where ("cartItemId" = $1)
      returning *
      `;

    const result = await db.query(sql, [cartItemId]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.put('/api/cart/update/:cartItemId', async (req, res, next) => {
  try {
    const { cartItemId } = req.params;
    const { newQuant } = req.body;
    if (!Number.isInteger(+cartItemId)) {
      throw new ClientError(400, `cartItemId must be integer`);
    }

    const sql = `
    update "cart"
    set "qty" = $2
    where ("cartItemId"=$1)
    returning *
    `;
    const result = await db.query(sql, [cartItemId, newQuant]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.put('/api/updateStock', async (req, res, next) => {
  try {
    const { itemId, material, size, newQty } = req.body;
    if (!Number.isInteger(+itemId)) {
      throw new ClientError(400, `itemId must be integer`);
    }
    if (
      !['SOLID STAINLESS STEEL', 'SOLID .92 STERLING SILVER'].includes(material)
    ) {
      throw new ClientError(400, `no such material`);
    }

    const sql = `
    update "inventory"
    set "qtyInStock" =  $4
    where ("itemId" = $1)
    AND ("material"= $2)
    AND ("size"= $3)
    returning *
    `;
    const result = await db.query(sql, [itemId, material, size, newQty]);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});

/*
 * Handles paths that aren't handled by any other route handler.
 * It responds with `index.html` to support page refreshes with React Router.
 * This must be the _last_ route, just before errorMiddleware.
 */
app.get('*', (req, res) => res.sendFile(`${reactStaticDir}/index.html`));

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log('Listening on port', process.env.PORT);
});
