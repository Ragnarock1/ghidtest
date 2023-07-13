document.querySelectorAll('a.aleg-model').forEach(item => {
    item.addEventListener('click', () => {

        
      localStorage.setItem("id", item.id);
      console.log(localStorage.getItem("id"));
      if(item.text == 'Română'){

        localStorage.setItem("lb", "ro");
        
      }
      else if(item.text == "Engleză"){
        
        localStorage.setItem("lb", "en");
      }
    });
  });