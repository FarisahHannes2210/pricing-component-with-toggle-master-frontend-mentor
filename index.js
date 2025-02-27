function main(){
    var basic_monthly = document.getElementById("basic_monthly");
    var basic_anually = document.getElementById("basic_anually");

    var pro_monthly = document.getElementById("pro_monthly");
    var pro_anually = document.getElementById("pro_anually");

    var master_monthly = document.getElementById("master_monthly");
    var master_anually = document.getElementById("master_anually");

    var toggle = document.getElementById("toggle");

    if(toggle.checked == true){ //check toggle = monthly
       
        basic_monthly.style.display = "block";
        basic_anually.style.display = "none";

        pro_monthly.style.display = "block";
        pro_anually.style.display = "none";

        master_monthly.style.display = "block";
        master_anually.style.display = "none";

    }
    else if(toggle.checked == false){ // uncheck toggle = anually

        basic_monthly.style.display = "none";
        basic_anually.style.display = "block";

        pro_monthly.style.display = "none";
        pro_anually.style.display = "block";

        master_monthly.style.display = "none";
        master_anually.style.display = "block";
     
    }

    
}