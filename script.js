let url = window.location.toString();

let getUrlName = (url) => {
        let urlArr = url.split('=');
        let urlName = urlArr[1];
        if (urlName == undefined){
            urlName = 'oxyrud';
        }
        return urlName;

}
let name = getUrlName(url);
let getDate = new Promise((resolve,reject) =>{
	let date = new Date();
	setTimeout(() => resolve(date),2000)
})

let userInfo = fetch('https://api.github.com/users/'+ name)

Promise.all([userInfo,getDate])
  .then(([request,date]) =>{
  	requestInfo = request;
  	requestDate = date;
  })
  .then(res => res.json())
  .then(json =>{
  	let userName = json.name;
  	let userPhoto = json.avatar_url;
  	let userBio = json.bio;
  	let userUrl = json.html_url;
  	let date = requestDate;

  	if(userName != undefined){
  		let getUserName = () => {
	       let newName = document.createElement('a');
           newName.innerHTML = name;
           newName.href = url;
           document.body.appendChild(newName); 
        }
 
        let getUserPhoto = () => {
           let newPhoto = document.createElement('img');
           newPhoto.src = photo;
           document.body.appendChild(newPhoto);
        }

        let getUserBio = () => {
           let newBio = document.createElement('p');
           newBio.innerHTML = bio;
           document.body.appendChild(newBio);
        }

        let getUserUrl = () => {
  	       let newUrl = document.createElement('a');
           newUrl.href = url;
           newUrl.innerHTML = url;
           document.body.appendChild(newUrl);
        }
        let getNewDate = () => {
        	let newDate = document.createElement('p');
        	newDate.innerHTML = requestDate;
        	document.body.appendChild(newUrl);
        }
    
        preloader.classList.add('hidden');
        getUserName ();
        getUserPhoto ();
        getUserBio ();
        getUserUrl ();
        getNewDate ();
    }
    
    else {
    	alert('Пользовтель с данным именем не существует')
    }

  })

.catch(err => alert(err)); 
 
