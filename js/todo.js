function addListItem() { //Add new item to List
    //config
    var todo = $(".new-todo").val();

    if ($.trim(todo) === '') { //Do nothing if value if value is 0
        return false;
    } else { // Else add new list item

        $(".todoList").append("<li><button type='button' class='done'></button><span>" + todo + "</span><button class='edit'></button><button class='delete'></button></li>");
        $(".new-todo").val(" ");

    }
}

$(".new-todo").keydown(function(e) {
    console.log(e);
    // if enter key pressed
    if (e.which == 13) {
        addListItem();

    }


});
$(document).keydown("ul li span", function(e) {
    if (e.which == 13)
        return false;
});

function editItem() {
    // make the span editable and focus it
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
};


function deleteItem() { //Delete item
    $(this).parent().fadeOut("slow");

}

function finishItem() { //Cross-out and check item when done

    $(this).closest("li").find("span").toggleClass("crossed");

    $(this).toggleClass("checked");
}

function editItem() {
    // make the span editable and focus it
    $(this).closest("li").find("span").prop("contenteditable", true).focus();
    return false;
};
//Click Events

/*const add = document.querySelector(".add");
const del = document.querySelector(".del");

const done = document.querySelector(".done");
console.log(done);
const edit = document.querySelector(".edit");


$(document).on("click", add, addListItem);
$(document).on("click", del, deleteItem);
done.onClick = () => {
    finishItem()
}
$(document).on("click", edit, editItem)
    // make the span editable and focus it
    //$(this).closest("li").find("span").prop("contenteditable", true).focus();
    //return false; */


$(document).on("click", ".add", addListItem);
$(document).on("click", ".delete", deleteItem);
$(document).on("click", ".done", finishItem);
$(document).on("click", ".edit", editItem);