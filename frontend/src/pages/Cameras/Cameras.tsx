import { Breadcrumb, Button } from "@kerberos-io/ui";
import "./cameras.scss"
export default function Cameras() {
  return (
    <div id="page-cameras">

    <Breadcrumb
      title={"Cameras"}
      level1={"Setup and manage your cameras"}
    >
      <Button icon="plus-circle" label="Add Camera" type="default"/>
      <div id="flag-button">
       <Button  icon="flag" label="" type="neutral"/>
      </div>
    </Breadcrumb>
    </div>

  );
}
