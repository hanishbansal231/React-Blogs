import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom';
import { AppContext } from '../Context/AppContext';
import { baseUrl } from '../baseUrl';
import Header from '../Components/Header';
import BlogDetails from '../Components/BlogDetails';

function BlogPage() {
    const newBaseUrl = "https://codehelp-apis.vercel.app/api/";
    const [blog, setBlog] = useState(null);
    const [relatedBlog, setRelatedBlog] = useState([]);
    const location = useLocation();
    const navigation = useNavigate();
    const { setLoading, loading } = useContext(AppContext);
    const blogId = location.pathname.split("/").at(-1);
    async function fetchRelatedBlog() {
        setLoading(true);
        let url = `${newBaseUrl}get-blog?blogId=${blogId}`;
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
        <div className='mt-[100px]'>
            <Header />
            <div className='max-w-[670px] m-auto'>
                <button className='rounded-md border-2 px-4 py-1 mb-[20px]' onClick={() => navigation(-1)}>Back</button>
            </div>
            {
                loading ?
                    (<div className='flex justify-center items-center w-full min-h-[50vh]'>
                        <p className='text-3xl uppercase'>Loading...</p>
                    </div>) :
                    blog ?
                        (
                       <div className='w-full flex flex-col justify-center items-center'>
                         <div className='max-w-[670px] mb-[50px]'>
                            <BlogDetails post={blog} />
                            <h2 className='font-bold text-2xl mb-[10px] mt-[10px] underline italic'>Related Blog</h2>
                            {
                                relatedBlog.map((post) => (
                                    <div key={post.id}> <BlogDetails post={post} /></div>
                                ))
                            }
                            </div>
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