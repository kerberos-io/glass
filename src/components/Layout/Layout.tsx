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
import { useSelector } from "react-redux";
import { RootState } from "../../state/store";
import "./layout.scss";

export interface LayoutProps {
  children?: any;
}

export default function Layout({ children }: LayoutProps) {
  const navTextData = useSelector(
    (state: RootState) => state.UIState.navTextData
  );
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
          {navTextData.map(({ sectionTitle, navGroup, id }: any) => (
            <div key={id}>
              <NavigationSection title={sectionTitle} />
              <NavigationGroup>
                {navGroup.map((props: any) => (
                  <NavigationItem {...props} key={props.id} />
                ))}
              </NavigationGroup>
            </div>
          ))}
        </Navigation>
      </Sidebar>
      <Main>
        <Gradient />
        <MainBody>{children}</MainBody>
      </Main>
    </div>
  );
}
