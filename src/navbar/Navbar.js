import './Navbar.css';

function Navbar(props) {

    const scrollToPage = (n) =>{
        const pages = document.getElementById('Pages');
        pages.scroll({ left:n*window.innerWidth, behavior: "smooth"})
    }
    return (
        <div id="Navbar">
            <a href="https://sps.edu" className="nav-button" id="SPS">SPS</a>
            <a onClick={e => scrollToPage(0)} className="nav-button">TEAM 1512</a>
            <a onClick={e => scrollToPage(1)} className="nav-button">MEMBERS</a>
            <a onClick={e => scrollToPage(2)} className="nav-button">2023 SEASON</a>
            <a onClick={e => scrollToPage(3)} className="nav-button">SOMETHING ELSE</a>
        </div>
    );
}

export default Navbar;
