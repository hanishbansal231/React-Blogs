import { createContext, useState } from "react";
import {baseUrl} from '../baseUrl';
export const AppContext = createContext();

export default function AppContextProvider({children}){
    const [loading,setLoading] = useState(false);
    const [posts,setposts] = useState([]);
    const [page,setPage] = useState(1);
    const [totalPage,setTotalPage] = useState(null);

    async function fetchData(page = 1){
        setLoading(true);
        let url = `${baseUrl}?page=${page}`;
        try{
            const result = await fetch(url);
            const data = await result.json();
            // console.log(data);
            setPage(data.page);
            setposts(data.posts);
            setTotalPage(data.totalPages);
        }catch(e){
            console.log(e);
            setposts([]);
            setPage(1);
            setTotalPage(null);
        }
        setLoading(false);
    }
    function changeHandler(page){
        setPage(page);
        fetchData(page);
    }
    const value ={
        loading,
        setLoading,
        posts,
        setposts,
        page,
        setPage,  
        totalPage,
        setTotalPage,
        fetchData,
        changeHandler,
    }
    return <AppContext.Provider value={value}>{children}</AppContext.Provider>
}
