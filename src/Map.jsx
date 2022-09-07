//map?
this.state.data.map(function (item, i) {
  console.log("test");
  return <li key={i}>Test</li>;
});

this.state.data.map((item, i) => <li key={i}>Test</li>);
