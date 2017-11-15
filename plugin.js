module.exports = ({ types: t }) => {
  return {
    name: "ast-transform",
    visitor: {
      CallExpression(path) {
        if (path.node.callee.name == "cl") {
          path.node.callee.name = "console.log";
        }
      }
    }
  };
};
