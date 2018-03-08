import { render } from 'preact';
import { config } from '../config'

let outlet

export function appendComponent(element){
    if (outlet) {
        return console.warn("Canceled popup because another one was already open")
    }

    outlet = document.createElement('div')
    outlet.classList.add('poppet-host')
    outlet.style.zIndex = 99999999999999999999999999999999999999999999999
    outlet.style.position = 'relative'
    outlet.style.opacity = 0
    outlet.style.transition = `opacity ${config.transitionTime}ms`
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
    }, config.transitionTime)

}
