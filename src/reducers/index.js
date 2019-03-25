import { combineReducers } from "redux";

const songsReducer = () => {
  return [
    { title: "Shape of You", duration: "4:05" },
    { title: "Happy", duration: "3:03" }
  ];
};

const selectedSongReducer = (selectedSong = null, action) => {
  if (action.type === "SONG_SELECTED") {
    return action.payload;
  }
  return selectedSong;
};

export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer
});
