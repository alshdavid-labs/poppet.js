import { h, render, Component } from 'preact';
import './background.component.scss'

export class BackgroundComponent extends Component {
	render(){
		return (
			<div onClick={this.props.onClick} classList="poppet-background-host" ></div>
		)
	}
}
