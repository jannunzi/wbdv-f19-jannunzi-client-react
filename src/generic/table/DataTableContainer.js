import React from 'react'
import {connect} from 'react-redux'
import DataTable from "./DataTable";

const stateToPropertyMapper = state => (
    {
        config: state.config,
        data: state.data
    }
)

const dispatchToPropertyMapper = dispatch => (
    {
        createRecord: (url, newRecord) => {
            fetch(url, {
                method: 'post',
                body: JSON.stringify(newRecord),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => dispatch({
                type: 'CREATE',
                response: response
            }))
        },
        findAllRecords: (url) => {
            fetch(url)
                .then(response => response.json())
                .then(response => dispatch({
                    type: 'FIND_ALL',
                    response: response
                }))
        },
        deleteRecord: (url, recordId) => {
            fetch(url + recordId, {
                method: 'delete'
            })
                .then(response => response.json())
                .then(response => dispatch({
                    type: 'DELETE',
                    response: response
                }))
        },
        updateRecord: (url, recordId, record) => {
            fetch(url + recordId, {
                method: 'put',
                body: JSON.stringify(record),
                headers: {
                    'content-type': 'application/json'
                }
            })
            .then(response => response.json())
            .then(response => dispatch({
                type: 'UPDATE',
                response: response
            }))
        },
    }
)

const DataTableContainer = connect(
    stateToPropertyMapper, dispatchToPropertyMapper
)(DataTable);

export default DataTableContainer