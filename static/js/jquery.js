$(document).ready(function(){

<<<<<<< HEAD
    $("button").click(function(){
=======
    $("button.main-button").click(function(){
>>>>>>> b2fbb771ab39af8224bf9665113ec7f39ecf9d7b
        console.log($(this).text());
        if($(this).text() == "Projects") {
            $(".skills-section").hide();
            $(".work-section").hide();
            $(".project-section").show();
        }
        else if($(this).text() == "Work Experience") {
            $(".skills-section").hide();
            $(".project-section").hide();
            $(".work-section").show();
        }
        else if($(this).text() == "Skills") {
            $(".work-section").hide();
            $(".project-section").hide();
            $(".skills-section").show();
        }


    });

<<<<<<< HEAD
=======
    $("button.collapsible").click(function(){
        if($(this).text() == "Student Service Website") {
            $(".project1").toggle();
        }
        else if($(this).text() == "Online Banking Website") {
            $(".project2").toggle();
        }

    });

>>>>>>> b2fbb771ab39af8224bf9665113ec7f39ecf9d7b
    $("").click(function() {
        $(this).hide();
        alert($(this).text());
    });

});
