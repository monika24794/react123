function Product(props)
{// nestead funcation
    function myfunction(){
        //alert();// event listener using event
        props.price=9000
        //it not work because "price is read only mode avleable for props"
    }
//console.log(props)
//props is the props /properties it act as object and  reuseable for every attribute
return(
    <div className="border p-3">
        <h2>{props.price}</h2>
        <p>{props.name}</p>
        <button onClick={myfunction}>Add to cart</button>
    </div>
)
}
export default Product;