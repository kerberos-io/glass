import {
  Breadcrumb,
  Button,
  Icon,
  Alert,
  KPI,
  Block,
  BlockHeader,
  BlockBody,
  BlockFooter,
  Input,
  Table,
  TableHeader,
  TableRow,
  TableBody,
  Badge,
} from "@kerberos-io/ui";
import "./Dashboard.scss";
export default function Dashboard() {
  return (
    <div id="page-dashboard">
      <Breadcrumb title={"Dashboard"}>
        <h5>2 new notification</h5>
        <Alert notify platter status="hub" />
      </Breadcrumb>
      <div className="kpies">
        <KPI
          divider="20"
          footer="Number of users"
          number="15"
          progress="+"
          progressValue="7"
        />
        <KPI
          divider="20"
          footer="Number of users"
          number="15"
          progress="+"
          progressValue="7"
        />
        <KPI
          divider="20"
          footer="Number of users"
          number="15"
          progress="+"
          progressValue="7"
        />
        <KPI
          divider="20"
          footer="Number of users"
          number="15"
          progress="+"
          progressValue="7"
        />
      </div>
      <div className="tasks-and-sites">
        <Block>
          <BlockHeader>
            <Button type="outlined" label="Sites" icon="location" />
            <Input type="button" iconleft="preferences" />
          </BlockHeader>
          <BlockBody>
            <img src="/images/bg/header.jpeg" />
          </BlockBody>
          <Table>
            <TableHeader>
              <TableRow
                headercells={["Site", "Location", "Cameras online/total"]}
              />
            </TableHeader>
            <TableBody>
              {Array(4)
                .fill(4)
                .map(() => (
                  <TableRow
                    bodycells={[
                      <b>Prag</b>,
                      <p>Czechia</p>,
                      <Badge status="hub" devided={7} devisor={2} />,
                    ]}
                  />
                ))}
            </TableBody>
          </Table>
        </Block>
        <Block>
          <BlockHeader>
            <Button type="outlined" label="Open Tasks" icon="tasks" />
            <Input type="button" iconleft="arrowright" />
          </BlockHeader>
          <BlockBody>
            <Table>
              <TableHeader>
                <TableRow
                  headercells={["Date", "Time", "Site", "Event Description"]}
                />
              </TableHeader>
              <TableBody>
                <TableRow
                  bodycells={[
                    <p>19/13</p>,
                    <p>11:47</p>,
                    <p>Prague</p>,
                    <p>Burglary</p>,
                    <p></p>,
                  ]}
                />
              </TableBody>
            </Table>
          </BlockBody>
        </Block>
      </div>
    </div>
  );
}
