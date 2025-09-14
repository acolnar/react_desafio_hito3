export default function CardPizza({name, price, ingredients, img}) {
  return (
    <div className="card" style={{width: '18rem'}}>
        <img src={img} className="card-img-top" alt={name} />
        <div className="card-body">
            <h5 className="card-title">{name}</h5>
            <p className="card-text">Ingredientes: {ingredients.join(', ')}</p>
            <h6 className="text-success">Precio: ${price.toLocaleString('es-CL')}</h6>
            <div className="d-flex justify-content-between mt-3">
                <button className="btn btn-primary">Ver más 👀</button>
                <button className="btn btn-success">Añadir 🛒</button>
            </div>
        </div>
    </div>
  )
}