import styles from './InviteUsers.module.css';
import Search from '../Search/Search';
import useUsers from '../../data/users';
import { useMemo, useState } from 'react';
import { Close } from '../../icons';

export function InviteUsers({ addedUsers, setAddedUsers }) {
  const users = useUsers();
  const [search, setSearch] = useState('');
  const searchData = useMemo(
    () =>
      users
        .filter(
          (user) =>
            !addedUsers.map((addedUser) => addedUser.id).includes(user.id)
        )
        .map((user) => ({
          ...user,
          value: `${user.first_name} ${user.last_name} - ${user.email}`,
        })),
    [users, addedUsers]
  );

  return (
    <div className={styles.container}>
      <Search
        title="Invite Users"
        data={searchData}
        placeholder="Search by name or email"
        value={search}
        setValue={setSearch}
        onChange={(e) => {
          setSearch(e.target.value);
        }}
        onSelect={(val) => setAddedUsers((prev) => [...prev, val])}
      />
      <div className={styles.users}>
        {addedUsers.map((user) => (
          <span key={user.id} className={styles.user}>
            {`${user.first_name} ${user.last_name}`}
            <Close
              className={styles.remove}
              onClick={() =>
                setAddedUsers((prev) => prev.filter((u) => u.id !== user.id))
              }
            />
          </span>
        ))}
      </div>
    </div>
  );
}
