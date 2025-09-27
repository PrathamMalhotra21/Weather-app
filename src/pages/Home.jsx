import { useState } from 'react';
import icon_search from '../assets/images/icon-search.svg';
import '../assets/myCss/Home.css';
import DropdownMenu from '../components/Dropdown/DropdownMenu';
import iconLoading from '../assets/images/icon-loading.svg';

function Home() {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const handleChange = (e) => {
        let searchQuery = e.target.value.trim();
        if (searchQuery && searchQuery != "") {
            setDropdownOpen(true);
        } else {
            setDropdownOpen(false);
        }
    }

    return (
        <>
            <section>
                <div className="container heading">
                    <h1>How 's the sky looking today?</h1>
                    <form onSubmit={handleSubmit}>
                        <div className="form-container">
                            <div className="search-field">
                                <label htmlFor="search"><img src={icon_search} alt="" className='search-icon' /></label>
                                <input type="search" onChange={handleChange} name="search" id="search" placeholder="Search for a place..." className="search-bar" />
                                <DropdownMenu isDropdownOpen={isDropdownOpen}>
                                    <div className="search-loading"> <img src={iconLoading} className='icon-loading' /> Search in progress</div>
                                    {/* <div className='dropdown-label'>City Name</div>
                                    <div className='dropdown-label'>City Name</div>
                                    <div className='dropdown-label'>City Name</div> */}
                                </DropdownMenu>
                            </div>
                            <button type="submit" className="search-btn">Search</button>
                        </div>
                    </form>
                </div>

                <div>

                </div>
            </section>
        </>
    )
}

export default Home;