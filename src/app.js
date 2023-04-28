import Home from "./home.js";
import User from "./user.js";
import Product from "./product.js";
import Role from "./role.js";
import layout from "./layout.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
        <BrowserRouter>
        <Routes>
            <Route path="/" component={layout}>
            <Route path="home" component={Home}/>
                <Route path="user" component={User}/>
                <Route path="product" component={Product}/>
                <Route path="role" component={Role}/>
                

            </Route>
        </Routes>
        </BrowserRouter>
    
        
    
        
    
  );
}



export default App;

/*function App(){

    var user= [{
        Id:101,
        Role:'Manager',
        Name:'teja',
        Mobile:978298238,
        Email:'teja143@gmail.com'
    },

    {
        Id:102,
        Role:' Project Manager',
        Name:'Vyshnavi',
        Mobile:9065734567,
        Email:'vyshnavi78@gmail.com'
    },
    {
        Id:103,
        Role:'Reactjs developer',
        Name:'jyosthna',
        Mobile:988882222,
        Email:'jyothsna@gmail.com'
    },
    {
        Id:104,
        Role:'Android developer',
        Name:'maneesha',
        Mobile:9660007893,
        Email:'maneesha67@gmail.com'
    },
    {
        Id:105,
        Role:'Linux admin',
        Name:'saipriya',
        Mobile:978962256,
        Email:'priya56@gmail.com'
    },
    {
        Id:106,
        Role:'Tester',
        Name:'keerthi',
        Mobile:897895265,
        Email:'keerthi23@gmail.com'



    }
]

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
        
        Name:'Tvs',
        
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

    var role= [{
        Id:101,
        Name:'Teja',
        Role:'Manager'
        
    },

    {
        Id:102,
        Name:'Vamsi',
        Role:'Project Manager'
        
    },
    {
        Id:103,
        
        Name:'Vijay',
        Role:'Devoloper'
        
    },
    {
        Id:104,
        
        Name:'Chowdary',
        Role:'Tester'
        
    },
    {
        Id:105,
        
        Name:'Sowjanya',
        Role:'Admin'
       
    }
    ]

console.log("user List",user);
console.log("product List",product);
console.log("role List",role);

return(
    <div>
        <Home />
      <User UserList={user} />
      <Product ProductList={product}/>
      <Role RoleList={role}/>

    </div>
)
} */
