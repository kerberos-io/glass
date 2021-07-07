import React from "react";

import { Breadcrumb, Button, Icon, Profilebar, KPI } from "@kerberos-io/ui";

function App() {
  return (
    <div className="App">
      <header className="App-header">Glass</header>
      <Breadcrumb title={"Media"} level1={"12-09-2035"}>
        <Button label={"Create media"} icon={"media"} type="success" />
      </Breadcrumb>
      <Icon label="alerts" />
      <Profilebar username="ee" email="kj" role="j" />
      <KPI divider="20" number="15" progress="+" progressValue="7" />
    </div>
  );
}

export default App;
