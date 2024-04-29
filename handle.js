const sections = document.querySelectorAll("section");

sections.forEach(section => { 

    const handle = section.querySelector("a.handle")
    const content = section.querySelector("div.content")
    

    handle.addEventListener('click',(event) => {

        event.preventDefault();
    })

    handle.addEventListener('mousedown', (event) => {
        event.preventDefault()

        const drag = (event) => {
            const leftPos = (100 * event.pageX / window.innerWidth);
            const rightPos = 100 - leftPos;
            const maxLeft = window.innerWidth - 300;

            handle.style.left = `min(max(300px,${leftPos}%), ${maxLeft}px)`
            // content.style.gridTemplateColumns = `${leftPos}%  ${rightPos}%`
            content.style.gridTemplateColumns = `minmax(300px, ${leftPos}%)  minmax(300px, ${rightPos}%)`
        }

        const stopDrag = (event) => {
            document.removeEventListener('mousemove', drag);
            document.addEventListener('mouseup', stopDrag);
        }

        document.addEventListener('mousemove', drag);
        document.addEventListener('mouseup', stopDrag);
    })
    

})