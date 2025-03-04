let blague = document.querySelector(".para");

function blaguealeatoire() {
    fetch("https://api.blablagues.net/?rub=blagues").then((response)=>{
        return response.json()
    }).then((res)=>{
        console.log(res.data);
        let text = res.data.content.text;
        let text1 = res.data.content.text_head;
        let text2 = res.data.content.text_hidden;
        let texte = `${text} ${text1} ${text2}`
        console.log(texte);
    
        blague.textContent = texte;    
    })
    .catch((err)=>{
        console.log(err);
    })
}
setInterval(blaguealeatoire, 9000)


