$(document).ready(function(){

    $("button.main-button").click(function(){
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
    
    $("button.collapsible").click(function(){
        if($(this).text() == "Student Service Website") {
            $(".project1").toggle();
        }
        else if($(this).text() == "Online Banking Website") {
            $(".project2").toggle();
        }

    });
    
    $("").click(function() {
        $(this).hide();
        alert($(this).text());
    });

});
