import { createSlice, PayloadAction, nanoid } from "@reduxjs/toolkit";
export interface State {
  showVideoWall: boolean;
  navTextData: any;
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
          link: "",
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
  ]
};

const UISlice = createSlice({
  name: "UIState",
  initialState,
  reducers: {
    toogleVideoWall: (state, action: PayloadAction<string>) => {
      state.showVideoWall = !state.showVideoWall;
      console.log("VIDEO WALL OPEN: " + action.payload);
    },
  },
});
export default UISlice
export const { toogleVideoWall } = UISlice.actions;
