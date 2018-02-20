import { h, render, Component } from 'preact';
import TransitionGroup from 'preact-transition-group'
import { config } from '../../config'
import style from './animation.component.less'


export class AnimatorComponent extends Component {
	constructor(){
		super()
		this.state = { doAnimate: undefined }
	}

	componentDidMount(){
		this.setState({ doAnimate: style.animateIn })
	}

	componentWillLeave(callback){
		this.setState({ doAnimate: style.animateOut })
		setTimeout(() => callback(), config.transitionTime)
	}


	render(){
		return (
			<div
				className={ this.state.doAnimate }
				style={{
					animationDuration: config.transitionTime + 'ms'
				}}>
				{this.props.children}
			</div>
		)
	}
}


export class AnimationComponent extends Component {
	render(){
		return (
			<div style={{zIndex: 2, position: 'relative'}}>
				<TransitionGroup>
					{
						this.props.animate &&
						<AnimatorComponent>{this.props.children}</AnimatorComponent>
					}
				</TransitionGroup>
			</div>
		)
	}
}




