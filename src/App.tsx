import { UserCard } from "./sections/users/UserCard";
import { useUsers } from "./sections/users/useUsers";

export function App() {
	const users = useUsers();

	return (
		<div className="App">
			<h3>React App</h3>

			{users.map((user) => (
				<UserCard key={user.name} user={user} />
			))}
		</div>
	);
}
