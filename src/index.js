import { h, render, Component } from 'preact';
import { renderListSelectorComponent, renderAlertComponent, renderInputComponent } from './components/popups'


class Poppet {
	static alert(message) {
		return renderAlertComponent(message)
	}

	static input(message, placeholder) {
		return renderInputComponent(message, placeholder)
	}

	static list(message, list) {
		return renderListSelectorComponent(message, list)
	}

	static ListItem = function(label, value){
		return { label, value }
	}
}

global.Poppet = Poppet
