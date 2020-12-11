$(window).on('load', function() {

    console.log('All assets are loaded')

    var images  = $("#images").children('li'),
        dot= $("#dots").children('span'),
        numImages = images.length,
        tm = 3500,
        interval = setInterval(autoPlay, tm),
        i = 0,
        a;

    function nextImg() {
        images.eq(i).removeClass('active');
        dot.eq(i).removeClass('active');
        i = ++i === numImages ? 0 : i;
        images.eq(i).addClass('active');
        dot.eq(i).addClass('active');
    };
    
    function prevImg() {
        images.eq(i).removeClass('active');
        dot.eq(i).removeClass('active');
        i = --i === -1 ? numImages -1 : i;
        images.eq(i).addClass('active');
        dot.eq(i).addClass('active');
    };
    
    function moveImg( i, a ) {
        clearInterval(interval);

       
        images.eq(a).removeClass('active');
        dot.eq(a).removeClass('active');

   
        images.eq(i).addClass('active');
        dot.eq(i).addClass('active');
        
        interval = setInterval(autoPlay, tm);       
    };
    
    $('.slides').hover(function(){
        $('#buttons').fadeIn(300);
        clearInterval(interval);
    }, function(){
        $('#buttons').fadeOut(300);
        interval = setInterval(autoPlay, tm);
    });
    
    $('#prev, #next').on('click', function (e) {
        e.preventDefault();
        if( this.id === 'next' ) {
            nextImg();
        } else {
            prevImg();
        }
    });
    
    $('.dot').on('click', function (e) {
        e.preventDefault();

        i = $(this).index();
        a = $('#dots').children('span.active').index();

        moveImg( i, a );        
    });
    
    function autoPlay() {
        $('#next').click();
    }

}); 
