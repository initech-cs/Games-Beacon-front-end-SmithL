const initialstate = {
  loaded: false,
};

export default function reducer(state = initialstate, action) {
  if (action.type === "LOADED") {
    state.loaded = true;
    console.log("this is site status", state.loaded);
  }
  return { ...state };
}
