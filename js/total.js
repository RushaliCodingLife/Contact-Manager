  // dashboard

  function openLeftMenu() {
    document.getElementById("leftMenu").style.display = "block";
  }
  
  function closeLeftMenu() {
    document.getElementById("leftMenu").style.display = "none";
  }



// fetching api 

 
const api_url="https://api.github.com/users";


async function getdata(url){
   await fetch(url).then((res)=>{
        console.log(res);
        return res.json();

    })
    .then((data)=>{
        console.log(data);


        // Card Interpolation

        let data1="";
        data.map((values)=>{
            data1 += 
            `
                       
            <div class="card mt-5 ms-3 mb-2" style="width: 18rem;">
            <img src="${values.avatar_url}" class="card-img-top" width="150px" height="150px" alt="...">
            <div class="card-body">
              <h5 class="card-text"><span class="card-title">${values.id} </span> ${values.login}  </h5>
              <h5 class="card-text">${values.url}</h5>
              <p><a href="#" class="card-link text-primary" style="text-decoration: none;"> ${values.gists_url }</a></p>
              <a href="#" class="btn btn-primary">See The Picture</a>
            </div>
          </div>


            `
        });

        document.getElementById('card').innerHTML=data1;

    })
    .catch((err)=>{
        console.log(err);
    });
}

getdata(api_url);