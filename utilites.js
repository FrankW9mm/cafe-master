const block = document.getElementById('block')

document.body.onpointermove = e =>{
    const { clientX, clientY } = e;
   block.animate({
    left: `${clientX}px`,
    top: `${clientY}px`
   }, { duration:3000, fill:'forwards'})
}