$('document').ready(function(){
    
    $("#calculator").fadeIn(4000);
   
  var flag=0;  
  
    var audio = document.getElementsByTagName("audio")[0];
   
    var b=document.getElementsByTagName("audio")[1];
    
    var history=[""];
    var screen=[""];
    
    var z=0;
   
    
            $("#button0").on("click", function(){                  
         
               
              if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+0;
                         history[0]=""+0;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
                
              else if(z<=10 && history[0][history[0].length-1]!=="=") 
                     {
                         audio.play();
                screen[0]=screen[0]+0;
            history[0]=history[0]+0; 
                z++;
                flag=0;
               
                  
        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
            }
            
                
           
                
   });
    
    
            $("#button1").on("click", function(){  
                
                if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+1;
                         history[0]=""+1;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
                
                else if(z<=10 && history[0][history[0].length-1]!=="=")
                 {
                 audio.play();    
         screen[0]=screen[0]+1;
                history[0]=history[0]+1; 
                z++;
                flag=0;
                     
                $("#history").html(history[0]);
         $("#data").html(screen[0]);
            }
   });
    
    
    
     $("#button2").on("click", function(){                  
        
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+2;
                         history[0]=""+2;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
        else if(z<=10 && history[0][history[0].length-1]!=="=")
          {
              
              audio.play();
         history[0]=history[0]+2; 
          screen[0]=screen[0]+2;
         flag=0;
         z++;
              
         $("#history").html(history[0]);
           $("#data").html(screen[0]);
     }
   });
    
    
    
    
     $("#button3").on("click", function(){                  
      
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+3;
                         history[0]=""+3;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
       else if(z<=10 && history[0][history[0].length-1]!=="=")
              {
                  audio.play();
         history[0]=history[0]+3; 
          screen[0]=screen[0]+3;
         flag=0;
         z++;
                  
         $("#history").html(history[0]);
          $("#data").html(screen[0]);
     }
   });
    
    
    
     $("#button4").on("click", function(){                  
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+4;
                         history[0]=""+4;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
         else if(z<=10 && history[0][history[0].length-1]!=="=")
          {
              
                audio.play();
         history[0]=history[0]+4; 
         screen[0]=screen[0]+4;
         flag=0;
         z++;
              
         $("#history").html(history[0]);
         $("#data").html(screen[0]);
     }
         
   });
    
    
     $("#button5").on("click", function(){                  
      
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+5;
                         history[0]=""+5;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
        else if(z<=10 && history[0][history[0].length-1]!=="=")
         {
             
               audio.play();
         history[0]=history[0]+5; 
         screen[0]=screen[0]+5;
         flag=0;
         z++;
             
         $("#history").html(history[0]);
         $("#data").html(screen[0]);
     }
   });
    
    
    
    
     $("#button6").on("click", function(){   
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+6;
                         history[0]=""+6;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
        else if(z<=10 && history[0][history[0].length-1]!=="=")
             {
           audio.play();
         history[0]=history[0]+6; 
         screen[0]=screen[0]+6;
         flag=0;
         z++;
                 
         $("#history").html(history[0]);
      $("#data").html(screen[0]); 
     }
   });
    
    
    
     $("#button7").on("click", function(){ 
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+7;
                         history[0]=""+7;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
         else if(z<=10 && history[0][history[0].length-1]!=="=")
         {
               audio.play();
         history[0]=history[0]+7; 
         screen[0]=screen[0]+7;
         flag=0;
         z++;
             
         $("#history").html(history[0]);
     $("#data").html(screen[0]);
     }
   });
    
    
    
    
     $("#button8").on("click", function(){ 
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+8;
                         history[0]=""+8;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
         else if(z<=10 && history[0][history[0].length-1]!=="=")
         {
               audio.play();
         history[0]=history[0]+8; 
         screen[0]=screen[0]+8;
         flag=0;
         z++;
             
         $("#history").html(history[0]);
      $("#data").html(screen[0]); 
     }
   });
    
    
    
     $("#button9").on("click", function(){ 
         if(history[0][history[0].length-1]=="=")
                    {
                        audio.play();
                        console.log(history[0][history[0].length-1]);
                        screen[0]=""+9;
                         history[0]=""+9;
                        z=0;
                flag=0;
                        
                        $("#history").html(history[0]);        
          $("#data").html(screen[0]);
                    }
        else if(z<=10 && history[0][history[0].length-1]!=="=")
         {
               audio.play();
         history[0]=history[0]+9; 
         screen[0]=screen[0]+9;
         flag=0;
         z++;
             
         $("#history").html(history[0]);
      $("#data").html(screen[0]);  
         }
   });
  
    
     $("#buttonEqual").on("click", function(){                  
       
           audio.play();
         if(screen[0].length>=1 && flag==0)
             
             {
                 history[0]=history[0]+"=";
                  screen[0]=eval(screen[0]);
                // history[0]=history[0]+eval(screen[0]);
         $("#data").html(eval(screen[0])); 
                 $("#history").html(history[0]);
                 
                 z=14;
             }
        
         console.log(eval(screen[0]));
   });
    
    
    
    $("#buttonPlus").on("click", function(){  
        
          audio.play();
       if(flag==0)
           {
               
        history[0]=history[0]+"+";
         screen[0]=eval(screen[0])+"+";
         $("#data").html(screen[0]);
               $("#history").html(history[0]);
               flag=1;
               z=0
           }
   });
    
    
    
    $("#buttonMinus").on("click", function(){                  
         audio.play();
        if(flag==0)
            {
                
                flag=1;
                z=0;
                 history[0]=history[0]+"-";
                screen[0]=eval(screen[0])+"-";
         $("#data").html(screen[0]); 
                $("#history").html(history[0]);
        
                
            }
        
   });
    
    $("#buttonMultiply").on("click", function(){                  
         audio.play();
        if(flag==0)
            {
               z=0;
                 history[0]=history[0]+"*";
                screen[0]=eval(screen[0])+"*";
         $("#data").html(screen[0]);
                $("#history").html(history[0]);
                
                flag=1;
                
            }
          
        
   });
    
    $("#buttonDivide").on("click", function(){                  
         audio.play();
        if(flag==0)
            {
                z=0;
                 history[0]=history[0]+"/";
                screen[0]=eval(screen[0])+"/";
         $("#data").html(screen[0]);
                $("#history").html(history[0]);
                flag=1
            }
          
         
   });
    
    
    $("#buttonClear").on("click", function(){                  
         audio.play();
         screen[0]="";
        history[0]="";
        z=0;
         $("#data").html(screen[0]); 
        $("#history").html(history[0]);
         
   });
    
      
    
});
