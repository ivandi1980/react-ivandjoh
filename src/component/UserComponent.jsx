import React, {
    useEffect,
    useState
} from 'react';

import { getUsersList } from '../services/usersLists';

function UserComponent() {
    const [list, setList] = useState([]);

    useEffect(() => {
        let mounted = true;

        getUsersList().then(data => {
            if (mounted) {
                setList(data);
            }
        });
        return () => mounted = false;
    }, []);

    return (
        <>
            <h3>List's of Users</h3>
            <ul>
                {list.map(user => (
                    <>
                        <li key={user.id}>{user.name}</li>
                    </>
                ))}
            </ul>
        </>
    )
}

export default UserComponent