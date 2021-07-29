import {
  Alert,
  Breadcrumb,
  Button,
  Input,
  SetupBox,
  ControlBar,
  FilterDisplay,
  FilterSearch,
  FilterSite,
  FilterSort,
  TableRow,
  Table,
  TableHeader,
  TableBody,
  ConnectionRow,
} from "@kerberos-io/ui";
import "./connections.scss";

export default function Connections() {
  return (
    <div id="page-connections">
      <Breadcrumb
        title={"Infrastructure"}
        level1={"Setup and manage your Camera connections"}
      >
        <Button icon="plus-circle" label="Add a Connection" type="default" />
        <Alert platter status="hub" blink notify />
      </Breadcrumb>
      <ControlBar>
        <FilterSearch>
          <Input iconleft="search" placeholder="Search..." type="text" />
        </FilterSearch>
        <FilterSite>
          <Input
            type="button"
            iconleft="location"
            iconright="arrow-down-sm"
            value="Site"
          />
        </FilterSite>
        <FilterDisplay>
          <Button type="outlined" icon="list" label="List" />
          <Button type="outlined" icon="grid" label="Grid" />
          <Button type="outlined" icon="compass" label="Map" />
        </FilterDisplay>
        <FilterSort>
          <Input
            iconleft="sort"
            value="Site A-Z"
            type="button"
            iconright="arrow-down-sm"
          />
        </FilterSort>
      </ControlBar>
      <Table>
        <TableHeader>
          <TableRow
            headercells={["site name", "tech", "cameras", "controls"]}
          />
        </TableHeader>
        <TableBody>
          <ConnectionRow
            pinStatus="hub"
            siteName="Store01s"
            sitePin="Jhony Bravo"
            techName="Kubernetes"
            techContainer="Cluster"
            camStatus="success"
            camDevided={10}
            camDevisor={7}
          />
          <ConnectionRow
            pinStatus="warning"
            siteName="Cam12"
            sitePin="Mamma Mia"
            techName="Opensource"
            techContainer="Docker"
            camStatus="alert"
            camDevided={1}
            camDevisor={4}
          />
          <ConnectionRow
            pinStatus="hub"
            siteName="Store01s"
            sitePin="Jhony Bravo"
            techName="Opensource"
            techContainer="Raspberry Pi"
            camStatus="success"
            camDevided={10}
            camDevisor={7}
          />
        </TableBody>
      </Table>

      <SetupBox
        dashed
        header="Set up your first Connection"
        text="Connections are the building blocks for your."
        btnicon="plus-circle"
        btnlabel="Add a Connection"
      />
    </div>
  );
}
