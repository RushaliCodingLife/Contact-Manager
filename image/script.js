 
const api_url="https://jsonplaceholder.typicode.com/photos";


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
            <img src="${values.thumbnailUrl}" class="card-img-top" width="150px" height="150px" alt="...">
            <div class="card-body">
              <h5 class="card-text">${values.id}</h5>
              <p class="card-title">${values.title}</p>
              <h5 class="card-text">${values.url}</h5>
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