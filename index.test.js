/** @format */

const test = require("node:test");
const assert = require("node:assert");
const app = require("./index");

test("Express application routing", async (t) => {
  // Start the server on a random available port
  const server = app.listen(0);
  const port = server.address().port;

  t.after(() => {
    server.close();
  });

  await t.test("GET / responds with correct string", async () => {
    const res = await fetch(`http://localhost:${port}/`);
    const text = await res.text();

    assert.strictEqual(res.status, 200);
    assert.ok(text.includes("Hello jeee server run ho rha h"));
  });

  await t.test("GET /test responds with HTML text", async () => {
    const res = await fetch(`http://localhost:${port}/test`);
    const text = await res.text();

    assert.strictEqual(res.status, 200);
    assert.ok(text.includes("<h1>Test Page</h1>"));
  });
});
