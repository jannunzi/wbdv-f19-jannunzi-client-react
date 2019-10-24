import React from 'react'

class DataTableHead extends React.Component {
    constructor(props) {
        super(props)
        console.log(props);

        const row = {};
        props.config.schema.map(schema => {
            row[schema.id] = ''
        });
        this.state = {
            config: props.config,
            row: row
        };
    }

    updateField = (fieldId, value) => {
         this.setState(prevState => {
            return prevState.row[fieldId] = value;
        })
    }
    render() {
        return(
            <thead>
            <tr>
                {
                    this.state.config.schema.map(data =>
                        <th key={data.label}>{data.label}</th>
                    )
                }
                <th>Action</th>
            </tr>
            <tr>
                {
                    this.state.config.schema.map(field => {
                        return <th key={field.id}>
                            {
                                (field.type === "text" || field.type === "date") &&
                                <input
                                    type={field.type}
                                    className="form-control"
                                    value={this.state.row[field.id]}
                                    onChange={(e) => this.updateField(field.id, e.target.value)}/>
                            }
                            {
                                field.type === "select" &&
                                <select
                                    value={field.defaultValue}
                                    onChange={(e) => this.updateField(field.id, e.target.value)}
                                    className="form-control">
                                    {
                                        field.options.map(option =>
                                            {
                                                const selected = option.selected?"selected": "";
                                                return (
                                                    <option
                                                        key={option.value}
                                                        selected={option.selected}
                                                        value={option.value}>
                                                        {option.label}
                                                    </option>
                                                )
                                            }
                                        )
                                    }
                                </select>
                            }
                        </th>
                    })
                }
                <th>
                    <button
                        onClick={() => this.props.createRecord(this.props.config.url, this.state.row)}
                        className="btn btn-primary">
                        Create
                    </button>
                </th>
            </tr>
            </thead>
        )
    }
}

export default DataTableHead;