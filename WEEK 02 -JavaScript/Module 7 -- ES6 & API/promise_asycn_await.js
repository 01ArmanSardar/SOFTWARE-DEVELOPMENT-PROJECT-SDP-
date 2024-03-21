// PROMISE : promise er moddeh 2 tah part takhe reslove and reject ,jkhn reslove hoi tkhn amrah data pai ar reject holeh amrha aktah error message pai

const getdata = new Promise(function (reslove, reject) {
    // hoi reslove hobhe nah hoi reject hoobhe
    // return reslove(20);
    return reject("data not pound")
});
getdata.then(data => console.log(data)).catch(err => console.log(err));


// ......................fetch.............................

// fetch er moddeh promise er motoi bisoy tah, reslove and reject er moto 2 tah part takhe,jeh api tekeh amrah kono aktah data ante jacchi sekhna tekehh jodhi aseh tahole setah reslove ar jodhi data tah kono karone nah eshe tahole reject 
fetch("https://fakestoreapi.com/products/1")
    .then((res) => res.json())
    .then((data) => console.log(data))
    .catch((err) => console.log(err));


// SYNCRONUS AND ASYNCRONUS DEFINATION :Asynchronous is a non-blocking architecture, so the execution of one task isn't dependent on another. Tasks can run simultaneously. Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it. Each task requires an answer before moving on to the next iteration.
//...................async , await.................

// const loadData = async () => {
//     const response = await fetch("https://fakestoreapi.com/products/1");
//     const data = await response.json();
//     console.log(data);
// }
// loadData();

// ..............try cacth in asyncrounus..................

const loadData = async () => {
    try {
        const response = await fetch("https://fakestoreapi.com/products/1");
        const data = await response.json();
        console.log(data);
    } catch
    {
        (err) => {
            console.log(err);
        };
    }

}
loadData();
