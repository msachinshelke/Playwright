require("dotenv").config();

require("@babel/register")({
  extensions: [".js", ".ts"],
  plugins: [
    [
      "module-resolver",
      {
        alias: {
          config: "./config",
          test: "./test",
        },
        root: ["./test"],
      },
    ],
  ],
});
