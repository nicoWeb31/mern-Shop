import React,{ useState, useEffect} from 'react';
import {useHistory} from 'react-router-dom'

const LoadingToRedirect = () => {

    const [count,setCount] = useState(5);
    const history = useHistory();

    useEffect(() => {

        const intertvals = setInterval(() => {
            
            setCount((currentCount)=> currentCount -1 )

        }, 1000);

        if(count === 0) {
            history.push('/');
        }


        return ()=> clearInterval(intertvals);

    },[count,history]);

    return (
        <div className = "container p-5 text-center">
            <p>Redirect to home page in {count} </p>
            
        </div>
    )
}

export default LoadingToRedirect
