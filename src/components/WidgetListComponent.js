import React from 'react'
import HeadingWidget from "./HeadingWidget";
import ParagraphWidget from "./ParagraphWidget";
import ListWidget from "./ListWidget";

class WidgetListComponent extends React.Component {
    constructor(props) {
        super(props)
    }

    componentDidMount() {
        this.props.findAllWidgets()
    }

    render() {
        return(
            <div>
                <h2>Widget list</h2>
                <button onClick={this.props.addWidget}>Add Widget</button>
                <ul>
                    {
                        this.props.widgets && this.props.widgets.map(widget =>
                            <li>
                                { widget.type === "LIST" && <ListWidget widget={widget}/>}
                                { widget.type === "HEADING" && <HeadingWidget widget={widget}/>}
                                { widget.type === "PARAGRAPH" && <ParagraphWidget widget={widget}/>}
                                <button onClick={() => this.props.deleteWidget(widget.id)}>Delete</button>
                            </li>
                        )
                    }
                </ul>
            </div>
        )
    }
}

export default WidgetListComponent;