import axios from "axios";
import { useState } from "react";
import { UserCard } from "./components/UserCard";
import "./styles.css";
import { User } from "./types/api/user";
import { UserProfile } from "./types/userProfile";

export default function App() {
  const [userProfile, setUserProfile] = useState<Array<UserProfile>>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const onClickFetchUser = () => {
    setLoading(true);
    setError(false);

    axios
      .get<Array<User>>("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        const data = res.data.map((user) => {
          return {
            id: user.id,
            name: `${user.name}(${user.username})`,
            email: user.email,
            address: `${user.address.city}${user.address.suite}${user.address.street}`
          };
        });
        setUserProfile(data);
      })
      .catch(() => {
        setError(true);
      })
      .finally(() => {
        setLoading(false);
      });
  };
  return (
    <div className="App">
      <button onClick={onClickFetchUser}>Get Data</button>
      <br />
      {error ? (
        <p style={{ color: "red" }}>Fail in getting data</p>
      ) : loading ? (
        <p>Loading...</p>
      ) : (
        <>
          {userProfile.map((user) => {
            return <UserCard key={user.id} user={user} />;
          })}
        </>
      )}
    </div>
  );
}
