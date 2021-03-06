// Default hide elements
$(".commentsItter").hide();
$(".commShow").hide();
$("#quoteTextarea").hide();
$(".profilePicEdit").hide();
$(".profileCoverEdit").hide();

//  login popover
$("#idLogin").popover({
    placement:'bottom',
    html: true,
    content: '<form class="well form-inline" method="post" action="login.php"><input type="text" name="username" class="username input-medium form-control " placeholder="username">&nbsp<input type="password" class="password input-medium form-control "  name="password" placeholder="password">&nbsp<button type="submit"  class=" btn btn-outline-success ui-button-primary ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only loginBtn">Log-in</button></form>',
    trigger: 'focus'
}).click(function(e) {
    $(this).popover('toggle');
    e.stopPropagation();
});
$("#idRegister").popover({
    placement:'bottom',
    html: true,
    content: '<form class="well form-inline" method="post" action="login.php"><input type="text" name="username" class="username input-medium form-control " placeholder="username">&nbsp<input type="password" class="password input-medium form-control "  name="password" placeholder="password">&nbsp<button type="submit"  class=" btn btn-outline-success ui-button-primary ui-button ui-widget ui-state-default ui-corner-all ui-button-text-only loginBtn">Register</button></form>',
    trigger: 'focus'
}).click(function(e) {
    $(this).popover('toggle');
    e.stopPropagation();
});

// Transform input on text area
$(".postInput").on("focus",function(){
    $(this).css("height","200px");
});
$(".postInput").on("focusout",function(){
    $(this).css("height","40px");
});


// submit form comment on enter
$('.addCommentInput').keydown(function(event) {
    // enter has keyCode = 13, change it if you want to use another button
    if (event.keyCode == 13) {
        this.form.submit();
    return false;
    }
});
$(".quoteTrigger").on("click",function(){
    $("#quoteTextarea").toggle();
});
$(".commentsNumber").on("click",function(){
    $(".commentsItter").toggle();
});
$(".comments").on("click",function(){
    $(".commShow").toggle();
})

// PROFILE PICTURE
// profile picture trigger button
$(".profileImg").on({
    mouseenter: function () {
         $(".profilePicEdit").show();
    },
    mouseleave: function () {
        $(".profilePicEdit").hide();
    }
});
// rezolve buton itself hover error
$(".profilePicEdit").on({
    mouseenter: function () {
         $(this).show();
    },
    mouseleave: function () {
         $(".profilePicEdit").hide();
    }
});

// resolve button form submit error
function formSubmitProfilePic(){
    document.getElementById("profilePicModalForm").submit();
} 


// COVER PICTURE
$(".coverImg").on({
    mouseenter: function () {
         $(".profileCoverEdit").show();
    },
    mouseleave: function () {
        $(".profileCoverEdit").hide();
    }
});

// rezolve buton itself hover error
$(".profileCoverEdit").on({
    mouseenter: function () {
         $(this).show();
    },
    mouseleave: function () {
         $(".profileCoverEdit").hide();
    }
});
function formSubmitCoverPic(){
    document.getElementById("CoverPicModalForm").submit();
} 

