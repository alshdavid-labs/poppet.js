import { h, render, Component } from 'preact';
import { renderAlertComponent } from './components/alert/alert.component'
import { renderInputComponent } from './components/input/input.component'
import { renderListSelectorComponent } from './components/list-selector/list-selector.component'


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
