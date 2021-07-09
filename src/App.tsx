import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  Dashboard,
  Cameras,
  LiveStream,
  Media,
  Connections,
  LatestEvents,
} from "./pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Layout>
          <Switch>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/events" component={LatestEvents} />
            <Route path="/livestream" component={LiveStream} />
            <Route path="/media" component={Media} />
            <Route path="/cameras" component={Cameras} />
            <Route path="/connections" component={Connections} />
          </Switch>
        </Layout>
      </BrowserRouter>
    </div>
  );
}

export default App;
