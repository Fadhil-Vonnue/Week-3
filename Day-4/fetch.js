class HttpError extends Error{
    constructor(message){
        super(message)
    }
}

const url = "https://jsonplaceholder.typicode.com/posts";
  const response = await fetch(url);
  console.log(response.status);
  console.log(response.headers);

async function fetchJSON(url,options){
    try{
    const res= await fetch(url,options)
    if(!response.ok)throw new HttpError("http error");
    return res.json()
    }
    catch(err){
        console.log("TIME EXCEEDED")
    }
}
console.log(await fetchJSON(url,{method:"POST",headers:{
    "Content-type":"application/JSON"
},body:JSON.stringify({name:"JOHN"})}))
console.log(await fetchJSON(url,{ signal: AbortSignal.timeout(5000) }))
