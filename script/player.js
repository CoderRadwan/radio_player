class player{
    constructor(){
        var Main = document.getElementById("player");
        Main.style.height = screen.height + "px";
        
        //now to how to make our website work well with all devices:
        if(screen.width<620){
            Main.style.width = screen.width + "px";    
        }

        var Div = document.getElementById("content");
        Div.style.height = screen.height-300 + "px";
    }
}
onload = new player();

//class buttons:
/*class Audio_Player{                                                      // DONT FORGET THIS.
    
    constructor(){
        this.title_radio =  document.getElementById("title_radio");
        this.audio_file = document.getElementById("audio_file");
        this.play_puase_button = document.getElementById("play_puase");
        this.helper;                                                      //as we did not define a vlaue so this variable return FALSE

        this.play_puase_button.addEventListener("click" , ()=>{          //i dont know why i have to click twice for the first time to play??
            this.play_puase();
        });
    }
    play_puase(){
        if (this.helper == false){
            this.audio_file.play();
            this.play_puase_button.src = "../84_radio_player/img/pause.png";
            this.helper = true;

        }else {
            this.audio_file.pause();
            this.play_puase_button.src = "../84_radio_player/img/play.png";
            this.helper = false;
        }
    }
}
onload = new Audio_Player(); */

//another way:
class Audio_Player{                                                      // DONT FORGET THIS.
    constructor(){
        this.title_radio =  document.getElementById("title_radio");
        this.audio_file = document.getElementById("audio_file");
        this.play_puase_button = document.getElementById("play_puase");
        this.back = document.getElementById("back"); 
        this.next = document.getElementById("next"); 
        this.helper = 0;                                                      //if we did not define a vlaue so this variable return FALSE

        this.play_puase_button.addEventListener("click" , ()=>{          //at first i get prblem : i have to click twice for the first time to play?? , then i solved it by setting defult value for helper variable (helper=0) 
            this.play_puase();
        });

        this.back.addEventListener("click" , ()=>{
            if (this.server > 0){
                this.server-- ; 
            }else{                                                      //i added this if to make it recycle.
                this.server = this.names_radio.length-1;
            }  

            // determine audio and its name:
            localStorage.setItem("current_Audio" , this.server);
            this.setResource();   
        });

        this.next.addEventListener("click" , ()=>{
            if (this.server < this.names_radio.length-1){
                this.server++ ; 
            }else{                                                     //i added this if to make it recycle.
                this.server = 0;
            }   

            // determine audio and its name:
            localStorage.setItem("current_Audio" , this.server); 
            this.setResource();           
        });

        this.names_radio = [];
        this.names_radio[0] = "Adrar Radio";
        this.names_radio[1] = "Biskra Radio";
        this.names_radio[2] = "Tlemcen Radio";
        this.names_radio[3] = "Setif Radio";
        this.names_radio[4] = "Constantine Radio";
        this.names_radio[5] = "Oran Radio";
        this.names_radio[6] = "Chaîne 1 Radio";  
        this.names_radio[7] = "Saida Radio";      
        

        this.source_radio = [];
        this.source_radio[0] = "https://tlemcen.ice.infomaniak.ch/13.aac";
        this.source_radio[1] = "https://biskra.ice.infomaniak.ch/07.aac";
        this.source_radio[2] = "https://adrar.ice.infomaniak.ch/01.aac";
        this.source_radio[3] = " https://setif.ice.infomaniak.ch/19.aac";
        this.source_radio[4] = "https://constantine.ice.infomaniak.ch/25.aac";
        this.source_radio[5] = "https://oran.ice.infomaniak.ch/31.aac";
        this.source_radio[6] = "https://ch1.ice.infomaniak.ch/ch1-32.aac";  
        this.source_radio[7] = " https://saida.ice.infomaniak.ch/20.aac"; 
            
        
        // determine the defult name and audio at load document:
        this.setResource();                                                          
    }

    setResource(){
        if(localStorage.getItem("current_Audio") != null){
            this.server = localStorage.getItem("current_Audio");
        }else{
            this.server = 0;
        }
        this.title_radio.innerHTML = this.names_radio[this.server];
        this.audio_file.src = this.source_radio[this.server];

        //this if i created for more profetional, ot works to keep status (play or pause ) when change song bu clicking vext or back:
        if (this.helper == 0){                                              
            this.audio_file.pause();
            this.play_puase_button.src = "./img/play.png";
        }else{
            this.audio_file.play();
            this.play_puase_button.src = "./img/pause.png";
        }
    }
    play_puase(){
        if (this.helper == 0){
            this.audio_file.play();
            this.play_puase_button.src = "./img/pause.png";
            this.helper = 1;
        }else {
            this.audio_file.pause();
            this.play_puase_button.src = "./img/play.png";
            this.helper = 0;
        }
    }
}
onload = new Audio_Player();