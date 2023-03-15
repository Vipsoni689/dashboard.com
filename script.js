
// ----------------------------------------LEFT TOGGLE-----------------------------------------------------


// -------------------------------------FOR LEFT  TOGGLE CUT-----------------------------------

function cut1(cut) {
    document.getElementById("none1").style.display = "none";     // NAVBAR LOGO DIV NONE
    cut.style.display = "none";
    cut.id = "none2";

    var btn_cut = document.getElementById("block1").style.display = "block";    //NAV BAR CUT BUTTON BLOCK

    document.getElementById("left_toggle").style = "width:70px;overflow:hidden; padding:10px !important;overflow-y: scroll; overflow-x: hidden;"                                    //CHANGE LEFT_TOGGLE SIZE                    

    var nav_item = document.getElementsByClassName("nav_item")   //LEFT_TOGGLE HEADING NONE
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].style = "display:none;"

    }
    var icon_item = document.getElementsByClassName("icon")    // CHANGE ICON SIZE
    for (var j = 0; j < icon_item.length; j++) {
        icon_item[j].style = "font-size:22px;"

    }
}
// -------------------------------------FOR LEFT  TOGGLE BLOCK-----------------------------------

function block1(block) {
    block.style.display = "none";                                   //CUT BUTTON NONE
    document.getElementById("none1").style.display = "block";           //NAV BAR LOGO BLOCK
    document.getElementById("none2").style.display = "block";
    document.getElementById("left_toggle").style = "width:20%;"       //LEFT_TOGGLE ORIGINAL SIZE

    var nav_item = document.getElementsByClassName("nav_item")      //LEFT_TOGGLE HEADING BLOCK
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].style = "display:block;"

    }

    var icon_item = document.getElementsByClassName("icon")  // CHANGE ORIGINAL ICON SIZE
    for (var j = 0; j < icon_item.length; j++) {
        icon_item[j].style = "font-size:14px"

    }

}


// ---------------------------------------LEFT TOGGLE LOGO NAVBAR CUT--------------------------------

function cut10(bt) {
    document.getElementById("none5").style.display = "none"    //LOGO NONE
    bt.style.display = "none"
    document.getElementById("block10").style.display = "block"  //CUT BUTTON BLOCK

    document.getElementById("left_toggle").style = "width:70px;overflow:hidden; padding:10px !important;overflow-y: scroll; overflow-x: hidden;"                                 //LEFT_TOGGLE SIZE CHANGE


    var nav_item = document.getElementsByClassName("nav_item")    //HEADINNG NONE
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].style = "display:none;"

    }
    var icon_item = document.getElementsByClassName("icon")       //CHANGE icon SIZE
    for (var j = 0; j < icon_item.length; j++) {
        icon_item[j].style = "font-size:20px;  width:28px !important; height:28px !important"


    }

}

// ---------------------------------------LEFT TOGGLE LOGO NAVBAR BLOCK--------------------------------
function block10(bl) {
    document.getElementById("none5").style.display = "block"       //LOGO BLOCK
    bl.style.display = "none"
    document.getElementById("none10").style.display = "block"
    document.getElementById("left_toggle").style = "width:20%;"      //CHANGE ORIGINAL LEFT_TOGGLE

    var nav_item = document.getElementsByClassName("nav_item")        //HEADING BLOCK
    for (var i = 0; i < nav_item.length; i++) {
        nav_item[i].style = "display:block;"

    }

    var icon_item = document.getElementsByClassName("icon")          //ORIGINAL SIZE OF ICON
    for (var j = 0; j < icon_item.length; j++) {
        icon_item[j].style = "font-size:16px"

    }
}






// ----------------------------------------------NAVBAR--------------------------------


// -----------------------------NAVBAR SEARCH BUTTONS CLICK DROPDOWN BLOCK --------------------------------

function open_search() {
    document.getElementById("menu").style = " display: none !important;";
    document.getElementById("search").style = " width:300px!important;";
    // document.getElementById("search").style = " display: flex  !important;";

}

// -----------------------------NAVBAR SEARCH BUTTONS CLICK DROPDOWN NONE --------------------------------

function close_search() {
    document.getElementById("menu").style = " display: block !important;";
    document.getElementById("search").style = " width:0  !important;   overflow: hidden; transition: all 0.5s;";
    document.getElementById("menu").style = " display: flex  !important;";

}

// -----------------------------NAVBAR MEGA_MENU BUTTONS CLICK DROPDOWN BLOCK --------------------------------

function open_mega() {
    if (document.getElementById("setting").style = " display:block !important;") {
        document.getElementById("setting").style = " display:none !important;";
        document.getElementById("mega_table").style = " display:block !important;";
    }
    else {
        document.getElementById("mega_table").style = " display:block !important;";
    }




}

// -----------------------------NAVBAR MEGA_MENU BUTTONS CLICK DROPDOWN NONE --------------------------------

function close_mega() {
    document.getElementById("mega_table").style = " display:none !important;";
}
// -----------------------------NAVBAR SETTING BUTTONS CLICK DROPDOWN BLOCK --------------------------------

function open_setting() {
    if (document.getElementById("mega_table").style = " display:block !important;") {
        document.getElementById("mega_table").style = " display:none !important;";
        document.getElementById("setting").style = " display:block !important;";
    }
    else {
        document.getElementById("setting").style = " display:block !important;";
    }

}
// -----------------------------NAVBAR SETTING BUTTONS CLICK DROPDOWN NONE --------------------------------

function close_setting() {
    document.getElementById("setting").style = " display:none !important;";
}

// -----------------------------NAVBAR PROJECT BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_project() {
    document.getElementById("project").style = " display:block !important;";
}
// -----------------------------NAVBAR PROJECT BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_project() {
    document.getElementById("project").style = " display:none !important;";
}

// -----------------------------NAVBAR GRID BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_grid() {
    document.getElementById("grid").style = " display:block !important;";
}
// -----------------------------NAVBAR GRID BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_grid() {
    document.getElementById("grid").style = " display:none !important;";
}
// -----------------------------NAVBAR NOTIFICATION BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_notification() {
    document.getElementById("notification").style = " display:block !important;";
}
// -----------------------------NAVBAR NOTIFICATION BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_notification() {
    document.getElementById("notification").style = " display:none !important;";
}
// -----------------------------NAVBAR LANGUAGE BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_language() {
    document.getElementById("language").style = " display:block !important;";
}
// -----------------------------NAVBAR LANGUAGE BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_language() {
    document.getElementById("language").style = " display:none !important;";
}
// -----------------------------NAVBAR LANGUAGE  CLICK AND CHANGE LOGO --------------------------------

function change_flag(change) {

    document.getElementById("flag_change").src = change.childNodes[1].src

}

// -----------------------------NAVBAR ONLINE  BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_online() {
    document.getElementById("online").style = " display:block !important;";
}
// -----------------------------NAVBAR ONLINE  BUTTONS CLICK DROPDOWN NONE --------------------------------

function close_online() {
    document.getElementById("online").style = " display:none !important;";
}

// -----------------------------NAVBAR PROFILE BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_profile() {
    document.getElementById("profile").style = " display:block !important;";
}
// -----------------------------NAVBAR PROFILE BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_profile() {
    document.getElementById("profile").style = " display:none !important;";
}

// -------------------NAVBAR NOTIOFICATION NAV & TABS FUNCTION------------
function open_tab(tab) {
    var b = document.getElementsByClassName("tab1")
    for (var i = 0; i < b.length; i++) {
        b[i].style = " display:none !important;";

    }
    document.getElementById(tab).style = "display:block !important"
}









// --------------------------------------------FOOTER--------------------------------------------


// -----------------------------FOOTER RIGHT MENU TABLE BLOCK --------------------------------

function open_mega1() {
    document.getElementById("mega_table1").style = " display:block !important;";
}
// -----------------------------FOOTER RIGHT MENU TABLE NONE --------------------------------

function close_mega1() {
    document.getElementById("mega_table1").style = " display:none !important;";
}

// -----------------------------FOOTER NOTIFICATION BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_notification1() {
    document.getElementById("notification1").style = " display:block !important;";
}

// -----------------------------FOOTER NOTIFICATION BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_notification1() {
    document.getElementById("notification1").style = " display:none !important;";
}

// -----------------------------FOOTER LANGUAGE BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_language1() {
    document.getElementById("language1").style = " display:block !important;";
}

// -----------------------------FOOTER LANGUAGE BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_language1() {
    document.getElementById("language1").style = " display:none !important;";
}


// -----------------------------FOOTER ONLINE BUTTONS CLICK DROPDOWN BLOCK --------------------------------
function open_online1() {
    document.getElementById("online1").style = " display:block !important;";
}
// -----------------------------FOOTER ONLINE BUTTONS CLICK DROPDOWN NONE --------------------------------
function close_online1() {
    document.getElementById("online1").style = " display:none !important;";
}



// ------------------------------ TACHNICAL SUPPORT RIGHT TOOGLE DROPDOWN BLOCK-------------------------------- 

function open_det() {
    document.getElementById("dett").style = " display:block !important";
}
// ------------------------------ TACHNICAL SUPPORT RIGHT TOOGLE DROPDOWN NONE--------------------------------
function close_det() {
    document.getElementById("dett").style = "display:none !important;";
}

// ------------------------------ Timeline Example RIGHT TOOGLE DROPDOWN BLOCK--------------------------------
function open_dett1() {
    document.getElementById("dett1").style = " display:block !important";
}
// ------------------------------ Timeline Example RIGHT TOOGLE DROPDOWN NONE--------------------------------
function close_dett1() {
    document.getElementById("dett1").style = "display:none !important;";
}

// ------------------------------ TASK LIST RIGHT TOOGLE DROPDOWN BLOCK-------------------------------- 
function open_dett2() {
    document.getElementById("dett2").style = " display:block !important";
}
// ------------------------------ TASK LIST RIGHT TOOGLE DROPDOWN NONE-------------------------------- 
function close_dett2() {
    document.getElementById("dett2").style = "display:none !important;";
}

// ------------------------------ CHAT BOX RIGHT TOOGLE DROPDOWN BLOCK-------------------------------- 
function open_dett3() {
    document.getElementById("dett3").style = " display:block !important";
}
// ------------------------------ CHAT BOX RIGHT TOOGLE DROPDOWN NONE-------------------------------- 
function close_dett3() {
    document.getElementById("dett3").style = "display:none !important;";
}
function open_dett5() {
    document.getElementById("dett5").style = " display:block !important";
}
// ------------------------------ CHAT BOX RIGHT TOOGLE DROPDOWN NONE-------------------------------- 
function close_dett5() {
    document.getElementById("dett5").style = "display:none !important;";
}
function open_dett6() {
    document.getElementById("dett6").style = " display:block !important";
}
// ------------------------------ CHAT BOX RIGHT TOOGLE DROPDOWN NONE-------------------------------- 
function close_dett6() {
    document.getElementById("dett6").style = "display:none !important;";
}


// -------------------------------------RIGHT TOGGLE DIV WIDTH 0---------------------------------------------

function width_left_zero() {

    document.getElementById("right_toggle").style = " right:-600px";     //RIGHT TOGGLE DIV
    document.getElementById("bg1").style = "display: none !important";           //BLUR BACKGROUND NONE
    document.getElementById("close_left_toggle").style = "display:none !important ;";     //CUT BTN NONE 
}
// -------------------------------------RIGHT TOGGLE DIV WIDTH 32% ---------------------------------------------
function width_left() {
    document.getElementById("close_left_toggle").style = "display:block !important ;";    //CUT BUTTON  BLOCK
    document.getElementById("right_toggle").style = " right:0;";      //RIGHT TOGGLE DIV WIDTH 32%
    document.getElementById("bg1").style = "display: block !important";             //BLUR BACKGROUND BLOCK
}

// ----------------------------TASK LIST DATA DELETE ----------------------------------------------------
function del(del) {
    del.parentNode.parentNode.remove()
}






// ---------------------LEFT TOGGLE DROPDOWN FUNCTION-----------------------
const accord_div = document.getElementsByClassName("title");

for (var j = 0; j < accord_div.length; j++) {
    accord_div[j].addEventListener("click", function () {
        this.classList.toggle("active");
    })

}
// ---------------------LEFT TOGGLE DROPDOWN FUNCTION-----------------------
const accord = document.getElementsByClassName("title1");

for (var j = 0; j < accord.length; j++) {
    accord[j].addEventListener("click", function () {
        this.classList.toggle("active1");

    })
}



// -----------------RIGHT BUTTON OF  HEAD OF MAIN BODY PAGE (DROPDOWN) BLOCK  ---------------

function btndata() {
    document.getElementById("btndata").style = "display:block;transform:translateY(0px); transition: all 0.5s;"
}
// -----------------RIGHT BUTTON OF  HEAD OF MAIN BODY PAGE (DROPDOWN)  NONE---------------
function close_btndata() {
    document.getElementById("btndata").style = "display:none;"
}




// -----------------------------VARIATION NAV & TAB FUNTIONS-------------------------

function open_tab1(tab1) {
    var tab = document.getElementsByClassName("validate");
    for (var i = 0; i < tab.length; i++) {
        tab[i].style = "display:none !important;";

    }
    document.getElementById(tab1).style = "display:block";


}



// -------------------------------CAROUSAL FUNTION------------------------
let slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {              //CHANGE SLIDE CLICK BUTTON
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);       //CURRENT SLIDE   
}

function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides1");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex - 1].style.display = "block";
    dots[slideIndex - 1].className += " active";
}


// ---------------------------------SETTING------------------------------------------------------

// ---------------------------SETTING DIV HEADER FIX------------------------

function fix1(fix) {
    console.log(fix)
    fix.classList.toggle("active")
    if (fix.innerHTML == "OFF") {
        fix.innerHTML = "ON"
        document.getElementById("nav").style = "width:100%"
        document.getElementById("fix_none").style = "display:block"
    }
    else {
        fix.innerHTML = "OFF"
        document.getElementById("nav").style = "width:100%"
        document.getElementById("fix_none").style = "display:block"
    }

}

// ---------------------------SETTING DIV LEFT TOGGLE FIX------------------------
function fix2(fix) {
    console.log(fix)
    fix.classList.toggle("active")
    if (fix.innerHTML == "OFF") {
        fix.innerHTML = "ON"
        document.getElementById("nav").style = "width:83%"
        document.getElementById("fix_none").style = "display:none"
        document.getElementById("left_toggle").style = "width:20%;"

        var nav_item = document.getElementsByClassName("nav_item")
        for (var i = 0; i < nav_item.length; i++) {
            nav_item[i].style = "display:block;"

        }

        var icon_item = document.getElementsByClassName("icon")
        for (var j = 0; j < icon_item.length; j++) {
            icon_item[j].style = "font-size:14px"

        }
    }
    else {
        fix.innerHTML = "OFF"
        document.getElementById("nav").style = "width:100%"
        document.getElementById("fix_none").style = "display:block"
    }

}


// ---------------------------SETTING FOOTER FIX-----------------------------
function fix3(fix) {
    console.log(fix)
    fix.classList.toggle("active")
    if (fix.innerHTML == "OFF") {
        fix.innerHTML = "ON"
        document.getElementById("footer").style = "position:sticky;bottom:0;"
    }
    else {
        fix.innerHTML = "OFF"
        document.getElementById("footer").style = "position:relative;"
    }

}


// -------------------------NAVBAR DEFAULT COLORS------------------------
function nav_color() {
    document.getElementById("nav").style = "background-color:white;"
}

// -------------------------NAVBAR CHOOSE  COLORS------------------------
function nav_color1(colo) {
    document.getElementById("nav").style.backgroundColor = colo.value
    document.getElementById("nav").style.color = "white"

}

// -------------------------LEFT TOGGLE CHOOSE COLORS------------------------
function nav_color2(colo1) {
    document.getElementById("left_toggle").style.backgroundColor = colo1.value
    var h = document.getElementsByClassName("nav_item");

    for (var i = 0; i < h.length; i++) {
        h[i].style = "color:white"
    }

}
// -------------------------LEFT TOGGLE DEFAULT COLORS------------------------
function slide_color() {
    document.getElementById("left_toggle").style = "background-color:white;"

    var h = document.getElementsByClassName("nav_item");

    for (var i = 0; i < h.length; i++) {
        h[i].style = "color:rgb(65, 63, 63);"
    }

}


// -------------------------------CLICK SETTING BUTTON OPEN RIGHT SETTING DIV-----------------
function colors() {
    var bb = document.getElementsByClassName("custom");
    for (var i = 0; i < bb.length; i++) {
        bb[i].classList.toggle("active")
    }

}



// --------------------------TABLE SEARCH DATA -------------------------------

function search_data() {

    const input = document.getElementById("inp").value.toUpperCase();
    let body = document.getElementById("table_data");

    var tr = body.getElementsByTagName("tr");
    for (var k = 0; k < tr.length; k++) {
        let td = tr[k].getElementsByTagName("td")[0];

        if (td){ 
            let textval = td.textContent || td.innerHTML;
            if (textval.toUpperCase().indexOf(input) > -1) {
                tr[k].style.display = "";
            } else {
                tr[k].style.display = "none";
            }
        }
    }
}

// ---------------------TABLE SELECT  DATA ---------------------------------------
var select = document.getElementById("select");

if (select.value == "10") {
    var body = document.getElementById("table_data");
    var tr = body.getElementsByTagName("tr");
    for (var l = 15; l < tr.length; l++) {
        tr[l].style.display = "none";


    }
}

// ---------------------TABLE SELECT  DATA ---------------------------------------
function change1() {

    var select = document.getElementById("select");


    if (select.value == "10") {
        console.log(select.value)
        var body = document.getElementById("table_data");
        var tr = body.getElementsByTagName("tr");
        for (var l = 10; l < tr.length; l++) {
            tr[l].style.display = "none";

        }
    }
    else if (select.value == "25") {
        console.log(select.value)


        var body = document.getElementById("table_data");
        var tr = body.getElementsByTagName("tr");
        for (var l = 25; l < tr.length; l++) {
            tr[l].style.display = "none";

        }

    }

}


// ---------------------------ADD TASK DATA USING PROMPT-------------------------
function add_task() {


    var task = prompt("enter task name")
    var task1 = prompt("enter developer name")

    var task_body = document.getElementById("task_body");

    var data1 = document.createElement("div");
    // data1.id = "data1";
    data1.className = "one task"
    task_body.appendChild(data1);

    var left = document.createElement("div");
    left.className = "left_data"

    var right = document.createElement("div");
    right.className = "right_data hover1"
    // right.className="hover1"

    data1.appendChild(left);
    data1.appendChild(right);

    var inp = document.createElement("input");
    inp.type = "checkbox";
    inp.name = "data";
    left.appendChild(inp);

    var box = document.createElement("div");
    box.className = "box_data";
    left.appendChild(box);
    var h = document.createElement("h4")
    box.appendChild(h);
    h.innerHTML = task

    var p = document.createElement("p")
    box.appendChild(p);
    p.innerHTML = "By " + task1
    var sp = document.createElement("span")
    p.appendChild(sp)
    sp.innerHTML = "new"
    sp.style = "background-color: rgb(8, 197, 226);color: white;border-radius: 10px;font-size:12px;padding: 4px !important;"

    var btn1 = document.createElement("button")
    var btn2 = document.createElement("button")
    btn1.innerHTML = "<i class=" + "'fa fa-check'" + " aria-hidden=" + "true" + "></i>"
    btn1.style = "color: rgb(9, 231, 27)"
    btn1.className = "tick"
    right.appendChild(btn1)

    btn2.style = "color: rgb(247, 7, 7)"
    btn2.innerHTML = "<i class=" + "'fa fa-trash'" + " aria-hidden=" + "true" + "></i>"
    btn2.className = "del"
    right.appendChild(btn2)

    btn2.setAttribute("onclick", "del(this)")







    console.log(task_body);
}
// ---------------------------ADD TASK DATA USING PROMPT-------------------------
// function add_task1() {


//     var task = prompt("enter task name")
//     var task1 = prompt("enter developer name")

//     var task_body = document.getElementById("task_body1");

//     var data1 = document.createElement("div");
//     // data1.id = "data1";
//     data1.className = "one task"
//     task_body.appendChild(data1);

//     var left = document.createElement("div");
//     left.className = "left_data"

//     var right = document.createElement("div");
//     right.className = "right_data hover1"
//     // right.className="hover1"

//     data1.appendChild(left);
//     data1.appendChild(right);

//     var inp = document.createElement("input");
//     inp.type = "checkbox";
//     inp.name = "data";
//     left.appendChild(inp);

//     var box = document.createElement("div");
//     box.className = "box_data";
//     left.appendChild(box);
//     var h = document.createElement("h4")
//     box.appendChild(h);
//     h.innerHTML = task

//     var p = document.createElement("p")
//     box.appendChild(p);
//     p.innerHTML = "By " + task1
//     var sp = document.createElement("span")
//     p.appendChild(sp)
//     sp.innerHTML = "new"
//     sp.style = "background-color: rgb(8, 197, 226);color: white;border-radius: 10px;font-size:12px;padding: 4px !important;"

//     var btn1 = document.createElement("button")
//     var btn2 = document.createElement("button")
//     btn1.innerHTML = "<i class=" + "'fa fa-check'" + " aria-hidden=" + "true" + "></i>"
//     btn1.style = "color: rgb(9, 231, 27)"
//     btn1.className = "tick"
//     right.appendChild(btn1)

//     btn2.style = "color: rgb(247, 7, 7)"
//     btn2.innerHTML = "<i class=" + "'fa fa-trash'" + " aria-hidden=" + "true" + "></i>"
//     btn2.className = "del"
//     right.appendChild(btn2)

//     btn2.setAttribute("onclick", "del(this)")







//     console.log(task_body1);
// }