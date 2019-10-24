import {CREATE, DELETE} from './DataTableActions'
import initialState from './DataTableConfig'

const dataTableReducer = (state = initialState, action) => {
    switch (action.type) {
        case 'CREATE':
        case 'DELETE':
        case 'UPDATE':
        case 'FIND_ALL':
            return {
                ...state,
                data: action.response
            }
            break;
        default:
            return state;
    }
    return state;
}

export default dataTableReducer;