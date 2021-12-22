import chai from "chai";
import chaiHttp from "chai-http";
const server = require("../src/index");
const should = chai.should();
chai.use(chaiHttp);

describe("PM2 monitoring", () => {
  it("List processes", () => {
    chai
      .request("http://localhost:3000")
      .get("/apps")
      .end((err, res) => {
        // console.log(res.body);
        res.body.should.be.a("object");
      });
  });
});
