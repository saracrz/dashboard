export interface User {
	name: string;
}

export function useUsers(): User[] {
	return [{ name: "Peter" }, { name: "John" }];
}
