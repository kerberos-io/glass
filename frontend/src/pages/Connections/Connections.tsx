import { Breadcrumb, Button } from "@kerberos-io/ui";

export default function Connections() {
  return (
    <Breadcrumb
      title={"Infrastructure"}
      level1={"Setup and manage your Camera connections"}
    >
      <Button
        icon="dashboard"
        label="Default Button"
        onClick={function noRefCheck() {}}
        type=""
      />
    </Breadcrumb>
  );
}
