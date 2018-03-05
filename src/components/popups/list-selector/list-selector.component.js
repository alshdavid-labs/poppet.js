import { h, render, Component } from "preact"
import "./list-selector.component.scss"
import {
    appendComponent,
    removeComponent
} from "../../../services/popups.service"
import {
    PanelComponent,
    BackgroundComponent,
    AnimationComponent
} from "../../infrastructure"

export class ListSelectorComponent extends Component {
    constructor() {
        super()
        this.state = {
            text: "",
            doAnimation: true,
            selected: []
        }
    }

    select = value => {
        if (this.props.multiSelect) {
            if (this.state.selected.includes(value)) {
                this.setState({selected: [...this.state.selected.filter(v => v !== value)]})
            } else {
                this.setState({selected: [...this.state.selected, value]})
            }
        } else {
            this.setState({selected: [...this.state.selected, value]}, () => {
                this.ok(value)
            })            
        }
    }

    ok = (value = '') => {
        if (!this.state.selected.length) {
            this.cancel()
            return
        } else if (this.state.selected.length == 1) {
            value = this.state.selected[0]
        } else {
            value = this.state.selected
        }
        this.props.ok(value)
        this.completeAnimation()
    }

    cancel = () => {
        this.props.cancel()
        this.completeAnimation()
    }

    completeAnimation = () => {
        this.setState({ doAnimation: false })
    }

    handleChange = evt => {
        this.setState({ text: evt.target.value })
    }

    render() {
        return (
            <div classList="poppet-popup-list-host">
                <BackgroundComponent onClick={() => this.cancel()} />
                <AnimationComponent animate={this.state.doAnimation}>
                    <PanelComponent>
                        {this.props.mainText && <p>{this.props.mainText}</p>}
                        <ul>
                            {this.props.list.map(item => (
                                <li classList={this.state.selected.includes(item.value) ? 'selected' : ''} onClick={() => this.select(item.value)}>
                                    {item.label}
                                </li>
                            ))}
                        </ul>
                        {this.props.multiSelect && (
                            <div classList="container">
                                <button onClick={() => this.ok()}>Ok</button>
                                <button onClick={() => this.cancel()}>
                                    Cancel
                                </button>
                            </div>
                        )}
                    </PanelComponent>
                </AnimationComponent>
            </div>
        )
    }
}

export function renderListSelectorComponent(list, { mainText = null, multiSelect = false } = {}) {
    return new Promise((resolve, reject) => {
        appendComponent(
            <ListSelectorComponent
                multiSelect={multiSelect}
                list={list}
                mainText={mainText}
                ok={resolve}
                cancel={reject}
            />
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
