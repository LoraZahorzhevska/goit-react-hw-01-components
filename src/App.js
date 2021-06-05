import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import user from "./components/Profile/Profile.json";
import statistics from "./components/Statistics/statistics-data.json";

const App = () => (
  <div>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
  </div>

  // <div>
  //   <Statistics title="Upload stats" stats={statistics} />
  //   {/* <Statistics stats={statistics} /> */}
  // </div>
);

export default App;
