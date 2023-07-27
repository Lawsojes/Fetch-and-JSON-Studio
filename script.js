// TODO: add code here

window.addEventListener("load", function(){
    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(respnse){
        respnse.json().then(function(json){
            console.log(json)
            let output = document.getElementById("container")
            for (let key in json){
                output.innerHTML =`
                <div>
                    <div>
                    <h3>${json.firstName} ${json.lastName}</h3>
                    <ul>

                    </ul>
                    </div>
                </div>
                `
            }
      
      
        })
    })

})