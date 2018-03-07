import './styles.scss'
import {
    renderListSelectorComponent,
    renderAlertComponent,
    renderInputComponent
} from './components/popups'

export class Poppet {
    static alert(message) {
        return renderAlertComponent(message)
    }

    static input(message, placeholder) {
        return renderInputComponent(message, placeholder)
    }

    static list(message, list, settings) {
        return renderListSelectorComponent(message, list, settings)
    }

    static ListItem = function(label, value) {
        return { label, value: value || label, isLabel: true }
    }

    static ListLabel = function(label) {
        return { label, isLabel: false }
    }

    static toast() {
        return
    }
}

export default Poppet

global.Poppet = Poppet
