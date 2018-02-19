import { h, render } from 'preact';
//import * as alertComponent from './components/alert/alert.component'

import { renderAlertComponent } from './components/alert/alert.component'
import { renderInputComponent } from './components/input/input.component'

class Popups {
	static alert(message = 'No Message'){
		return renderAlertComponent(message)
	}

	static input(message){
		return renderInputComponent(message)
	}

	static list(message){
		return renderInputComponent(message)
	}
}

global.Popups = Popups