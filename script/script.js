const container = document.querySelector('.container');


function gridBox(defaultgridSize=16){
    for (let i=0;i<=5000;i++){
        const sizes=function(){
        return defaultgridSize+'px';
        }
        console.log(sizes())
        const div =document.createElement('div');
        div.classList.add('gridSquares');
        div.addEventListener('mouseenter',()=>{div.style.backgroundColor='lightblue';});
        div.addEventListener('mouseleave',()=>{div.style.backgroundColor='white';});
        div.style.backgroundColor ="black";
        div.style.width =sizes();
        div.style.height=sizes();
        container.appendChild(div);
}
}
gridBox()
const padWidth =document.querySelector('.padWidth');
padWidth.addEventListener('click',()=>{
    container.textContent='';
    let gridSize = Math.round(Math.floor(parseFloat(prompt('Enter grid size:',10))));
    return gridBox(gridSize);


})

    

