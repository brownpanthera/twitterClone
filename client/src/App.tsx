import {useEffect, useState} from "react"
import axios from "axios"

interface Joke{
    id: number;
    title: string;
    description: string;
}

const App: React.FC = () => {

    const [jokes, setJokes] = useState<Joke[]>([]);
    useEffect(()=> {
        axios.get('/api/jokes')
        .then((response)=>{
            setJokes(response.data)
        })
        .catch((error)=>{
            console.error(error);
            
        })
    }, [])
    return(
        <>
        <h1>hello from linux</h1>
        <p>Jokes: {jokes.length}</p>
        {
            jokes.map((joke, index) => (
                <div key={joke.id}>
                    <h3>{joke.title}</h3>
                    <p>{joke.description}</p>
                </div>
            ))
        }
        </> 
    )
}

export default App;