import { h, render, Component } from 'preact';
import styles from './panel.component.less'

export class PanelComponent extends Component {
	render(){
		return (
			<div class={styles.host}>
				{this.props.children}
			</div>
		)
	}
}
