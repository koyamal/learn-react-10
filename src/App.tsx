import { UserCard } from "./components/UserCard";
import "./styles.css";
import { useAllUsers } from "./hooks/useAllUsers";
export default function App() {
  const { getUsers, userProfile, loading, error } = useAllUsers();
  const onClickFetchUser = () => {
    getUsers();
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
