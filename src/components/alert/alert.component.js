import { h, render, Component } from "preact"
import styles from "./alert.component.less"
import { appendComponent, removeComponent } from "../../services/popups.service"
import { BackgroundComponent } from "../background/background.component"

export class AlertComponent extends Component {
	constructor() {
		super()
		this.state = {
			zoomOut: false
		}
	}

	ok = () => {
		this.props.ok()
		this.setState({ zoomOut: true })
	}

	cancel = () => {
		this.props.cancel()
		this.setState({ zoomOut: true })
	}

	render() {
		return (
			<div class={styles.host}>
				<BackgroundComponent onClick={() => this.cancel()} />
				<article
					className={
						this.state.zoomOut 
							? styles.zoomOut 
							: styles.zoomIn
					}>
					<p>{this.props.message}</p>
					<div class={styles.container}>
						<button 
							onClick={() => this.ok()}>
							Ok
						</button>
						<button 
							onClick={() => this.cancel()}>
							Cancel
						</button>
					</div>
				</article>
			</div>
		)
	}
}

export function renderAlertComponent(message) {
	return new Promise((resolve, reject) => {
		appendComponent(
			<AlertComponent 
				ok={() => resolve()} 
				cancel={() => reject()} 
				message={message} />
		)
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