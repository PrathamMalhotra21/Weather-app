function DropdownMenu({ children, isDropdownOpen }) {
    console.log(isDropdownOpen);
    return (
        <div className={`dropdown-menu ${isDropdownOpen ? "dropdown-open" : ""}`} data-open={isDropdownOpen}>
            {children}
        </div>
    )
}

export default DropdownMenu;