import { renderListSelectorComponent, renderAlertComponent, renderInputComponent } from './components/popups'

class Poppet {
	static alert(message) {
		return renderAlertComponent(message)
	}

	static input(message, placeholder) {
		return renderInputComponent(message, placeholder)
	}

	static list(message, list, settings) {
		return renderListSelectorComponent(message, list, settings)
	}

	static ListItem = function(label, value){
		return { label, value }
	}

	static toast() {
		return
	}
}

global.Poppet = Poppet
