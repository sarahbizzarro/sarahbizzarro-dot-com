import ArrowVectorLeft from './arrow-vector-left'
import ArrowVectorRight from './arrow-vector-right'

export default function Arrow(props) {

    const className = props.active ? "arrow-button" : "arrow-button arrow-button-gone"

    return (
        <button className={className} onClick={props.onClick}>
            {props.direction == "right" ?
                <ArrowVectorRight></ArrowVectorRight>
                : <ArrowVectorLeft></ArrowVectorLeft>}
        </button>
    )
}