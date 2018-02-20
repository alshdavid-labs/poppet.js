import { h, render, Component } from 'preact';
import style from './background.component.less'

export class BackgroundComponent extends Component {
	render(){
		return (
			<div onClick={this.props.onClick} class={style.host} ></div>
		)
	}
}
