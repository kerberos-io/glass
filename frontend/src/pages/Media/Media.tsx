import { Breadcrumb, Button, Icon } from "@kerberos-io/ui";

export default function Media() {
  return (
    <Breadcrumb
      title={"Media"}
      level1={"Get instant overview of all your online cameras"}
    >
      <Icon label={"refresh"} />
    </Breadcrumb>
  );
}
