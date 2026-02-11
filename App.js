/**
 * <div id = "parent">
 *    <div id = "child">
 *        <h1>Hello i'm h1 tag</h1>
 *        <h2>Hello i'm h2 tag</h2>
 *    </div>
 *    <div id = "child2">
 *        <h1>Hello i'm h1 tag</h1>
 *        <h2>Hello i'm h2 tag</h2>
 *    </div>
 * </div>
 */

const heading = React.createElement("div", { id: "parent" },
  [
    React.createElement("div", { id: "child" },
      [
        React.createElement("h1", {}, "Hello I'm h1 tag"),
        React.createElement("h2", {}, "Hello I'm h2 tag"),
      ]),
    React.createElement("div", { id: "child2" },
      [
        React.createElement("h1", {}, "Hello I'm h1 tag"),
        React.createElement("h2", {}, "Hello I'm h2 tag"),
      ]),
  ]
);
const Root = ReactDOM.createRoot(document.getElementById('root'));
Root.render(heading)