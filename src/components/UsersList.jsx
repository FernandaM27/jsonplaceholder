import React from 'react';
import { useFetch } from '../hooks/useFetch';
import UserItem from './UserItem';

const UsersList = () => {
    const { data } = useFetch(
        'https://jsonplaceholder.typicode.com/users?userId=1'
    );
    const users = !!data && data;
    console.log(users);
    return (
        <>
            <h1>Users </h1>
            <hr />
            { users && users.map((user) => (
                <UserItem key={user.id} user={user} />
            ))}
        </>
    );
};

export default UsersList;
