function Role(props){

    console.log("Role List-->",props.RoleList);


    var Role= [{
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


    console.log("role data ",Role);


    return(

          <div>
            <table border={2}>
                <h1>RoleList</h1>
                  <tr>
                     <td>Id</td>
                     <td>Name</td>
                     <td>Role</td>
                     
                 </tr>

                
              {Role.map((role,i) =>
              (
              <tr>
                <td>{role.Id}</td>
                
                <td>{role.Name}</td>
                <td>{role.Role}</td>
    
                   </tr>
            )
          )}

             <role />

          </table>
         </div>
         
        
         


        );


    }

    export default Role;