import React from "react";
import {
  Breadcrumb,
  Icon,
  Button,
  Alert,
  SetupBox,
  ControlBar,
  FilterDisplay,
  FilterSearch,
  FilterSite,
  FilterSort,
  Input,
  VideoCard,
  VideoContainer,
  VideoWallHeader,
} from "@kerberos-io/ui";
import "./livestream.scss";
import { useDispatch, useSelector } from "react-redux";
import { toogleVideoWall } from "../../reducers/ui";
import { getHD, getSD } from "../../reducers/data";

export default function LiveStream() {
  return (
    <div id="page-live-stream">
      <Breadcrumb
        title={"Live stream"}
        level1={"Get instant overview of all your online cameras"}
      >
        <p className="item">Video wall</p>
        <span>
          <Icon label="toggle-off" />
        </span>
        <Alert platter notify status="hub" />
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
            value="Filter By Status"
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
            value="By Site"
            type="button"
            iconright="arrow-down-sm"
          />
        </FilterSort>
      </ControlBar>

      <>
        <VideoWallHeader hide={true} grid={[4, 6, 19]} />
        <VideoContainer cols={2} isVideoWall={false}>
          {Array(4)
            .fill(4)
            .map((el) => (
              <VideoCard
                camera="Camera 12-Outside"
                isVideoWall={false}
                headerStatus="alert"
                headerStatusTitle="event-detected"
                label="Düsseldorf Autobahn"
                videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
                videoStatus="recording"
                videoStatusTitle="live"
              />
            ))}
        </VideoContainer>
      </>

      <SetupBox
        dashed
        header="Setup your first Connection"
        text="Set up your first ConnectionTo use Kerberos Hub Lite, first you need
            to configure your camera settings – Kerberos supports wide range of
            USB, IP and RPi cameras"
        btnicon="plus-circle"
        btnlabel="Add a Connection"
      />
    </div>
  );
}
