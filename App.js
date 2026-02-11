
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
Root.render(heading);