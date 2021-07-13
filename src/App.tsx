import { BrowserRouter, Switch, Route } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import {
  Dashboard,
  Cameras,
  LiveStream,
  Media,
  Connections,
  LatestEvents,
  Login,
} from "./pages";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route path="/login" component={Login} />
          <Layout>
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/events" component={LatestEvents} />
            <Route path="/livestream" component={LiveStream} />
            <Route path="/media" component={Media} />
            <Route path="/cameras" component={Cameras} />
            <Route path="/connections" component={Connections} />
          </Layout>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
