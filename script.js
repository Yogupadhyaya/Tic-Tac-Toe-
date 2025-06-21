let boxes= document.querySelectorAll(".box")
let resetbtn=document.querySelector(".reset")
let msg=document.querySelector(".msg")
let msgcontainer=document.querySelector(".msgcontainer")
let newbtn=document.querySelector(".msgcontainer .new")
let count=0
let player1=true;
msgcontainer.classList.remove("msgcontainer")
    
const win=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
]
const resetgame=()=>{
    player1=true;
   for(let box of boxes)
    {
        box.disabled=false;
        box.innerText=""

    }
    count =0
    msgcontainer.classList.add("hide")
     msgcontainer.classList.remove("msgcontainer")
    


}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        if(player1)
        {
            box.innerText="X"
            player1=false;
        }
        else{
            box.innerText="O"
            player1=true;
        }
        count++
        box.disabled=true;
        checkWinner(count)
    })
})

// for(let box of boxes)
// {
//      box.addEventListener("click",()=>{
//     console.log("Clicked")
// })
// }

const checkWinner=(count)=>{
    for(let pattern of win){
        let posvalue1 = boxes[pattern[0]].innerText
        let posvalue2 = boxes[pattern[1]].innerText
        let posvalue3 = boxes[pattern[2]].innerText
if(count<9)
{


        if(posvalue1!="" && posvalue2!="" && posvalue3!="")
        {
            if(posvalue1===posvalue2 &&posvalue2===posvalue3)
            {
                showWinner(posvalue1)
            }
        }

    }
    else{
        msg.innerText=`Oh! No, The game has Draw`
         msgcontainer.classList.remove("hide")
         msgcontainer.classList.add("msgcontainer")
    }
}      

}


const showWinner=(value)=>{
    for(let box of boxes)
    {
        box.disabled=true;
    }
    
   msg.innerText=`Congratulations!! Winner is ${value}`
   msgcontainer.classList.remove("hide")
   msgcontainer.classList.add("msgcontainer")

}

resetbtn.addEventListener("click",resetgame)
newbtn.addEventListener("click",resetgame)
