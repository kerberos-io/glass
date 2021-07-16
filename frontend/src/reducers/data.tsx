import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
export interface State {
  videosData: any;
}

const initialState: State = {
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
const DataSlice = createSlice({
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

export default DataSlice
export const { getHD, getSD } = DataSlice.actions;
