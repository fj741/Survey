document.addEventListener('DOMContentLoaded', function(){
    const allStars = document.querySelectorAll('.star')

    allStars.forEach(star => {
        star.addEventListener("click", function(){
            const selected = parseInt(this.getAttribute('data-value'))
            allStars.forEach((star, index)=>{
                if(index < selected){
                    star.classList.add('selected')
                }
                else{
                    star.classList.remove('selected')
                }
            })
        })
    });
})