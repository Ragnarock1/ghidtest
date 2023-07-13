const ModelIH = {

    name: "Model Ivory Haven",
    desc: "Un model potrivit pentru proprități în zonă alpină",
    srcRO: 'https://heyzine.com/flip-book/bc6eaf850f.html',
    srcEN: 'https://heyzine.com/flip-book/62d9e8b17b.html'
    
    
};
const ModelRP = {

    name: "Model Royal Plum",
    desc: "Un model potrivit pentru proprități în zonă alpină",
    srcRO: 'https://heyzine.com/flip-book/da9584464c.html',
    srcEN: 'https://heyzine.com/flip-book/37378a8023.html'

};
const ModelWS = {

    name: "Model White Sands",
    desc: "Un model potrivit pentru proprități în zonă alpină",
    srcRO: 'https://heyzine.com/flip-book/18f139f8de.html',
    srcEN: 'https://heyzine.com/flip-book/5b3c1cb1c7.html'


};
const ModelAE = {

    name: "Model Alpine Escape",
    desc: "Un model potrivit pentru proprități în zonă alpină",
    srcRO: 'https://heyzine.com/flip-book/9938ddf200.html',
    srcEN: 'https://heyzine.com/flip-book/1af7f00a92.html'


};



document.addEventListener('DOMContentLoaded', ()=>{

    const id_a = localStorage.getItem("id");
    const lb = localStorage.getItem("lb");

    
    if(lb == 'ro'){

        switch (id_a){
            case '1':
            
                document.querySelector('iframe').src = ModelIH.srcRO;
                document.querySelector('h3').textContent = ModelIH.name;
                document.querySelector('p').textContent = ModelIH.desc;
                break;

            case '2':
                 
                document.querySelector('iframe').src = ModelRP.srcRO;
                document.querySelector('h3').textContent = ModelRP.name;
                document.querySelector('p').textContent = ModelRP.desc;
                break;
            case '3':

                document.querySelector('iframe').src = ModelWS.srcRO;
                document.querySelector('h3').textContent = ModelWS.name;
                document.querySelector('p').textContent = ModelWS.desc;
                 break;
            case '4':

                document.querySelector('iframe').src = ModelAE.srcRO;
                document.querySelector('h3').textContent = ModelAE.name;
                document.querySelector('p').textContent = ModelAE.desc;
                break;
            default:
                alert("sorry sir");
                break;
            }
                
   
    }
    else if(lb == 'en'){
        
        switch (id_a){
            case '1':
                
                document.querySelector('iframe').src = ModelIH.srcEN;
                document.querySelector('h3').textContent = ModelIH.name;
                document.querySelector('p').textContent = ModelIH.desc;
                break;
            case '2':

                document.querySelector('iframe').src = ModelRP.srcEN;
                document.querySelector('h3').textContent = ModelRP.name;
                document.querySelector('p').textContent = ModelRP.desc;
                break;
            case '3':

                document.querySelector('iframe').src = ModelWS.srcEN;
                document.querySelector('h3').textContent = ModelWS.name;
                document.querySelector('p').textContent = ModelWS.desc;
                break;
            case '4':

                document.querySelector('iframe').src = ModelAE.srcEN;
                document.querySelector('h3').textContent = ModelAE.name;
                document.querySelector('p').textContent = ModelAE.desc;
                break;
            default:
                break;
            }
        
       
        }
    
    
    
    

});