import Profile from "./components/Profile/Profile";
import user from "./data/user.json";
import Statistics from "./components/Statistics/Statistics";
import data from "../src/data/data.json";
import FriendList from "./components/FrienfList/FriendList";
import friends from "../src/data/friends.json";
import Section from "./components/Section/Section";
import TransactionHistory from "./components/Transactions/TransactionHistory";
import transactions from "./data/transactions.json";
import { Container } from "./App.styled";

// const friend = friends[3];
export default function App() {
  //   const isOnline = false;
  return (
    <div>
      <Section title="Домашнее задание 1">
        {/* {isOnline && "Онлайн"}
      {isOnline ? "Онлайн" : "Офлайн"} */}
        <Profile
          username={user.username}
          tag={user.tag}
          location={user.location}
          avatar={user.avatar}
          stats={user.stats}
        />
        <Statistics items={data} />
        <FriendList items={friends} />
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
