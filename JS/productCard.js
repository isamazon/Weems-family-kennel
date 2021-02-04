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
    // add vars a boy or girl variant inside the img id
    let girl = document.querySelector('.girlImage');
    let boy = document.querySelector('.boyImage');
      // Add a background var
    let gBackground = document.querySelector('.product-img');
    let viewPuppyBtn = document.querySelector('.popup-btn');

    viewPuppyBtn.addEventListener('click', () => {
      console.log('clickly click');
    })
    if (gBackground.classList.contains(boy)) {
      console.log('it does')
    } else if (gBackground.classList.contains(girl)) {
      console.log('it also does')
    }
    

    //Create a for each loop for the girl and boy object, changing the background style varying on the gender  
