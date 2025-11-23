import { useState, useEffect } from "react";

function PostsFetchAsync() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch("https://jsonplaceholder.typicode.com/posts?_limit=5")
                if (!response.ok) {
                    throw new Error("Failed to fetch posts");
                }
                const data = await response.json();
                setPosts(data);
            } catch (error) {
                setError(error.message);
                console.error("Error fetching todos:", error);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <p>Loading...</p>
    if (error) return <p>Error: {error}</p>

    return (
        <div>
            <h2>Posts</h2>
            {posts.map((post) => (
                <div key={post.id}>
                    <li>
                        <strong>Title:</strong> {post.title} <br />
                        <strong>Body:</strong> {post.body} <hr />
                    </li>
                </div>
            ))}
        </div>
    );
}

export default PostsFetchAsync;