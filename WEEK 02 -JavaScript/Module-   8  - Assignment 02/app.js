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
        console.log(Data1.others.posted_date);
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
                    <p class="author-name1">${Data1.authors[0].profile_name} ${Data1.authors[0].verified == true ? `<i id="verified_icon" class="text-primary bi bi-patch-check-fill"></i>` : ""} </p>
                    <p class="views1">${Data1.others.views} views</p>
                </div>
        </div>
        
        `
        AllContainer.appendChild(card1);
    });
}

const loadMusicData = () => {
    // const allCatagory=document.getElementById("All").innerText
    fetch(`https://openapi.programming-hero.com/api/videos/category/1001`)
        .then((res) => res.json())
        .then((Data2) => DisplayMusicData(Data2.data))
        .then((err) => console.log(err))
}
const DisplayMusicData = (Musicdata) => {
    const MusicContainer = document.getElementById("Music_Container");
    Musicdata.forEach((Data2) => {
        console.log(Data2);
        const card2 = document.createElement("div");
        card2.classList.add("box2");
        card2.className = "col-lg-3";
        card2.innerHTML =
            `
        <img class="box2-img" src=${Data2.thumbnail}alt="">
        <div class="detailscard2 d-flex ">
                <div class="img_border2 text-end">
                    <img src="${Data2.authors[0].profile_picture}" alt="" class="author-photo2 ">
                </div>
                <div class="card-details2 text-lg-left">
                    <h6 class="card-title2 text-left">${Data2.title}</h6>
                    <p class="author-name2">${Data2.authors[0].profile_name} ${Data2.authors[0].verified == true ? `<i id="verified_icon" class="text-primary bi bi-patch-check-fill"></i>` : ""} </p>
                    <p class="views2">${Data2.others.views} views</p>
                </div>
        </div>
        
        `
        MusicContainer.appendChild(card2);
    });
}

const loadComedyData = () => {
    // const allCatagory=document.getElementById("All").innerText
    fetch(`https://openapi.programming-hero.com/api/videos/category/1003`)
        .then((res) => res.json())
        .then((Data3) => DisplayComedyData(Data3.data))
        .then((err) => console.log(err))
}
const DisplayComedyData = (Comedydata) => {
    const ComedyContainer = document.getElementById("Comedy_Container");
    Comedydata.forEach((Data3) => {
        // console.log(Data3);
        const card3 = document.createElement("div");
        card3.classList.add("box3");
        card3.className = "col-lg-3";
        card3.innerHTML =
            `
        <img class="box3-img" src=${Data3.thumbnail}alt="">
        <div class="detailscard3 d-flex ">
                <div class="img_border3 text-end">
                    <img src="${Data3.authors[0].profile_picture}" alt="" class="author-photo3 ">
                </div>
                <div class="card-details3 text-lg-left">
                    <h6 class="card-title3 text-left">${Data3.title}</h6>
                    <p class="author-name3">${Data3.authors[0].profile_name} ${Data3.authors[0].verified == true ? `<i id="verified_icon" class="text-primary bi bi-patch-check-fill"></i>` : ""} </p>
                    <p class="views3">${Data3.others.views} views</p>
                </div>
        </div>
        
        `
        ComedyContainer.appendChild(card3);
    });
}

const loaddrawingData = () => {
    // const allCatagory=document.getElementById("All").innerText
    fetch(`https://openapi.programming-hero.com/api/videos/category/1005`)
        .then((res) => res.json())
        .then((Data4) => DisplayDrwaingData(Data4.data))
        .then((err) => console.log(err))
}

const DisplayDrwaingData = (DrawingData) => {
    const DrawingContainer = document.getElementById("Drawing_Container");
    const card4 = document.createElement('div');
    card4.innerHTML = `
            <div class="error text-center mt-5 pt-5">
                <img class="img-fluid" src="./images/Icon.png" alt="error icon">
                <h1 class="fw-bold mt-3">Oops!! Sorry, There is no <br>Content here</h1>
            </div>
        `;
    DrawingContainer.appendChild(card4);

}

const loadSortByView = () => {
    // const allCatagory=document.getElementById("All").innerText
    fetch(`https://openapi.programming-hero.com/api/videos/category/1000`)
        .then((res) => res.json())
        // .then((Data5) => DisplaySortByView(Data5.data))
        .then((err) => console.log(err))
}


const DisplaySortByView = (SortByViewdata) => {
    const sortContainer = document.getElementById("sort_Container");
    SortByViewdata.forEach((Data5) => {
        console.log(Data5);
        // console.log("....");
        // console.log(Data5.others.views.tosorted());
       const views1= parseFloat(Data5.others.views)
       console.log(sortby(Data5.others.views1));
        
        const card5 = document.createElement("div");
        card5.classList.add("box5");
        card5.className = "col-lg-3";
        card5.innerHTML =
            `
        <img class="box3-img" src=${Data5.thumbnail}alt="" >
        <div class="detailscard5 d-flex ">
                <div class="img_border5 text-end">
                    <img src="${Data5.authors[0].profile_picture}" alt="" class="author-photo5 ">
                </div>
                <div class="card-details5 text-lg-left">
                    <h6 class="card-title5 text-left">${Data5.title}</h6>
                    <p class="author-name5">${Data5.authors[0].profile_name} </p>
                    <p class="views5">${Data5.others.views} views</p>
                </div>
        </div>
        `;
        sortContainer.appendChild(card5);
    });
}
