class Display {

    constructor(displayTextElement){
        this.displayTextElement = displayTextElement;
    }

    appendKey(key){
        switch(key){
                case "q":
                this.display = "🐔 Cock!";
                break;
    
                case "w":
                    this.display = "🐂 Cow!";
                break;
    
                
                case "e":
                    this.display = "🐶 Dog!";
                break;
    
                
                case "a":
                    this.display = "🐒 Monkey!";
                break;
    
                case "s":
                    this.display = "🐎 Horse!";
                break;
    
                
                case "d":
                    this.display = "🐦 Bird!";
                break;
    
               
                case "z":
                    this.display = "🐑 Sheep!";
                break;
    
                
                case "x":
                    this.display = "🐱 Kitty!";
                break;
    
                
                case "c":
                    this.display = "🦁️ Lion!";
                break;
    
                default:return;

        };
        
    
       
    }

    appendAlphabet(alphabet){
        switch(alphabet){
            case "Q":
            this.display = "🐔 Cock!";
            break;

            case "W":
                this.display = "🐂 Cow!";
            break;

            
            case "E":
                this.display = "🐶 Dog!";
            break;

            
            case "A":
                this.display = "🐒 Monkey!";
            break;

            case "S":
                this.display = "🐎 Horse!";
            break;

            
            case "D":
                this.display = "🐦 Bird!";
            break;

           
            case "Z":
                this.display = "🐑 Sheep!";
            break;

            
            case "X":
                this.display = "🐱 Kitty!";
            break;

            
            case "C":
                this.display = "🦁️ Lion!";
            break;

            default:return;

    };
    }

    updateDisplay(){
       this.displayTextElement.innerText = this.display;
    }

    appendSoundSrc(sound){
        switch(sound){
            case "q":
            case "Q":
            audio.setAttribute('src', '../sounds/mixkit-cock-calling-1759.wav');
            break;


            case "W":
            case "w":
            audio.setAttribute('src', '../sounds/mixkit-cow-moo-1744.wav');
            break;

            case "E":
            case "e":
            audio.setAttribute('src', '../sounds/mixkit-dog-barking-twice-1.wav');
            break;

            case "A":
            case "a":
            audio.setAttribute('src', '../sounds/mixkit-excited-monkey-grunt-99.wav');
            break;

            case "S":
            case "s":
            audio.setAttribute('src', '../sounds/mixkit-intense-horse-stallion-neigh-76.wav');
            break;

            case "D":
            case "d":
            audio.setAttribute('src', '../sounds/mixkit-little-bird-calling-chirp-23.wav');
            break;

            case "Z":
            case "z":
            audio.setAttribute('src', '../sounds/mixkit-sheep-sounds-1741.wav');
            break;

            case "X":
            case "x":
            audio.setAttribute('src', '../sounds/mixkit-sweet-kitty-meow-93.wav');
            break;

            case "C":
            case "c":
            audio.setAttribute('src', '../sounds/mixkit-wild-lion-animal-roar-6.wav');
            break;

            default:return;

        }
       
        
      
        audio.play();

    }

  

   
}



const buttons = document.querySelectorAll('[data-button]');
const displayTextElement = document.querySelector('[data-display]');
const audio = document.querySelector('[data-audio]');


const keys = window.addEventListener('keydown', (e) => {
    display.appendKey(e.key);
    display.updateDisplay();
    display.appendSoundSrc(e.key);
});





const display = new Display(displayTextElement);

buttons.forEach(button =>{
    button.addEventListener('click', () => {
        display.appendAlphabet(button.innerText);
        display.appendSoundSrc(button.innerText);
        display.updateDisplay();
      
    })
})
