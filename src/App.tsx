import { UserCard } from "./components/UserCard";
import "./styles.css";

const user = {
  id: 1,
  name: "Tom",
  email: "1212312@12312313",
  address: "adfas-adfasdf-adfas"
};
export default function App() {
  return (
    <div className="App">
      <UserCard user={user} />
    </div>
  );
}
