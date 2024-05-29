import { Link } from "react-router-dom";

function Header() {
  return (
    <nav class="navbar navbar-expand-lg bg-body-tertiary" >
      {/* style={{'border':'solid'}} */}
      <div class="container-fluid , Header" >
        <a class="navbar-brand" href="#">Navbar</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <Link class="nav-link active" aria-current="page" to="">Home</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="aboutus">About</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="Form">Form</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="Componet1">Componet1</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="Component2">Component2</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="Errorbound">Error</Link>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="Main">Main</Link>
            </li>
            <li class="nav-item dropdown">
            <Link class="nav-link active" aria-current="page" to="login">Login</Link>
            
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Action</a></li>
                <li><a class="dropdown-item" href="#">Another action</a></li>
                <li><hr class="dropdown-divider" /></li>
                <li><a class="dropdown-item" href="#">Something else here</a></li>
              </ul>
            </li>
            <li class="nav-item">
            <Link class="nav-link active" aria-current="page" to="cart">Cart</Link>
            </li>
          </ul>
          <form class="d-flex" role="search">
            <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            <button class="btn btn-outline-success" type="submit">Search</button>

          </form>
        </div>
      </div>
    </nav>)
}
export default Header;