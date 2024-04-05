import tap from "tap";
import { add2Nums } from "./index.js";

void tap.test("add2Nums", (t) => {
  t.plan(3);
  t.equal(add2Nums(2, 3), 5, "should return the sum of two numbers");
  t.equal(add2Nums(-1, 5), 4, "should return the sum of two numbers");
  t.equal(add2Nums(0, 0), 0, "should return the sum of two numbers");
});
