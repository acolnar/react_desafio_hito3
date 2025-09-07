export default function Navbar() {
    const total = 25000;
    const token = false;
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top px-3">
        <div className="container-fluid">
            <a className="navbar-brand" href="#">Pizzeria Mamma Mia!</a>
            <div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
            <div className="collapse navbar-collapse d-flex gap-2" id="navbarNav">

                    <button className="btn btn-outline-light">🍕 Home</button>
                    {token ? (
                        <>
                        <button className="btn btn-outline-light">🔓 Profile</button>
                        <button className="btn btn-outline-light">🔓 Logout</button>
                        </>
                    ) : (

                                                <>
                        <button className="btn btn-outline-light">🔐 Login</button>
                        <button className="btn btn-outline-light">🔐 Register</button>
                        </>

                    )}
                    <button className="btn btn-outline-success">🛒 Total: ${total.toLocaleString('es-CL')}</button>

            </div>
            </div>
        </div>
        </nav>
    </div>
  )
}
