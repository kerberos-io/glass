import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
export interface State {
  showVideoWall: boolean;
  navTextData: any;
  videosData: any;
}

const initialState: State = {
  showVideoWall: false,
  navTextData: [
    {
      sectionTitle: "monitoring",
      id: nanoid(),
      navGroup: [
        {
          id: nanoid(),
          link: "dashboard",
          title: "Dashboard",
          icon: "dashboard",
          active: true,
        },
        {
          id: nanoid(),
          link: "events",
          title: "Latest events",
          icon: "activity",
        },
        {
          id: nanoid(),
          link: "liveStream",
          title: "Live stream",
          icon: "livestream",
        },
        {
          id: nanoid(),
          link: "media",
          title: "Media",
          icon: "media",
        },
      ],
    },
    {
      sectionTitle: "management",
      id: nanoid(),
      navGroup: [
        {
          id: nanoid(),
          link: "cameras",
          title: "Cameras",
          icon: "cameras",
          active: true,
        },
        {
          id: nanoid(),
          link: "connections",
          title: "Connections",
          icon: "cameras",
          active: true,
        },
      ],
    },
  ],
  videosData: [
    {
      id: nanoid(),
      label: "Shiccago",
      headerStatus: "live",
      videoStatus: "recording",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      autoPlay: true,
      poster: "",
      preload: true,
      muted: true,
    },
    {
      id: nanoid(),
      label: "Marmara",
      headerStatus: "event-detected",
      videoStatus: "recording",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      autoPlay: true,
      poster: "",
      preload: true,
      muted: true,
    },
    {
      id: nanoid(),
      label: "Stuttgart",
      headerStatus: "offline",
      videoStatus: "recording",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      autoPlay: true,
      poster: "",
      preload: true,
      muted: true,
    },
    {
      id: nanoid(),
      label: "New York",
      headerStatus: "live",
      videoStatus: "recording",
      src: "https://www.w3schools.com/html/mov_bbb.mp4",
      autoPlay: true,
      poster: "",
      preload: true,
      muted: true,
    },
  ],
};
export const DataSlice = createSlice({
  name: "videos",
  initialState,
  reducers: {
    getHD: (state, action: PayloadAction<string>) => {
      console.log("VIDEO QUALITY: " + action.payload);
    },
    getSD: (state, action: PayloadAction<string>) => {
      console.log("VIDEO QUALITY: " + action.payload);
    },
  },
});
export const UISlice = createSlice({
  name: "UIState",
  initialState,
  reducers: {
    toogleVideoWall: (state, action: PayloadAction<string>) => {
      state.showVideoWall = !state.showVideoWall;
      console.log("VIDEO WALL OPEN: " + action.payload);
    },
  },
});

export const { toogleVideoWall } = UISlice.actions;
export const { getHD, getSD } = DataSlice.actions;
// export default UISlice.reducer;
