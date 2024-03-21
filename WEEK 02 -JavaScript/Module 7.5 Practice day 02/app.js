// PRACTICE 01: -->>

// fetch("https://jsonplaceholder.typicode.com/comments")
// .then ((response)=>response.json())
// .then((data)=>console.log(data))
// .catch((err)=>console.log(err))


// PRACTICE 02: -->>

const loaddata = () => {
    const loadComents = document.getElementById("load-coments").innerText;
    fetch(`https://jsonplaceholder.typicode.com/comments`)
        .then((res) => res.json())
        .then((data) => DisplayData(data))
        .catch((err) => console.log(err))
}

const DisplayData = (data) => {
    // console.log(data);
    document.getElementById("total-coments").innerText = data.length;
    const commentContainer = document.getElementById("comment-container");
    data.forEach((comment) => {
        console.log(comment);
        const card = document.createElement("div");
        card.classList.add("card_decoration");
        card.innerHTML = `
        <h2>commment is below</h2>
        <p>id : ${comment.id}</p>
        <p>${comment.body}</p>
        `;
        commentContainer.appendChild(card);
    });

};