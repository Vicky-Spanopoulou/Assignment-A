
// jquery

$(document).ready(function(){

    // display & hide accordion buttons
    $('#btn-trainer').on('click', () =>{
        $('#pnl-trainer').toggle();
    });

    $('#btn-student').on('click', () =>{
        $('#pnl-student').toggle();
    });

    $('#btn-course').on('click', () =>{
        $('#pnl-course').toggle();
    });

    $('#btn-assignment').on('click', () =>{
        $('#pnl-assignment').toggle();
    });

    // click the add new button to go to the form
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

    //scroll to top button
    $("#top-button").click(function(event){
        document.body.scrollTop = 0;
        document.documentElement.scrollTop = 0;
    });

    // Course tab menu - hide elements which are shown on document load
    $("#partTime").hide();

});


// click the add new button to go to the form

// $(document).ready(function(){
//     $("#new-student").click(function(event){
//         window.open('student.html', '_blank');
//     });

//     $("#new-trainer").click(function(event){
//         window.open('trainer.html', '_blank');
//     });

//     $("#new-course").click(function(event){
//         window.open('course.html', '_blank');
//     });

//     $("#new-assignment").click(function(event){
//         window.open('assignment.html', '_blank');
//     });

// });



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



// $(document).ready(function(){
//     $("#top-button").click(function(event){
//         document.body.scrollTop = 0;
//         document.documentElement.scrollTop = 0;
//     });
// });


// Course tab menu

// $(document).ready(function(){
//     $("#partTime").hide();
// });


// Course tab menu
function openCourse(evt, courseType) {
    let i; 
    let tabcontent;
    let tablinks;

    // hide all elements with class="tabcontent"
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
        tabcontent[i].style.display = "none";
    }
  
    // remove the class "active" from all elements with class="tablinks"
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab, and add an "active" class to the link that opened the tab
    document.getElementById(courseType).style.display = "block";
    evt.currentTarget.className += " active";
  };