import { Command } from "commander";

export const runCli = async () => {
  const defaultOptions = {
    appName: "whip-up-saas",
    packages: [] as string[],
    flags: {
      tailwind: false,
      appRouter: false,
    },
  };

  const cliOptions = defaultOptions;
  const program = new Command()
    .name("whip-up")
    .description("Whip up a new SaaS app")
    .option(
      "--tailwind [boolean]",
      "Experimental: Boolean value if we should install Tailwind CSS. Must be used in conjunction with `--CI`.",
      (value) => !!value && value !== "false"
    )
    .option(
      "--appRouter [boolean]",
      "Explicitly tell the CLI to use the new Next.js app router",
      (value) => !!value && value !== "false"
    );

  cliOptions.flags = program.opts();

  if (cliOptions.flags.tailwind) cliOptions.packages.push("tailwind");

  return cliOptions;
};
