import { h, render, Component } from 'preact';
import styles from './list-selector.component.less'
import { appendComponent, removeComponent } from '../../services/popups.service'
import { BackgroundComponent } from '../background/background.component'
import { AnimationComponent } from "../animation/animation.component"

export class ListSelectorComponent extends Component {
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
					<article>
						{ this.props.message && <p>{this.props.message}</p> }
						<ul>
							{
								this.props.list.map(
									item => <li onClick={() => this.ok(item.value)}>{ item.label }</li>
								)
							}
						</ul>
						<div class={styles.container}>
							<button
								onClick={() => this.ok()}>
								Select
							</button>
							<button
								onClick={() => this.cancel()}>
								Cancel
							</button>
						</div>
					</article>
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
