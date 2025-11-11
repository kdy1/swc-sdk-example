/*#__DYNAMIC__*/
import { log } from "./foo.js";

console.log("Hello from Webpack!");

process.env.SWC_PUBLIC_TEST && log("SDK Test!");
