import React from "react";
import { Breadcrumb, Icon, VideoCard, Button } from "@kerberos-io/ui";
import "./livestream.scss";

import { RootState } from "../../state/store";
import { useDispatch, useSelector } from "react-redux";
import { toogleVideoWall, getHD, getSD } from "../../state/reducers";

export default function LiveStream() {
  const showVideoWall = useSelector(
    (state: RootState) => state.UIState.showVideoWall
  );
  const videosData = useSelector((state: RootState) => state.videos.videosData);
  const dispatch = useDispatch();

  const handleClickVideoWall = () => {
    dispatch(toogleVideoWall(`${!showVideoWall}`));
  };
  const handleClickHD = () => {
    dispatch(getHD("HD"));
  };
  const handleClickSD = () => {
    dispatch(getSD("SD"));
  };
  const actions = {
    handleClickHD,
    handleClickSD,
  };
  return (
    <div id="page-live-stream">
      <div className="header">
        <Breadcrumb
          title={"Live stream"}
          level1={"Get instant overview of all your online cameras"}
        >
          <p className="item">Video wall</p>
          <span onClick={handleClickVideoWall}>
            <Icon label="toggle-off" />
          </span>
          <Icon label="alerts-notify" />
        </Breadcrumb>
      </div>
      <div className="control-bar">
        <div className="search-field">
          <Icon label="cameras" />
          <input placeholder="Filter by site" />
        </div>
        <div className="search-field">
          <Icon label="bookmark" />
          <input placeholder="Filter by status" />
        </div>
        <div className="search-field">
          <Icon label="checkbox" />
          <Icon label="star" />
        </div>
        <div className="search-field">
          <Icon label="sort" />
          <p className="item">By Site</p>
        </div>
      </div>
      {!showVideoWall ? (
        <div className="video-wall-embedded ">
          {videosData.map((props: any) => (
            <VideoCard key={props.id} {...props} {...actions} />
          ))}
        </div>
      ) : (
        <div className="video-wall-fs">
          <div className="vw-header">
            <a className="brand-logo">
              <img
                src={"/images/header-minimal-logo-36x36.svg"}
                onClick={handleClickVideoWall}
              />
              <h4>{"Kerberos Hub Lite"}</h4>
            </a>
            <div className="grid-list">
              <p className="item"> Grid size</p>
              <div className="numbers">
                <button>4</button>
                <button>6</button>
                <button>9</button>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="setup-connection">
        <div className="setup-box">
          <h3>Setup your first Connection</h3>
          <p className="item">
            Set up your first ConnectionTo use Kerberos Hub Lite, first you need
            to configure your camera settings – Kerberos supports wide range of
            USB, IP and RPi cameras
          </p>
          <Button icon={"plus-circle"} label="Add a Connection" type="" />
        </div>
      </div>
    </div>
  );
}
