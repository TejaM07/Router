function Product(props){

    console.log("Product List-->",props.ProductList);


    var product= [{
        Id:101,
        Name:'Mobiles',
        
    },

    {
        Id:102,
        Name:'Laptops',
        
    },
    {
        Id:103,
        
        Name:'Watches',
        
    },
    {
        Id:104,
        
        Name:'Tv',
        
    },
    {
        Id:105,
        
        Name:'Refrigirators',
        
    },
    {
        Id:106,
        
        Name:'Adoptors',

    }


    ]

    console.log("product data ",Product);

    return(

          <div>
            <table border={2}>
                <h1>Product List</h1>
                  <tr>
                     <td>Id</td>
                     <td>Name</td>
                     
                 </tr>

                
              {product.map((product,i) =>
              (
              <tr>
                <td>{product.Id}</td>
                
                <td>{product.Name}</td>
    
                   </tr>
            )
          )}


          < product />
          </table>
         </div>


        );


    }

    export default Product;