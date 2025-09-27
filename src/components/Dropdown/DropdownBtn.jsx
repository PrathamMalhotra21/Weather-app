function DropdownBtn({ children, handleOpen }) {
    return (
        <button className='dropdown-btn' onClick={handleOpen}>
            {children}
        </button>
    );
}

export default DropdownBtn;