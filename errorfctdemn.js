
/*Input check for empty spaces */
document.querySelectorAll('input').forEach(item => {
    item.addEventListener('blur', () => {
      const check = item.nextElementSibling.nextElementSibling;
      const error = check.nextElementSibling;
      if (item.value.length === 0) {
        error.classList.add("visible");
        check.classList.remove('visible');
      } else {
        error.classList.remove('visible');
        check.classList.add("visible");
      }
    });
  });

/*Security check 
document.querySelectorAll('input').forEach(item => {
    item.addEventListener('submit', () => {
      


    });
  });
*/
