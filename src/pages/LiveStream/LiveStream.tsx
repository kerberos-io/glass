import {
  Breadcrumb,
  Button,
  Icon,
  NavigationGroup,
  NavigationItem,
  VideoCard,
  StatusWithBadge,
  Sidebar
} from "@kerberos-io/ui";
import "./livestream.scss";

export default function LiveStream() {
  return (
    <>
      <div className="header">
        <Breadcrumb
          title={"Live stream"}
          level1={"Get instant overview of all your online cameras"}
        >
          <p className="item">Video wall</p>
          <Icon label="toggle-off" />
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
      <div className="video-wall-embedded ">
        <VideoCard
          label="Hailway"
          videoSource={"/images/video.png"}
          headerStatus={"live"}
          videoStatus={"recording"}
        />
        <VideoCard
          label="Mailway"
          videoSource={"/images/video.png"}
          headerStatus={"event-detected"}
          videoStatus={"recording"}
        />
        <VideoCard
          label="Railway"
          videoSource={"/images/video.png"}
          headerStatus={"offline"}
          videoStatus={"recording"}
        />
        <VideoCard
          label="Sailway"
          videoSource={"/images/video.png"}
          headerStatus={"live"}
          videoStatus={"recording"}
        />
      </div>
      
      <div className="video-wall-fs">
       <div className="header"> 

       </div>
      </div>
    </>
  );
}
