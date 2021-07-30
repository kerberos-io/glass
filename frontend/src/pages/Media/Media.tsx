import {
  Breadcrumb,
  Button,
  VideoCard,
  VideoContainer,
} from "@kerberos-io/ui";
import "./media.scss";
export default function Media() {
  return (
    <div id="page-media">
      <Breadcrumb title={"Media"}>
        <div id="flag-button">
          <Button icon="flag" label="" type="neutral" />
        </div>
      </Breadcrumb>
      <div className="videos-date">
        <h2>March 26</h2>
        <p>Friday</p>
      </div>
      <VideoContainer cols={4} isVideoWall={false}>
        {Array(16)
          .fill(4)
          .map((el) => (
            <VideoCard
              camera="Camera 12-Outside"
              isVideoWall={false}
              isMediaWall
              headerStatus="alert"
              headerStatusTitle="event-detected"
              label="Düsseldorf Autobahn"
              videoSrc="https://www.w3schools.com/html/mov_bbb.mp4"
              videoStatus="recording"
              videoStatusTitle="live"
              duration="5:45"
              hours="17:35 - 17:36"
              month="Mar 26"
            />
          ))}
      </VideoContainer>
      <div className="load-button">
        <Button icon="arrowdown" type="default" label="Load more Media" />
      </div>
    </div>
  );
}
