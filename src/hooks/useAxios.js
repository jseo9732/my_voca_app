import axios from "axios";
import { useEffect, useState } from "react";

function useAxios(url) {
    const [data, setData] = useState([]);

    useEffect(() => {
        const getData = async () => {
            const data = await axios.get(url);
            setData(data.data);
        }

        getData();
    }, [url]);
    
    return data;
}
    
export default useAxios;