class Color{
    constructor(){
        this.color1 = document.getElementById("color1");
        this.color2 = document.getElementById("color2");
        this.color3 = document.getElementById("color3");
        this.color4 = document.getElementById("color4");
        
        this.color1.addEventListener("click" , ()=>{
            this.select_color("c1");
        });
        this.color2.addEventListener("click" , ()=>{
            this.select_color("c2");
        });
        this.color3.addEventListener("click" , ()=>{
            this.select_color("c3");
        });
        this.color4.addEventListener("click" , ()=>{
            this.select_color("c4");
        });

        //now we definethe defult color on load document:
        if(localStorage.getItem("y") == null){
            document.body.style.background = "linear-gradient(to right , orange , #af3157)"; 
        }
        //now we restore the color ar on load:
        this.select_color(localStorage.getItem("y"));
    }

    select_color(x){
            if (x == "c1"){
                document.body.style.background = "#61a2dc";
            }else if (x == "c2"){
                document.body.style.background = "linear-gradient(to right , orange , #af3157)";                   //if you want to use linear-gradient the margin must not be zero
            }else if (x == "c3"){
                document.body.style.background = "#ec607f";
            }else if (x == "c4"){
                document.body.style.background = "#4a37ab";
            }
            localStorage.setItem("y" ,x);   
    }
}
onload = new Color();