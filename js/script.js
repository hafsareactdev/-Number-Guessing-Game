// ---------------------------------------dom part start -------------------------------------------------
    // player One dom 
    let playerOneCard     = document.querySelector('.playerOneCard')
    let playerOneInput    = document.querySelector('.playerOneInput')

    // player Two dom 
    let playerTwoCard     = document.querySelector('.playerTwoCard')
    let playerTwoInput    = document.querySelector('.playerTwoInput')

    // player Three dom 
    let playerThreeCard   = document.querySelector('.playerThreeCard')
    let playerThreeInput  = document.querySelector('.playerThreeInput')

    // Others dom 
    let error             = document.querySelector('.error')
    let winner            = document.querySelector('.winner')
    let winnerText        = document.querySelector('.winnerText')
    let ChanceCount       = document.querySelector('.ChanceCount')
    let ChanceCountThree  = document.querySelector('.ChanceCountThree')
    let chance            = 0
    let chanceThree       = 0
// ----------------------------------------dom part end --------------------------------------------------

// -------------------------------------function part satrt ----------------------------------------------
      ChanceCount.innerHTML = chance 
      ChanceCountThree.innerHTML = chanceThree     
// player One function 
   let click1 = ()=>{
    if(playerOneInput.value == ''){
        error.innerHTML = 'Please Enter a Value'
    }else{
        error.innerHTML = ''
        if(playerOneInput.value >10){
          error.innerHTML = 'Do not take more than 10'
        }else{
        error.innerHTML = ''
        if(playerOneInput.value <0){
          error.innerHTML = 'Do not take less than 0'
            }else{
            playerOneCard. style = 'display:none'
            playerTwoCard. style = 'display:block'
            }
        }
        
    } 
 }
    // player One Enter Key function 
    let inputkey1 = (result1)=>{
    if(result1.key == 'Enter'){
        click1()
    }

 }
    // player Two function 
    let click2 = ()=>{
        console.log('click hocce 2')
        if(playerTwoInput.value == ''){
        error.innerHTML = 'Please Enter a Value'
        }else{
        error.innerHTML = ''
        if(playerTwoInput.value >10){
            error.innerHTML = 'Do not take more than 10'
        }else{
        error.innerHTML = ''
        if(playerTwoInput.value <0){
        error.innerHTML = 'Do not take less than 0'
        }else{
            error.innerHTML = ''
            if(playerOneInput.value == playerTwoInput.value){
                winner.style         = 'display:block'
                winnerText.innerHTML = 'Player - 2 Win'
                playerTwoCard.style  = 'display:none'
            }else{
                chance ++
                ChanceCount.innerHTML = chance
                if(chance == 5){
                    playerTwoCard. style = 'display:none'
                    playerThreeCard. style = 'display:block'
                }
            }
        }

      }
     }
    }

    // player Two Enter Key function 
    let inputkey2 = (result2)=>{ 
        if(result2.key == 'Enter'){
            click2()
        }
     }
      
    // player Three function
    let click3 =()=>{
        if(playerThreeInput.value == ''){
            error.innerHTML = 'Please Enter a Value'
        }else{
            error.innerHTML = ''
            if(playerThreeInput.value >10){
               error.innerHTML = 'Do not take more than 10'
            }else{
                if(playerThreeInput.value <0){
                   error.innerHTML = 'Do not take less than 0'
                }else{
                    if(playerOneInput.value == playerThreeInput.value){
                        winner.style         = 'display:block'
                        winnerText.innerHTML = 'Player - 3 Win'
                        playerThreeCard.style  = 'display:none'
                    }else{
                        chanceThree ++
                        ChanceCountThree.innerHTML = chanceThree
                        if(chanceThree == 5){
                           winner.style          = 'display:block'
                           winnerText.innerHTML  = 'Player - 1 Win'   
                           playerThreeCard.style = 'display:none'
                      }
                    }
                }
            }
             
        }
           
    }
     
     // player Three Enter Key function 
    let inputkey3 = (result3)=>{ 
        if(result3.key == 'Enter'){
            click3()
        }
     }
// --------------------------------------function part end -----------------------------------------------