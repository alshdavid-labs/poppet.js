import { h, render, Component } from 'preact';
import './panel.component.scss'

export class PanelComponent extends Component {
	render(){
		return (
			<div classList="poppet-panel-host">
				{this.props.children}
			</div>
		)
	}
}
