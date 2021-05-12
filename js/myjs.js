
// display & hide accordion buttons

$(document).ready(function(){
    $('#btn-trainer').on('click', () =>{
        $('#pnl-trainer').toggle();
    })

    $('#btn-student').on('click', () =>{
        $('#pnl-student').toggle();
    })

    $('#btn-course').on('click', () =>{
        $('#pnl-course').toggle();
    })

    $('#btn-assignment').on('click', () =>{
        $('#pnl-assignment').toggle();
    })

})


// click the add new button to go to the form

$(document).ready(function(){
    $("#new-student").click(function(event){
        window.open('student.html', '_blank');
    });

    $("#new-trainer").click(function(event){
        window.open('trainer.html', '_blank');
    });

    $("#new-course").click(function(event){
        window.open('course.html', '_blank');
    });

    $("#new-assignment").click(function(event){
        window.open('assignment.html', '_blank');
    });

});


// Scroll to Top button

const topButton = document.getElementById('top-button');

window.onscroll = function(){scrollFunction()};

function scrollFunction(){
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20){
        topButton.style.display = 'block';
    }
    else{
        topButton.style.display = 'none';
    }
};

$(document).ready(function(){
    $("#top-button").click(function(event){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });
});