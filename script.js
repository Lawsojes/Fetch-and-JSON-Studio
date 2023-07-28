// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(respnse){
        respnse.json().then(function(json){
            console.log(json)
            let output = document.getElementById("container")
            for (let key in json){
                output.innerHTML +=`
                <div class=astronaut>
                    <div>
                    <h3>${json[key].firstName} ${json[key].lastName}</h3>
                    <ul>
                        <li>Hours in space: ${json[key].hoursInSpace} </li>
                        <li>Active: ${json[key].active} </li>
                        <li>Skills: ${json[key].skills} </li>
                    </ul>
                    </div>
                    <img class="avatar"src=${json[key].picture}>
                </div>
                `
            }
      
      
        })
    })

})