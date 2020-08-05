const body = document.body
fetch('https://api.github.com/users/oxyrud')
  .then(res => res.json())
  .then(json => {
    name = json.name;
    photo = json.avatar_url;
    bio = json.bio;
    url = json.html_url;

  let userName = () => {
	let newName = document.createElement('h1');
    newName.innerHTML = name;
    document.body.appendChild(newName); 
  }
 
  let userPhoto = () => {
    let newPhoto = document.createElement('img');
    newPhoto.src = photo;
    document.body.appendChild(newPhoto);

  }

  let userBio = () => {
    let newBio = document.createElement('p');
    newBio.innerHTML = bio;
    document.body.appendChild(newBio);
   }


  let userUrl = () => {
  	let newUrl = document.createElement('a');
    newUrl.href = url;
    newUrl.innerHTML = 'https://github.com/oxyrud';
    document.body.appendChild(newUrl);
 
  }

 userName ();
 userPhoto ();
 userBio ();
 userUrl ();
  
})

.catch(err => alert(err)); 

 
 

 