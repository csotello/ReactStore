const Product = (props) => {
    return (
        <div className="product">
            <h3>{props.data.title}</h3>
            <p>{props.data.catagory}</p>
            <p>{props.data.description}</p>
            <img src={props.data.image} alt="Product"/>
            <p>{props.data.price}</p>
        </div>
    )
}

export default Product