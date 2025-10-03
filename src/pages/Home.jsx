import { useState } from 'react';
import '../assets/myCss/Home.css';
import Loading from '../components/Loading';
import Search from '../components/Search';

function Home() {
    const [isLoading, setisLoading] = useState(true);


    return (
        <>
            <section>
                <div className="container heading">
                    <h1>How 's the sky looking today?</h1>
                    <Search />
                </div>
            </section>

            <section>
                <div className="container">
                    {isLoading ? <Loading/> : <div className="">Data is loaded</div> }
                </div>
            </section>
        </>
    )
}

export default Home;