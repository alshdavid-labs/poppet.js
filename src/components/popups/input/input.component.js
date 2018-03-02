import { h, render, Component } from 'preact';
import styles from './input.component.less'
import { appendComponent, removeComponent } from '../../../services/popups.service'
import { PanelComponent, BackgroundComponent, AnimationComponent } from "../../infrastructure"

export class InputComponent extends Component {
	constructor(){
		super()
		this.state = {
			text: '',
			doAnimation: true
		}
	}

	ok = () => {
		if (!this.state.text) {
			this.cancel()
			return
		}
		this.props.ok(this.state.text)
		this.completeAnimation()
	}

	cancel = () => {
		this.props.cancel()
		this.completeAnimation()
	}

	completeAnimation = () => {
		this.setState({ doAnimation: false })
	}

	handleChange = (evt) => {
		this.setState({ text: evt.target.value });
	}

	render(){
		return (
			<div class={styles.host}>
				<BackgroundComponent onClick={() => this.cancel()} />
				<AnimationComponent animate={this.state.doAnimation}>
					<PanelComponent>
						{ this.props.message && <p>{this.props.message}</p> }
						<input value={this.state.text} placeholder={this.props.placeholder} onChange={this.handleChange} />
						<div class={styles.container}>
							<button onClick={() => this.ok()}>Ok</button>
							<button onClick={() => this.cancel()}>Cancel</button>
						</div>
					</PanelComponent>
				</AnimationComponent>
			</div>
		)
	}
}



export function renderInputComponent(message, placeholder) {
	return new Promise((resolve, reject) => {
		appendComponent(<InputComponent
			placeholder={placeholder}
			message={message}
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
