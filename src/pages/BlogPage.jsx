import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';

function BlogPage() {
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlog() {
        setLoading(true);
        let url = `${baseUrl}?blogId=${blogId}`;
        try {
            const res = await fetch(url);
            const data = await res.json();
            console.log(data);
            setBlog(data.blog);
            setRelatedBlog(data.relatedBlogs)
        } catch (err) {
            console.log(err);
            setBlog(null);
            setRelatedBlog([]);
        }
        setLoading(false);
    }
    useEffect(() => {
        if (blogId) {
            fetchRelatedBlog();
        }
    }, [location.pathname]);
    return (
        <div>
            <Header />
            <div>
                <button onClick={() => navigation(-1)}>Back</button>
            </div>
            {
                loading ?
                    (<div>
                        <p>Loading</p>
                    </div>) :
                    blog ?
                        (
                        <div>
                            <BlogDetails post={blog} />
                            <h2>Related Blog</h2>
                            {
                                relatedBlog.map((post) => (
                                    <div key={post.id}> <BlogDetails post={post} /></div>
                                ))
                            }
                            </div>

                        ) :
                        (<div>
                            <p>No Blog Found</p>
                        </div>)
            }
        </div>
    )
}

export default BlogPage