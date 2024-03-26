import { useContext } from "react";
import { TodoContext } from "../TodoContext";

export const Search = () =>{
    // para renombrar una prop del objeto 
    // search: renombre
    const {
        search,
        setSearch,
    }  = useContext(TodoContext);   
    return(
        <div className="mb-2">
            <label>Find your item</label>
            <input onChange={(e)=>setSearch(e.target.value)} value={search} className="form-control" type="text" />        
        </div>
    );
}


