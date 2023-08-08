const ModelIH = {

    name: "Model Ivory Haven",
    srcRO: 'https://heyzine.com/flip-book/bc6eaf850f.html',
    srcEN: 'https://heyzine.com/flip-book/62d9e8b17b.html',
    desc: "<li >Un model potrivit pentru orice tip de proprietate.</li><li>Format A5(14,8 x 21 cm); Copertă: Hârtie; Pagini: Hârtie</li>"
    
    
};
const ModelRP = {

    name: "Model Royal Plum",
    srcRO: 'https://heyzine.com/flip-book/da9584464c.html',
    srcEN: 'https://heyzine.com/flip-book/37378a8023.html',
    desc: "<li>Un model potrivit pentru orice tip de proprietate.</li><li >Format A5(14,8 x 21 cm); Copertă: Hârtie; Pagini: Hârtie</li>"


};
const ModelWS = {

    name: "Model White Sands",
    srcRO: 'https://heyzine.com/flip-book/18f139f8de.html',
    srcEN: 'https://heyzine.com/flip-book/5b3c1cb1c7.html',
    desc: "<li>Un model potrivit pentru proprietățile în zona litoralului.</li><li>Format A5(14,8 x 21 cm); Copertă: Hârtie; Pagini: Hârtie</li>"



};
const ModelAE = {

    name: "Model Alpine Escape",
    srcRO: 'https://heyzine.com/flip-book/9938ddf200.html',
    srcEN: 'https://heyzine.com/flip-book/1af7f00a92.html',
    desc: "<li>Un model potrivit pentru proprietățile în zona de munte.</li><li >Format A5(14,8 x 21 cm); Copertă: Hârtie; Pagini: Hârtie</li>"



};



document.addEventListener('DOMContentLoaded', ()=>{

    const id_a = localStorage.getItem("id");
    const lb = localStorage.getItem("lb");

    
    if(lb == 'ro'){

        switch (id_a){
            case '1-ro':
            
                document.querySelector('iframe').src = ModelIH.srcRO;
                document.querySelector('h3').textContent = ModelIH.name;
                document.querySelector('ul#descr').innerHTML = ModelIH.desc;
                break;

            case '2-ro':
                 
                document.querySelector('iframe').src = ModelRP.srcRO;
                document.querySelector('h3').textContent = ModelRP.name;
                document.querySelector('ul#descr').innerHTML = ModelRP.desc;
                
                break;
            case '3-ro':

                document.querySelector('iframe').src = ModelWS.srcRO;
                document.querySelector('h3').textContent = ModelWS.name;
                document.querySelector('ul#descr').innerHTML = ModelWS.desc;
                
                 break;
            case '4-ro':

                document.querySelector('iframe').src = ModelAE.srcRO;
                document.querySelector('h3').textContent = ModelAE.name;
                document.querySelector('ul#descr').innerHTML = ModelAE.desc;
                break;
            default:
                break;
            }
                
   
    }
    else if(lb == 'en'){
        
        switch (id_a){
            case '1-en':
                
                document.querySelector('iframe').src = ModelIH.srcEN;
                document.querySelector('h3').textContent = ModelIH.name;
                document.querySelector('ul#descr').innerHTML = ModelIH.desc;
                
                break;
            case '2-en':

                document.querySelector('iframe').src = ModelRP.srcEN;
                document.querySelector('h3').textContent = ModelRP.name;
                document.querySelector('ul#descr').innerHTML = ModelRP.desc;
                
                break;
            case '3-en':

                document.querySelector('iframe').src = ModelWS.srcEN;
                document.querySelector('h3').textContent = ModelWS.name;
                document.querySelector('ul#descr').innerHTML = ModelWS.desc;
                
                break;
            case '4-en':

                document.querySelector('iframe').src = ModelAE.srcEN;
                document.querySelector('h3').textContent = ModelAE.name;
                document.querySelector('ul#descr').innerHTML = ModelAE.desc;
                
                break;
            default:
                break;
            }
        
       
        }
    
    
    
    

});