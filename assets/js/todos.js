//Check off specific todos by clicking

$("ul").on("click", "li",  function(){
    $(this).toggleClass("completed");
});

//click on X to delete toDO

$("ul").on("click", "span", function(event){
    event.stopPropagation();
    $(this).parent().fadeOut(500, function(){
        $(this).remove();
    });
});

$("input[type='text']").on("keypress", function(event){
    if (event.which === 13){
        console.log("you hit enter!");  
        // console.log($(this).val());
        let todoText = $(this).val();
        $(this).val("");
        $("ul").append("<li><span><i class='fas fa-trash-alt'></i></span>"+ todoText +"</li>")
             
    }
});

$(".fa-edit").on("click", function(){
    $("input[type = 'text']").fadeToggle();
});