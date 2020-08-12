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
	setTimeout(() => new Date() ? resolve(date) : reject('Время неизвестно'),2000)
})

let userInfo = fetch('https://api.github.com/users/'+ name)

Promise.all([userInfo,getDate])
  .then(([request,date]) =>{
  	requestInfo = request;
  	requestDate = date;
  })
  .then(res => requestInfo.json())
  .then(json =>{
  	let userName = json.name;
  	let userPhoto = json.avatar_url;
  	let userBio = json.bio;
  	let userUrl = json.html_url;
  	let date = requestDate;
    let preloader = document.querySelector('.preloader');

  	if(userName != undefined){
  		let getUserName = () => {
	       let newName = document.createElement('a');
           newName.innerHTML = name;
           newName.href = url;
           document.body.appendChild(newName); 
        }
 
        let getUserPhoto = () => {
           let newPhoto = document.createElement('img');
           newPhoto.src = userPhoto;
           document.body.appendChild(newPhoto);
        }

        let getUserBio = () => {
           let newBio = document.createElement('p');
           newBio.innerHTML =userBio;
           document.body.appendChild(newBio);
        }

        let getUserUrl = () => {
  	       let newUrl = document.createElement('a');
           newUrl.href = url;
           newUrl.innerHTML = userUrl;
           document.body.appendChild(newUrl);
        }
        let getNewDate = () => {
        	let newDate = document.createElement('p');
        	newDate.innerHTML = requestDate;
        	document.body.appendChild(newDate);
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
 
