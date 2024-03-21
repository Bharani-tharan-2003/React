const Navbar = () => {
    return ( 
        <nav className = "navbar">
            <h1>Dojo Blog</h1>
            <div className="links">
                <a href="/">Let's</a>
                <a href="/create "style={{
                   color:"white",
                   backgroundColor:"Red",
                   borderRadius:"8px"
                    }}>start</a>
            </div>    
        </nav>
     );
}
 
export default Navbar;