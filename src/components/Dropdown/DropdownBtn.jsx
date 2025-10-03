function DropdownBtn({ children, openDropdown }) {
    return (
        <button className='dropdown-btn' onClick={openDropdown}>
            {children}
        </button>
    );
}

export default DropdownBtn;