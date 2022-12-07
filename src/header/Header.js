import './Header.css';

function Header() {
    return (
        <div className="Header">
            <a href="https://sps.edu" className="Header-Button"><h1>SPS</h1></a>
            <a href="/" className="Header-Button"><h3>TEAM 1512</h3></a>
            <a href="/members" className="Header-Button">MEMBERS</a>
        </div>
    );
}

export default Header;
