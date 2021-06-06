import React from "react";
import Profile from "./components/Profile/Profile";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/FriendList/FriendList";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import user from "./components/Profile/Profile.json";
import statistics from "./components/Statistics/statistics-data.json";
import friends from "./components/FriendList/friends.json";
import transactions from "./components/TransactionHistory/transactions.json";

const App = () => (
  // <div>
  //   <Profile
  //     name={user.name}
  //     tag={user.tag}
  //     location={user.location}
  //     avatar={user.avatar}
  //     stats={user.stats}
  //   />
  // </div>

  // <div>
  //   <Statistics title="Upload stats" stats={statistics} />
  //   {/* <Statistics stats={statistics} /> */}
  // </div>

  // <FriendList friends={friends} />
  // <container>
  //   <Profile
  //     name={user.name}
  //     tag={user.tag}
  //     location={user.location}
  //     avatar={user.avatar}
  //     stats={user.stats}
  //   />
  //   <Statistics title="Upload stats" stats={statistics} />
  //   <FriendList friends={friends} />
  //   <TransactionHistory items={transactions} />
  // </container>

  <>
    <Profile
      name={user.name}
      tag={user.tag}
      location={user.location}
      avatar={user.avatar}
      stats={user.stats}
    />
    <Statistics title="Upload stats" stats={statistics} />
    <FriendList friends={friends} />
    <TransactionHistory items={transactions} />
  </>
  // <TransactionHistory items={transactions} />
);

export default App;
