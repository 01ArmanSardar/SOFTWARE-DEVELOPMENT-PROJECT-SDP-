const loadAllData = () => {
    // const allCatagory=document.getElementById("All").innerText
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
        .then((res) => res.json())
        .then((Data) => DisplayAllData(Data.data))
        .then((err) => console.log(err))
}

const DisplayAllData = (alldata) => {
    const AllContainer = document.getElementById("All_Container");
    alldata.forEach((Data1) => {
        console.log(Data1);
        const card1 = document.createElement("div");
        card1.classList.add("box1");
        card1.className = "col-lg-3 ";
        card1.innerHTML =
            `
        <img class="box1-img" src=${Data1.thumbnail}alt="">
        <div class="detailscard1 d-flex ">
                <div class="img_border1 text-end">
                    <img src="${Data1.authors[0].profile_picture}" alt="" class="author-photo1 ">
                </div>
                <div class="card-details1 text-lg-left">
                    <h6 class="card-title1 text-left">${Data1.title}</h6>
                    <p class="author-name1">${Data1.authors[0].profile_name} </p>
                    <p class="views1">${Data1.others.views} views</p>
                </div>
        </div>
        
        `
        AllContainer.appendChild(card1);
    });
}
