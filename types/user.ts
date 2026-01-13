export type UserRole = "Client" | "Admin" | "Artist";
export type UserStatus = "Active" | "Inactive" | "Banned";

export interface User {
  id: string;
  name: string;
  email: string;
  role: UserRole;
  status: UserStatus;
  joinedDate: string;
  avatar: string;
}
