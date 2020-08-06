let url = window.location.toString();

let getUsername = (url) => {
        let urlArr = url.split('=');
        let urlName = urlArr[1];
        if (urlName == undefined){
            urlName = 'oxyrud';
        }
        return urlName
    }

let name = getUsername(url)


const body = document.body
fetch('https://api.github.com/users/'+ name)
  .then(res => res.json())
  .then(json => {
    name = json.name;
    photo = json.avatar_url;
    bio = json.bio;
    url = json.html_url;

  let userName = () => {
	let newName = document.createElement('a');
    newName.innerHTML = name;
    newName.href = url;
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
    newUrl.innerHTML = url;
    document.body.appendChild(newUrl);
 
  }
  if (json.name === "Not Found" || json.avatar_url === "Not Found"  || json.bio === "Not Found" ||json.html_url === "Not Found" ){
	  alert(err + 'Информация о пользователе не доступна')
  } else {
    userName ();
    userPhoto ();
    userBio ();
    userUrl ();
  }

})

.catch(err => alert(err)); 
 

 