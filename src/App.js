import React from "react";
import { Provider } from "react-redux";

import './App.css';
import SideBar from "./components/Sidebar";
import Video from "./components/Video";


import store from "./store";

function App() {
  return (
    <div className="row">
      <div className="col-12">
        <div className="Container">
          <div className="App">
            <Provider store={store}>
              <Video />
              <SideBar />
            </Provider>
          </div>
        </div>
      </div>
    </div>
    
  );
}

export default App;
