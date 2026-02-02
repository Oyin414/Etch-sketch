/* PLan For writin etch sketch game
1st Create a webpage with a 16x16 grid of square divs
- Use HTML to create a div called container to append the squares to
  - create another div called sketchBox 
  -append sketchBox to the container div
- Then create a function which should create the individual boxes
    - you are going to create two new div elements, one for the rows and one for the columns
    - then you are going to use for loops to loop through both the rows and columns 
    - create an id for the rows and columns
    -display the rows and columns  on the html
    - append the row to the column
    - append the column to the sketchBox div
- Then you invoke the function with 16 as the number of grids



*/

const container = document.querySelector("#container");
const btn = document.querySelector("#prompt")

/* create the grids */
function createGrid(size){
  for (let i = 0 ; i < (size * size) ; i++){
     let grid = document.createElement("div")
      grid.classList.add('grid')
       grid.style.height = `${700/size}px`
       grid.style.width = `${700/size}px`
       container.appendChild(grid)
       
      grid.addEventListener("mouseover", ()=>{

      grid.style.backgroundColor ="lightblue";
})
  }
}
console.log(createGrid(8))

/* reset btn */

btn.addEventListener("click",()=>{
  let size = prompt('Please enter a number (1-100)')
  if (size < 1 || size > 100){
    alert(`Error! Please Enter between the accepted values`)
    return prompt('Please enter a number (1-100)')
  }else{
    container.textContent = ''
   createGrid(size)
  }
})



