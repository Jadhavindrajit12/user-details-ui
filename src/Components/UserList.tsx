import { User } from "@/app/page";
import { List, ListItem, ListItemButton, ListItemText } from "@mui/material";

interface UserListProps {
  users: { id: number; name: string }[];
  onUserSelect: (id: number) => void;
  selectedUser: User | null
}

const UserList = ({ users, onUserSelect, selectedUser }: UserListProps) => {
  return (
    <List>
      {users.map((user) => (
        <ListItem key={user.id} disablePadding className={`${(selectedUser && selectedUser.id === user.id) ? 'selected-user' : ''}`}>
          <ListItemButton onClick={() => onUserSelect(user.id)}>
            <ListItemText primary={user.name} />
          </ListItemButton>
        </ListItem>
      ))}
    </List>
  );
};

export default UserList;
