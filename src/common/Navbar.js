const Navbar = () => {
    return (
        <div style={{maxWidth: "1010px", gap: '50px'}} className=" mx-auto flex items-center">
            <div style={{width: '250px'}} className=" border-4">
                <h2>Col 1</h2>
            </div>
            <div style={{width: '500px'}}  className=" w-[500px] border-4">
            <h2>Col 2</h2>
            </div>
            <div style={{width: '160px'}}  className=" w-[160px] border-4">
            <h2>Col 3</h2>
            </div>
            
        </div>
    );
};

export default Navbar;