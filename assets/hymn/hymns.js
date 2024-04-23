var count = "",
    Alertbox = "",
    alertbtn = "",
    ptag = "",
    data = "",
    panel = "",
    panel1 = "",
    clone = "",
    check = false
    counter = 0
    panelb = "";
    
function checkBeforeSearch() {
    if(counter == 1) {
        panelb.removeChild(clone);
        panel.style.display = "none";
        clone = "";
        counter = 0;
        check = false;
    }
    if (count >= 1) {
        closeAlert();
    }
}
    
function search(txt) {
    if( (txt != "") ) {
        if( ((txt < Number.MAX_SAFE_INTEGER) === true) && txt <= 384 ){
            // get individual hymn div
            data = document.getElementById("clone"+txt);
            // save the hymn to variable
            clone = data.cloneNode(true);
            // get panel and inner child
            panel = document.getElementById("mypanel");
            panelb = document.getElementById("panel-body");
            // add hymn to panel and show the panel.
            panelb.appendChild(clone);
            panel.style.display = "block";
            // increment the counter for content management. 
            counter += 1;
            // boolean for checking if content is already present. 
            return true;
        }
        else {
            count += 1;
            if(count == 1) {
                AlertBox("Please enter numbers less than 385 OR Enter Digits only without Letters");
            } else {
                closeAlert();
                AlertBox("Please enter the wright number size");
            }
        } 
        
    } else {
        count += 1;
        if(count == 1) {
            AlertBox("Please enter something prefferbly a number");
        } else {
            closeAlert();
            AlertBox("Please enter something prefferbly a number");
        }
    }
}

function SearchStaff(event) {
    event = event || window.event;
    event.preventDefault();
    
    checkBeforeSearch();
    
    let txt = document.getElementById("SearchtxT").value;
    //search(txt);
    
    let fabsearch = document.getElementById("fabsearch");
    let fab = document.getElementById("fab");
    fabsearch.style.display = 'none';
    fab.style.display = 'block';
    
    if(search(txt) === true ) {
        let nav = document.getElementById("defaultNavbar1");
        nav.className = "collapse";
        window.location = "#top";
        hideFab();
    } 
    
}

function searchStaff(event) {
    event = event || window.event;
    event.preventDefault();
    
    checkBeforeSearch();
    
    let fabsearch = document.getElementById("fabsearch");
    let fab = document.getElementById("fab");
    let txt = document.getElementById("Searchtxt").value;
    if(search(txt) === true ) {
        fabsearch.style.display = "none";
        fab.style.display = "block";
        window.location = "#top";
        //hideFab();
    } 
}

function hideFabSearch() {
    document.getElementById("fabsearch").style.display = "none";
    document.getElementById("fab").style.display = "block";
    document.getElementById("defaultNavbar1").className = "collapse";
}

function hideFab() {
    document.getElementById("fab").style.display = "none";
}

function showFab() {
    document.getElementById("fab").style.display = "block";
}

function Closer(event) {
    event = event || window.event;
    event.preventDefault();
    panelb.removeChild(clone);
    panel.style.display = "none";
    counter = 0;
    showFab();
}

function AlertBox(content) {
    Alertbox = document.getElementById("Alert_box");
    alertbtn = document.createElement("button");
    ptag = document.createElement("p");
    
    //alert button attributes
    alertbtn.type = "button";
    alertbtn.innerHTML = "&#215;";
    alertbtn.className = "close";
    // alert closing functionality
    alertbtn.addEventListener("click", function(event){
        event = event || window.event;
        event.preventDefault();
        
        Alertbox.removeChild(ptag);
        Alertbox.removeChild(alertbtn);
        Alertbox.style.display = "none";
        
        count = 0;
    }); 
    
    //alert content
    ptag.textContent = content;
    //alert styling 
    Alertbox.appendChild(alertbtn);
    Alertbox.appendChild(ptag);
    Alertbox.className = "alert alert-danger alert-dismissable absoluteshow";
    Alertbox.style.display = "block";
    //returning the alert
    return Alertbox;
}

function closeAlert() {
    Alertbox.removeChild(alertbtn);
    Alertbox.removeChild(ptag);
    Alertbox.style.display = "none";
    count = 0;
}
/*
document.addEventListener("DOMContentLoaded", function() {
    hideFab()
    window.addEventListener("scroll", function() {
        if(window.innerHeight + window.scrollY => document.body.offsetHeight) {
            document.body.style.background="#0099FF";
        } else if (!window.scrollY) {
            document.querySelector('body').style.background="#0099FF";
        }
    });
});*/