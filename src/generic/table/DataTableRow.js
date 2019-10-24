import React, {Component} from 'react'

class DataTableRow extends Component {
    constructor(props) {
        super(props)
        this.state = {
            ...props.row,
            editing: false
        }
    }
    componentDidUpdate(prevProps, prevState, snapshot) {
        if(this.props.row !== prevProps.row) {
            this.setState({
                ...this.props.row
            })
        }
    }

    editRow = () =>
        this.setState(prevState => ({editing: true}))

    cancel = () =>
        this.setState(prevState => ({editing: false}))

    saveRow = (recordId, row) => {
        this.setState(prevState => {
            if(typeof this.props.updateRecord === 'function') {
                let record = {}
                for(let key in this.props.row) {
                    record[key] = prevState[key]
                }
                this.props.updateRecord(this.props.config.url, recordId, record)
            }
            return {editing: !prevState.editing}
        })
    }

    updateField = (fieldId, value) => {
        this.setState(prevState => {
            return prevState[fieldId] = value;
        })
    }

    deleteRow = recordId => {
        this.props.deleteRecord(this.props.config.url, recordId)
    }

    render() {
        return(
            <tr>
                {
                    this.state.editing &&
                    this.props.config.schema.map(field => {
                        const value = this.props.row[field.id]
                        return <td key={field.id}>
                            {
                                (field.type === "text" || field.type === "date") &&
                                <input
                                    type={field.type}
                                    className="form-control"
                                    value={this.state[field.id]}
                                    onChange={(e) => this.updateField(field.id, e.target.value)}/>
                            }
                            {
                                field.type === "select" &&
                                <select
                                    value={this.state[field.id]}
                                    onChange={(e) => this.updateField(field.id, e.target.value)}
                                    className="form-control">
                                    {
                                        field.options.map(option =>
                                            <option value={option.value}>{option.label}</option>
                                        )
                                    }
                                </select>
                            }

                        </td>
                    })
                }
                {   !this.state.editing &&
                    this.props.config.schema.map(field => {
                        const value = this.state[field.id]
                        return <td key={field.id}>
                            {value}
                        </td>
                    })
                }
                <td>
                    {
                        !this.state.editing &&
                        <span>
                            <button
                                onClick={this.editRow}
                                className="btn btn-primary">Edit</button>
                            <button
                                onClick={() => this.deleteRow(this.props.row.id)}
                                className="btn btn-danger">Delete</button>
                        </span>
                    }
                    {
                        this.state.editing &&
                        <span>
                            <button
                                onClick={() => this.saveRow(this.props.row.id, this.props.row)}
                                className="btn btn-success">Save</button>
                            <button
                                onClick={() => this.cancel()}
                                className="btn btn-danger">Cancel</button>
                        </span>
                    }
                </td>
            </tr>
        )
    }
}

export default DataTableRow;