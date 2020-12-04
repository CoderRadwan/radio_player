class Volume{
    constructor(){
        this.audio_file = document.getElementById("audio_file");

        this.volume_range = document.getElementById("volume_range");
        this.audio_file.volume = 10/100 ;                            //here i define the defualt value for volume , NOTE: if you write 0.1 will not accepted. PLS be careful for letter case (Volume not like volume) 
        this.volume_range.value = 10;
        this.volume_range.addEventListener("change" , ()=>{
            this.audio_file.volume = this.volume_range.value/100;          //divide by 100 cuz input(range return values from 1 to 100)
        });

        this.speed_range = document.getElementById("speed_range");
        this.audio_file.playbackRate = 1;
        this.speed_range.value = 100;
        this.speed_range.addEventListener("change" , ()=>{
            this.audio_file.playbackRate = this.speed_range.value/100;         
        });

    }
}
onload = new Volume();