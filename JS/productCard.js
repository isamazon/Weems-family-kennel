var popupViews = document.querySelectorAll('.popup-view');
    var popupBtns = document.querySelectorAll('.popup-btn');
    var closeBtns = document.querySelectorAll('.close-card-btn');

    //javascript for quick view button
    var popup = function(popupClick){
      popupViews[popupClick].classList.add('active');
    }

    popupBtns.forEach((popupBtn, i) => {
      popupBtn.addEventListener("click", () => {
        popup(i);
      });
    });

    //javascript for close button
    closeBtns.forEach((closeBtn) => {
      closeBtn.addEventListener("click", () => {
        popupViews.forEach((popupView) => {
          popupView.classList.remove('active');
        });
      });
    });

    //Java-script for changing the background depending on if the image is a girl or boy 
    // First we want to add object that contain a boy or girl variant inside the img id

    let girl = document.getElementById('girlImage');
    let boy = document.getElemenyById('boyImage');
      // Add a background var
    let gBackground = document.querySelector('.product-img')
    

    //Create a for each loop for the girl and boy object, changing the background style varying on the gender  
    function changeBackground() {
      for (i = 0; i <= boy.length; i++) {
        genderBackground.gBackground.style.backgroundColor = 'blue';
      }
    }
    changeBackground();