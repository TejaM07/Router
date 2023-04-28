function User(props) {
    console.log("user List-->", props.userList);
  
    var user = [
      {
        Id: 101,
        Role: "Manager",
        Name: "teja",
        Mobile: 978298238,
        Email: "teja143@gmail.com",
      },
  
      {
        Id: 102,
        Role: " Project Manager",
        Name: "Vyshnavi",
        Mobile: 9065734567,
        Email: "vyshnavi78@gmail.com",
      },
      {
        Id: 103,
        Role: "Reactjs developer",
        Name: "jyosthna",
        Mobile: 988882222,
        Email: "jyothsna@gmail.com",
      },
      {
        Id: 104,
        Role: "Android developer",
        Name: "maneesha",
        Mobile: 9660007893,
        Email: "maneesha67@gmail.com",
      },
      {
        Id: 105,
        Role: "Linux admin",
        Name: "saipriya",
        Mobile: 978962256,
        Email: "priya56@gmail.com",
      },
      {
        Id: 106,
        Role: "Tester",
        Name: "keerthi",
        Mobile: 897895265,
        Email: "keerthi23@gmail.com",
      },
    ];
  console.log("user data ",user);
    return (
      <div>
        <table border={2}>
          <h1>User List</h1>
          <tr>
            <td>Id</td>
            <td>Role</td>
            <td>Name</td>
            <td>Mobile</td>
            <td>Email</td>
            <td>Action</td>
          </tr>
  
          {user.map((User,i) => (
            <tr>
              <td>{User.Id}</td>
              <td>{User.Role}</td>
              <td>{User.Name}</td>
              <td>{User.Mobile}</td>
              <td>{User.Email}</td>
              <td>{User.Edit}</td>
            </tr>
          ))}
  
          <user />
        </table>
      </div>
    );
  }
  
  export default User;
  