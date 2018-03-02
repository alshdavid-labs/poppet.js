import { h, render, Component } from "preact"
import "./alert.component.scss"
import { appendComponent, removeComponent } from "../../../services/popups.service"
import { PanelComponent, BackgroundComponent, AnimationComponent } from "../../infrastructure"

export class AlertComponent extends Component {
	constructor() {
		super()
		this.state = { doAnimation: true }
	}

	ok = () => {
		this.props.ok()
		this.setState({ doAnimation: false })
	}

	cancel = () => {
		this.props.cancel()
		this.setState({ doAnimation: false })
	}

	render() {
		return (
			<div classList="poppet-popup-alert-host">
				<BackgroundComponent onClick={() => this.cancel()} />
				<AnimationComponent animate={this.state.doAnimation}>
					<PanelComponent>
						{ this.props.message && <p>{this.props.message}</p> }
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
