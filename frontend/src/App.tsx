import {
  Dashboard,
  Cameras,
  LiveStream,
  Media,
  Connections,
  LatestEvents,
} from "./pages";

import Layout from "./components/Layout/Layout";
import RequireAuth from './containers/RequireAuth';
import RequireGuest from './containers/RequireGuest';
import Login from './pages/Login/Login';

interface Props {
  children: any;
}

function App(props: Props) {
  const {children} = props;
  return (
      <div>
        {children}
        <div>learn react</div>
      </div>
  );


}

export default App;
