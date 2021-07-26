import {
  Gradient,
  Main,
  MainBody,
  Navigation,
  NavigationGroup,
  NavigationItem,
  NavigationSection,
  Profilebar,
  Sidebar
} from "@kerberos-io/ui";
import "@kerberos-io/ui/lib/index.css";

interface Props {
  children: any;
}


function App(props: Props) {
  const {children} = props;
  return (
      <div id={"page-root"}>
        <Sidebar title="Kerberos.io Glass" version="v3.0">
          <Profilebar
              username={"cedricve"}
              email={"cedric@kerberos.io"}
              role={"owner"}
              active={true}
          />
          <Navigation>
            <NavigationSection title={"monitoring"}/>
            <NavigationGroup>
              <NavigationItem link={"dashboard"} title={"Dashboard"} icon={"dashboard"} active={true}/>
              <NavigationItem link={"events"} title={"Latest events"} icon={"activity"}/>
              <NavigationItem link={"livestream"} title={"Livestreams"} icon={"livestream"}/>
              <NavigationItem link={"media"} title={"Media"} icon={"media"}/>
            </NavigationGroup>
            <NavigationSection title={"analysis"}/>
            <NavigationGroup>
              <NavigationItem link={"tasks"} title={"Tasks"} icon={"tasks"}/>
            </NavigationGroup>
            <NavigationSection title={"integrations"}/>
            <NavigationGroup>
              <NavigationItem link={"alerts"} title={"Alerts"} icon={"alerts"}/>
              <NavigationItem link={"channels"} title={"Channels"} icon={"channels"}/>
            </NavigationGroup>
            <NavigationSection title={"management"}/>
            <NavigationGroup>
              <NavigationItem link={"cameras"} title={"Cameras"} icon={"cameras"}/>
              <NavigationItem link={"sites"} title={"Sites"} icon={"sites"}/>
              <NavigationItem link={"accounts"} title={"Accounts"} icon={"accounts"}/>
              <NavigationItem link={"subscription"} title={"Plans & integrations"} icon={"subscription"}/>
            </NavigationGroup>
          </Navigation>
        </Sidebar>
        <Main>
          <Gradient/>
          <MainBody>
            {children}
          </MainBody>
        </Main>
      </div>
  );


}

export default App;
