import * as Test from "../src/types/Test";
import { isString } from "../src";

const { checks, check } = Test;

const res1 = isString(1);
const res2 = isString("a");

checks([
  check<typeof res1, boolean, Test.Pass>(),
  check<typeof res2, boolean, Test.Pass>(),
]);
