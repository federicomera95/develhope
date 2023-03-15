const supertest = require("supertest");
const createServer = require("./server");

const app = createServer();

const request = supertest(app);

test("GET /", async () => {
  const response = await request
    .get("/")
    .expect(200)
    .expect("content-type", "application/json; charset=utf-8");

  await expect(JSON.parse(response.text)).toEqual({ status: "online" });
});
