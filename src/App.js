import Profile from "./components/Profile";
import user from "./user.json";
import Statistics from "./components/Statistics";
import data from "../src/data.json";
import FriendList from "./components/FriendList";
import friends from "../src/friends.json";
import Section from "./components/Section";
import TransactionHistory from "./components/TransactionHistory";
import transactions from "./transactions.json";
import { Container } from "./App.styled";

// const friend = friends[3];
export default function App() {
  //   const isOnline = false;
  return (
    <div>
      <Section title="Домашнее задание 1">
        {/* {isOnline && "Онлайн"}
      {isOnline ? "Онлайн" : "Офлайн"} */}
        <Profile {...user} />
        <Statistics items={data} />
        <FriendList items={friends} />
        <TransactionHistory items={transactions} />
      </Section>
    </div>
  );
}
