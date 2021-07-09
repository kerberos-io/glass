import {
  Sidebar,
  Profilebar,
  Navigation,
  NavigationSection,
  NavigationGroup,
  NavigationItem,
  Breadcrumb,
  Button,
  Gradient,
  Main,
  MainBody,
} from "@kerberos-io/ui";
import "./layout.scss";

export interface LayoutProps {
  children?: any;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="layout" id={"page-root"}>
      <Sidebar
        logo="/images/header-minimal-logo-36x36.svg"
        title="Kerberos.io Hub"
        version="v1.0"
        mobile={false}
      >
        <Profilebar
          username={"cedricve"}
          email={"cedric@kerberos.io"}
          role={"owner"}
          active={true}
        />
        <Navigation>
          <NavigationSection title="monitoring" />
          <NavigationGroup>
            <NavigationItem
              link={"dashboard"}
              title={"Dashboard"}
              icon={"dashboard"}
              active={true}
            />
            <NavigationItem
              link={"events"}
              title={"Latest events"}
              icon={"activity"}
            />
            <NavigationItem
              link={"livestream"}
              title={"Livestreams"}
              icon={"livestream"}
            />
            <NavigationItem link={"media"} title={"Media"} icon={"media"} />
          </NavigationGroup>
          <NavigationSection title="management" />
          <NavigationGroup>
            <NavigationItem
              link={"cameras"}
              title={"Cameras"}
              icon={"cameras"}
              active={true}
            />
            <NavigationItem
              link={"connections"}
              title={"Connections"}
              icon={"cameras"}
              active={true}
            />
          </NavigationGroup>
        </Navigation>
      </Sidebar>
      <Main>
        <Gradient />
        <MainBody>{children}</MainBody>
      </Main>
    </div>
  );
}
