
    var $slides=$('.slides');
    var currentSlide=1;
    var slideCount=$slides.children().length;
    console.log(slideCount);
    var slideTime=2000;

    setInterval(function(){
            $slides.animate({
              marginLeft: '-=960px'
            },slideTime,function(){
              console.log(currentSlide);
              currentSlide++;
              chageColor();
              if(currentSlide==slideCount){
                currentSlide=1;
                $(this).css("margin-left","0px");
              }
            });
            console.log("counters "+currentSlide);
    },3000);

    $('#b1').click(function(){
      currentSlide++;
      if(currentSlide>=4){
        currentSlide=1;
        console.log("clicked");
          $slides.animate({marginLeft: '0px'});
      }else{
         $slides.animate({marginLeft: '-=960px'});
      }
    })
    $('#b2').click(function(){
      currentSlide--;
      if(currentSlide==0){
        currentSlide=4;
        console.log("clicked");
         $slides.animate({marginLeft: '-960px'});
      }else{
         $slides.animate({marginLeft: '+=960px'});
      }
    })

    $('.fa').click(function(){
      currentSlide++;
      var d=this.id;
      if(d==1){
        currentSlide=1;
        $slides.animate({
              marginLeft: '0px'});
              $('#1').css("color","#ff4d94");
              $('#2,#3').css("color","black");
      }
      else if(d==2){
        currentSlide=2;
        $slides.animate({
              marginLeft: '-960px'});
              $('#2').css("color","#ff4d94");
              $('#1,#3').css("color","black");
      }
      else if(d==3){
        currentSlide=3;
        $slides.animate({
              marginLeft: '-1920px'});
              $('#3').css("color","#ff4d94");
              $('#2,#1').css("color","black");
      }
      else if(d==4){
        currentSlide=4;
        $slides.animate({
              marginLeft: '-1920px'});
              $('#1').css("color","#ff4d94");
              $('#2,#3').css("color","black");
      } 
    })

    function chageColor(){
      if(currentSlide==1){
        $('#1').css("color","#ff4d94");
              $('#2,#3').css("color","black");
      } else if (currentSlide==2) {
        $('#2').css("color","#ff4d94");
              $('#1,#3').css("color","black");
      }
      else if (currentSlide==3) {
        $('#3').css("color","#ff4d94");
              $('#1,#2').css("color","black");
      }
      else if (currentSlide==4) {
        $('#1').css("color","#ff4d94");
              $('#3,#2').css("color","black");
      }
    }