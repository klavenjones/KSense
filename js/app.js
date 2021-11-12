//Grab the table
const userTable = document.getElementById("user-table");
const postList = document.getElementById("user-post");
const baseUrl = "https://jsonplaceholder.typicode.com";
//Add Headers
const requestHeaders = new Headers();
requestHeaders.append("Content-Type", "application/json");
const options = {
  headers: requestHeaders
};
//Adding table headers to our table
userTable.innerHTML = `<tr>
<th>ID</th>
<th>Name</th>
<th>Email</th>
<th>Username</th>
<th>Phone</th>
<th>Address</th>
<th>Website</th>
<th>Company</th>
</tr>`;

//Lets get the users
const getUsers = async () => {
  options.method = "GET";
  const response = await fetch(`${baseUrl}/users`, options);
  if (response.status === 200) {
    const users = await response.json();
    users.forEach((user) => {
      const tr = document.createElement("tr");
      //Add an onclick event to each row.
      tr.onclick = () => getPosts(user.id);
      tr.innerHTML = `     
        <td>${user.id}</td>
        <td>${user.name}</td>
        <td>${user.email}</td>
        <td>${user.username}</td>
        <td>${user.phone}</td>
        <td>${user.address.street} ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</td>
        <td>${user.website}</td>
        <td>${user.company.name}</td>
        `;
      userTable.appendChild(tr);
    });
  } else {
    const div = document.createElement("div");
    const message = `Something went wrong with your request (${response.status})`;
    div.innerHTML = message;
    document.body.appendChild(div);
  }
};

const getPosts = async (id) => {
  options.method = "GET";
  const response = await fetch(
    `${baseUrl}/posts?userId=${id}&language=english`,
    options
  );
  if (response.status === 200) {
    const posts = await response.json();
    //In order to swap out the current list of Posts, we need to remove the previous elements from the list.
    postList.innerHTML = "";
    posts.forEach((post) => {
      const li = document.createElement("li");
      li.innerHTML = `
      <h3>${post.title}</h3> 
      <p>Post ID: ${post.id}</p>
      <p>${post.body}</p>
      <p>Author: <span> User ${post.userId} </span> </p>`;
      postList.appendChild(li);
    });
  } else {
    const div = document.createElement("div");
    const message = `Something went wrong with your request (${response.status})`;
    div.innerHTML = message;
    document.body.appendChild(div);
  }
};

getUsers();
