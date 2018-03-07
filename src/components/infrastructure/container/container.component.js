import { h, render, Component } from 'preact';
import './container.component.scss'

export class ContainerComponent extends Component {
	render(){
		return (
			<div classList={"poppet-container-host "+ this.props.classList}>
				{this.props.children}
			</div>
		)
	}
}
