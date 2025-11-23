import { useState, useEffect } from "react";

function UsersFetch() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users?_limit=5")
            .then((response) => {
                if (!response.ok) {
                    throw new Error("Failed to fetch users");
                }
                return response.json();
            })
            .then((data) => {
                setUsers(data);
                setLoading(false);
            })
            .catch((error) => {
                setError(error.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <div>
            <h2>Users List</h2>
            {users.map((user) => (
                <div key={user.id}>
                    <li>
                        <strong>Name:</strong> {user.name} <br />
                        <strong>Email:</strong> {user.email} <hr />
                    </li>
                </div>
            ))}
        </div>
    );
}

export default UsersFetch;