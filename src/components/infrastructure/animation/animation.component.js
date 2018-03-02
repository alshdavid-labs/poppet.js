import { h, render, Component } from 'preact';
import TransitionGroup from 'preact-transition-group'
import { config } from '../../../config'
import './animation.component.scss'


export class AnimatorComponent extends Component {
	constructor(){
		super()
		this.state = { doAnimate: true }
	}

	componentDidMount(){
		this.setState({ doAnimate: true })
	}

	componentWillLeave(callback){
		this.setState({ doAnimate: false })
		setTimeout(() => callback(), config.transitionTime)
	}


	render(){
		return (
			<div
				className={
					'poppet-animation-host ' +
					(this.state.doAnimate ? 'animateIn' : 'animateOut')
				}
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




