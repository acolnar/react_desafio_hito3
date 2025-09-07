import bg from '../assets/pizza-bg.jpg';

export default function Header() {
  return (

      <header className="container-fluid text-white text-center d-flex align-items-center" style={{
        backgroundImage: `url(${bg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: '400px'
      }}>
        <div className='container text-center'>
            <h1 className='display-4'>¡Pizzería Mamma Mia!</h1>
            <p>¡Tenemos las mejores pizzas que podrás encontrar!</p>
        </div>
      </header>

  )
}
