
let api="http://10.10.67.158:4040"

async function fetchData(){
    let res=await fetch(api)
    let data=await res.json()
    console.log("\n\t data from the api : "+data);
    console.log("\n\t data IS Parsing into json  : "+JSON.stringify(data,null,2));

}
// fetchData();


async function reverse(){
    let iv=document.getElementById("i").value;
    console.log("\n\t input value : "+iv);

    let res = await fetch(`${api}/api/reverse?text=${iv}`)
    let data=await res.text();
    console.log("\n\t reverse : "+data);
    document.getElementById("o").innerText=data;

}