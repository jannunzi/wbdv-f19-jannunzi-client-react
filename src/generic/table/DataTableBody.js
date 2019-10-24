import React from 'react'
import DataTableRow from "./DataTableRow";

class DataTableBody extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: props.data
        }
    }

    render() {
        return(
            <tbody>
            {
                this.props.data && this.props.data.map((row, index) =>
                    <DataTableRow
                        key={index}
                        row={row}
                        {...this.props}/>
                )
            }
            </tbody>
        )
    }
}

export default DataTableBody;