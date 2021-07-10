import React from "react";
import { Breadcrumb, Icon, VideoCard } from "@kerberos-io/ui";
import "./livestream.scss";
export default function LiveStream() {
  const [state, setState] = React.useState({
    showVideoWall: false,
  });
  const videoProps = {
    src: "https://www.w3schools.com/html/mov_bbb.mp4",
    autoPlay: true,
    poster: "",
    preload: true,
    muted: true,
  };
  const handleClickHD = () => console.log("HD");
  const handleClickSD = () => console.log("SD");
  return (
    <>
      <div className="header">
        <Breadcrumb
          title={"Live stream"}
          level1={"Get instant overview of all your online cameras"}
        >
          <p className="item">Video wall</p>
          <span
            onClick={() =>
              setState((preS) => ({ ...preS, showVideoWall: true }))
            }
          >
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
      {!state.showVideoWall ? (
        <div className="video-wall-embedded ">
          <VideoCard
            label="Hailway"
            headerStatus={"live"}
            videoStatus={"recording"}
            {...videoProps}
            handleClickHD={handleClickHD}
            handleClickSD={handleClickSD}
          />
          <VideoCard
            label="Mailway"
            headerStatus={"event-detected"}
            videoStatus={"recording"}
            {...videoProps}
            handleClickHD={handleClickHD}
            handleClickSD={handleClickSD}
          />
          <VideoCard
            label="Railway"
            headerStatus={"offline"}
            videoStatus={"recording"}
            {...videoProps}
            handleClickHD={handleClickHD}
            handleClickSD={handleClickSD}
          />
          <VideoCard
            label="Sailway"
            headerStatus={"live"}
            videoStatus={"recording"}
            {...videoProps}
            {...videoProps}
            handleClickHD={handleClickHD}
            handleClickSD={handleClickSD}
          />
        </div>
      ) : (
        <div className="video-wall-fs">
          <div className="vw-header">
            <a className="brand-logo">
              <img src={"/images/header-minimal-logo-36x36.svg"} />
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
    </>
  );
}
