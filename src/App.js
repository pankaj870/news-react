import "./App.css";
import React, {  useState } from "react";
import NewsItem from "./components/NewsItem"
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'
import NavBar from "./components/NavBar"

const App =() => {

let [progress,setProgress] = useState(10)

 const apiKey ='410f4e5bfaef4b2db8d9bf974245c52c';
const setchange =(progress)=> {
  setProgress(progress)
}
//  let changeMode = (mode = "light") => {
//     if (mode === "light") {
//       document.body.style.backgroundColor = "dark";
//       mode = "dark";
//     } else {
//       document.body.style.backgroundColor = "light";
//       mode = "light";
//     }
//   };

 
    
    return (
      <div className="nav-container">
        <Router> <LoadingBar
        color='#f11946'
        progress={progress}
      />
          <NavBar />
          <Switch>
            <Route exact path={"/"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey}
                key={"business"}
                pageSize="8"
                country="in"
                category="business"
              />
            </Route>
            <Route exact path={"/entertainment"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey}
                key={"entertainment"}
                pageSize="8"
                category="entertainment"
              />
            </Route>
            <Route exact path={"/general"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey} key={"generel"} pageSize="8" category="general" />
            </Route>
            <Route exact path={"/health"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey} key={"health"} pageSize="8" category="health" />
            </Route>
            <Route exact path={"/science"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey} key={"science"} pageSize="8" category="science" />
            </Route>
            <Route exact path={"/sports"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey} key={"sports"} pageSize="8" category="sports" />
            </Route>
            <Route exact path={"/technology"}>
              <NewsItem  setProgress={setchange} apiKey={apiKey} key={"technology"} pageSize="8" category="technology" />
            </Route>
          </Switch>
        </Router>
      </div>
    );

}

export default App;
