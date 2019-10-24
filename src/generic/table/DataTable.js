import React from 'react'
import DataTableHead from "./DataTableHead";
import DataTableBody from "./DataTableBody";

class DataTable extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            config: props.config,
            data: props.data
        }
    }

    componentDidMount() {
        this.props.findAllRecords(this.props.config.url);
    }

    render() {
        return (
            <div>
                <h1>Data Table</h1>
                <table className="table">
                    <DataTableHead {...this.props}/>
                    <DataTableBody {...this.props}/>
                </table>
            </div>
        );
    }
}

export default DataTable