import { useEffect, useState } from 'react';

const DataLoad = filename => {
    const [services, setServices] = useState([]);

    useEffect(()=>{
        fetch(`./data/${filename}.json`)
        .then(res => res.json())
        .then(data => setServices(data));
    }, []);
    return [
        services,
    ]
};

export default DataLoad;