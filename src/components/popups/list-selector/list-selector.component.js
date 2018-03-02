import { h, render, Component } from 'preact';
import './list-selector.component.scss'
import { appendComponent, removeComponent } from '../../../services/popups.service'
import { PanelComponent, BackgroundComponent, AnimationComponent } from "../../infrastructure"

export class ListSelectorComponent extends Component {
	constructor(){
		super()
		this.state = {
			text: '',
			doAnimation: true
		}
	}

	ok = (value) => {
		if (!value) {
			this.cancel()
			return
		}
		this.props.ok(value)
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
			<div classList="poppet-popup-list-host">
				<BackgroundComponent onClick={() => this.cancel()} />
				<AnimationComponent animate={this.state.doAnimation}>
					<PanelComponent>
						{ this.props.message && <p>{this.props.message}</p> }
						<ul>
							{
								this.props.list.map(
									item => <li onClick={() => this.ok(item.value)}>{ item.label }</li>
								)
							}
						</ul>
						<div classList="container">
							<button onClick={() => this.ok()}>Ok</button>
							<button onClick={() => this.cancel()}>Cancel</button>
						</div>
					</PanelComponent>
				</AnimationComponent>
			</div>
		)
	}
}



export function renderListSelectorComponent(message, list) {
	return new Promise((resolve, reject) => {
		appendComponent(<ListSelectorComponent
			list={list}
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
