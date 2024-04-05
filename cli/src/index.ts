import { runCli } from "./cli/index.js";

const {
  appName,
  packages,
  flags: { appRouter },
} = await runCli();

console.log(appName, packages, appRouter);
