const fs = require("fs");
const acorn = require("acorn");
const estraverse = require("estraverse");

fs.readFile("./ex.js", "utf-8", (err, code) => {
  let scope = 0;
  let variables = {};

  estraverse.traverse(acorn.parse(code), {
    enter: (node, parent) => {
      scope++;
      if (node.type == "VariableDeclarator") {
        variables = { ...variables, [node.id.name]: scope };
      }

      if (node.type === "CallExpression") {
        node.arguments.forEach(argnode => {
          if (variables[argnode.name] < scope) {
            console.error(`変数が宣言された階層: ${variables[argnode.name]}`);
            console.error(`今の階層: ${scope}`);
            console.error("スコープは最小限にしてね");
          }
        });
      }
    },
    leave: (node, parent) => {
      scope--;
    }
  });
});
