import { useState } from 'react';
import logo from '../assets/images/Logo.svg';
import dropdown_icon from '../assets/images/icon-dropdown.svg';
import icon_gear from '../assets/images/icon-units.svg';
import DropdownBtn from './Dropdown/DropdownBtn';
import Dropdown from './Dropdown/Dropdown';
import DropdownMenu from './Dropdown/DropdownMenu';

export default function Layout({ children }) {
    const [isDropdownOpen, setDropdownOpen] = useState(false);

    const openDropdown = () => {
        setDropdownOpen(prev => !prev);
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
    }

    return (
        <>
            <header>
                <div className="container nav">
                    <div className="logo"><img src={logo} alt="Weather Now" /></div>
                    <Dropdown>
                        <DropdownBtn openDropdown={openDropdown}>
                            <span><img src={icon_gear} alt="" /></span>
                            Units
                            <span><img src={dropdown_icon} alt="" /></span>
                        </DropdownBtn>
                        <DropdownMenu isDropdownOpen={isDropdownOpen}>
                            <form onSubmit={handleFormSubmit}>
                                <div>
                                    <input type="radio" name="units" id="imperial" value="imperial" className="radio-hidden" />
                                    <label htmlFor="imperial" className="dropdown-label">Switch to Imperial</label>
                                </div>

                                <div className="dropdown-section">
                                    <span className="dropdown-title">Temperature</span>

                                    <input type="radio" name="temperature" id="celsius" value="celsius" className="radio-hidden" />
                                    <label htmlFor="celsius" className="dropdown-label">Celsius (°C)</label>

                                    <input type="radio" name="temperature" id="fahrenheit" value="fahrenheit" className="radio-hidden" />
                                    <label htmlFor="fahrenheit" className="dropdown-label">Fahrenheit (°F)</label>
                                </div>

                                <div className="dropdown-section">
                                    <span className="dropdown-title">Wind Speed</span>

                                    <input type="radio" name="wind_speed" id="kmh" value="kmh" className="radio-hidden" />
                                    <label htmlFor="kmh" className="dropdown-label">Km/h</label>

                                    <input type="radio" name="wind_speed" id="mph" value="mph" className="radio-hidden" />
                                    <label htmlFor="mph" className="dropdown-label">mph</label>
                                </div>

                                <div className="dropdown-section">
                                    <span className="dropdown-title">Precipitation</span>

                                    <input type="radio" name="precipitation" id="millimeter" value="millimeter" className="radio-hidden" />
                                    <label htmlFor="millimeter" className="dropdown-label">Millimeter</label>

                                    <input type="radio" name="precipitation" id="inch" value="inch" className="radio-hidden" />
                                    <label htmlFor="inch" className="dropdown-label">Inch</label>
                                </div>
                            </form>
                        </DropdownMenu>
                    </Dropdown>
                </div>
            </header>
            <main>
                {children}
            </main>
        </>
    );
}