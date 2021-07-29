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
  CamerasTable,
  CamerasRow,
} from "@kerberos-io/ui";
import "./cameras.scss";

export default function Cameras() {
  return (
    <div id="page-cameras">
      <Breadcrumb
        title={"Cameras"}
        level1={"Setup and manage your cameras"}
        level2=""
      >
        <Button icon="plus-circle" label="Add Camera" type="default" />
        <div id="flag-button">
          <Button icon="flag" label="" type="neutral" />
        </div>
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
            value="Name"
            type="button"
            iconright="arrow-down-sm"
          />
        </FilterSort>
      </ControlBar>

      <CamerasTable>
        <CamerasRow
          status="warning"
          statusTitle="Live"
          nameStatus="success"
          name="rorschach-first"
          city="Pargue"
          state="Czehia"
          time="304d 22h 48:04"
          version="2.8.0"
          isOffline={false}
          isEnterperise={false}
        />
        <CamerasRow
          status="alert"
          statusTitle="Offline"
          nameStatus="hub"
          name="rh-second"
          city="Bonn"
          state="Germany"
          time="304d 22h 48:04"
          version="2.8.9"
          isOffline={true}
        />
        <CamerasRow
          status="success"
          statusTitle="Active"
          nameStatus="success"
          name="rorschach-first"
          city="Jihlava"
          state="Czehia"
          time="304d 22h 48:04"
          version="2.8.0"
          isOffline={false}
          isEnterperise={false}
        />
        <CamerasRow
          status="warning"
          statusTitle="Update"
          nameStatus="warning"
          name="rorschach-first"
          city="Jihlava"
          state="Czehia"
          time="304d 22h 48:04"
          version="2.8.0"
          isOffline={false}
        />
        <CamerasRow
          status="success"
          statusTitle="Live"
          nameStatus="success"
          name="rorschach-first"
          city="Jihlava"
          state="Czehia"
          time="304d 22h 48:04"
          version="2.8.0"
          isOffline={false}
          isEnterperise={false}
        />
        <CamerasRow
          status="success"
          statusTitle="Live"
          nameStatus="success"
          name="rorschach-first"
          city="Jihlava"
          state="Czehia"
          time="304d 22h 48:04"
          version="2.8.0"
          isOffline={false}
        />
      </CamerasTable>
      <SetupBox
        dashed
        header="Set up your first camera"
        text="To use Kerberos Hub, first you need to configure your camera settings – Kerberos supports wide range of USB, IP and RPi cameras"
        btnicon="plus-circle"
        btnlabel="Add a Camera"
      />
    </div>
  );
}
