import { UserCardWrapper } from "../styles/StyledComponents";
import { User } from "./useUsers";

export function UserCard({ user }: { user: User }) {
	return <UserCardWrapper>{user.name}</UserCardWrapper>;
}
