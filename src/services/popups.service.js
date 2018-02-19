import { render } from 'preact';

let outlet

export function appendComponent(element){
    if (outlet) {
        return console.warn("Canceled popup because another one was already open")
    }

    outlet = document.createElement('div')
    outlet.style.opacity = 0
    outlet.style.transition = 'opacity .2s'
    document.body.appendChild(outlet)
    render(element, outlet, null)
    setTimeout(()=>outlet.style.opacity = 1, 10)
    
}

export function removeComponent(){
    outlet.style.opacity = 0
    setTimeout(()=>{
        render('', outlet, null)
        document.body.removeChild(outlet)
        outlet = null
    }, 230)
    
}