import { h, render, Component } from 'preact';
import style from './input.component.less'
import { appendComponent, removeComponent } from '../../services/popups.service'
import { BackgroundComponent } from '../background/background.component'

export class InputComponent extends Component {
	constructor(){
		super()
		this.state = { text: '' }
	}

	handleChange = (evt) => {
		console.log('ev', evt)
		this.setState({ text: evt.target.value });
	}
	
	render(){
		return (
			<div class={style.host}>
				<BackgroundComponent onClick={() => this.props.cancel()} />
				<article class={style.test}>
					<p>{this.props.message}</p>
					<input 
						value={this.state.text} 
						onChange={this.handleChange} />
					<button 
						onClick={() => this.props.ok(this.state.text)}>
						Ok
					</button>
					<button 
						onClick={() => this.props.cancel()}>
						Cancel
					</button>
				</article>
			</div>
		)
	}
}



export function renderInputComponent() {
	return new Promise((resolve, reject) => {
		appendComponent(<InputComponent
			ok={resolve}
			cancel={reject}	
		/>)
	})
	.then(data => {
		removeComponent()
		return data
	})
	.catch(error => {
		removeComponent()
		throw error
	})
}
