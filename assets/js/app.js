document.getElementById("theme-btn-id").addEventListener('click',()=>{
    document.body.classList.toggle("light-mode");
})

var active_btn_ref = document.getElementById("home-btn");
var active_page_ref = document.getElementById("home");
var active_page_ref_name = "container header active";


document.getElementById("home-btn").addEventListener('click',()=>{
    let ref = document.getElementById("home-btn");
    let page_ref = document.getElementById("home");
    if (ref != active_btn_ref){
        ref.className = "control active-btn";
        page_ref.className = "container header active";
        active_btn_ref.className = "control";
        active_btn_ref = ref;
        let parts = active_page_ref_name.split(" ");
        if(parts.length == 2){
            active_page_ref.className = parts[0];
        }else{
            active_page_ref.className = parts[0] + " "+parts[1];
        }
        active_page_ref = page_ref;
        active_page_ref_name = "container header active";
    }
})

document.getElementById("about-btn").addEventListener('click',()=>{
    let ref = document.getElementById("about-btn");
    let page_ref = document.getElementById("about");
    if (ref != active_btn_ref){
        ref.className = "control active-btn";
        page_ref.className = "container about active";
        active_btn_ref.className = "control";
        active_btn_ref = ref;
        let parts = active_page_ref_name.split(" ");
        if(parts.length == 2){
            active_page_ref.className = parts[0];
        }else{
            active_page_ref.className = parts[0] + " "+parts[1];
        }
        active_page_ref = page_ref;
        active_page_ref_name = "container about active";
    }
})

document.getElementById("edu-btn").addEventListener('click',()=>{
    let ref = document.getElementById("edu-btn");
    let page_ref = document.getElementById("edu");
    if (ref != active_btn_ref){
        ref.className = "control active-btn";
        page_ref.className = "container edu active";
        active_btn_ref.className = "control";
        active_btn_ref = ref;
        let parts = active_page_ref_name.split(" ");
        if(parts.length == 2){
            active_page_ref.className = parts[0];
        }else{
            active_page_ref.className = parts[0] + " "+parts[1];
        }
        active_page_ref = page_ref;
        active_page_ref_name = "container edu active";
    }
})

document.getElementById("portfolio-btn").addEventListener('click',()=>{
    let ref = document.getElementById("portfolio-btn");
    let page_ref = document.getElementById("portfolio");
    if (ref != active_btn_ref){
        ref.className = "control active-btn";
        page_ref.className = "container active";
        active_btn_ref.className = "control";
        active_btn_ref = ref;
        let parts = active_page_ref_name.split(" ");
        if(parts.length == 2){
            active_page_ref.className = parts[0];
        }else{
            active_page_ref.className = parts[0] + " "+parts[1];
        }
        active_page_ref = page_ref;
        active_page_ref_name = "container active";
    }
})

document.getElementById("contact-btn").addEventListener('click',()=>{
    let ref = document.getElementById("contact-btn");
    let page_ref = document.getElementById("contact");
    if (ref != active_btn_ref){
        ref.className = "control active-btn";
        page_ref.className = "container contact active";
        active_btn_ref.className = "control";
        active_btn_ref = ref;
        let parts = active_page_ref_name.split(" ");
        if(parts.length == 2){
            active_page_ref.className = parts[0];
        }else{
            active_page_ref.className = parts[0] + " "+parts[1];
        }
        active_page_ref = page_ref;
        active_page_ref_name = "container contact active";
    }
})