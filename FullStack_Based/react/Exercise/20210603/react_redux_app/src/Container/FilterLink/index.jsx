import { connect } from 'react-redux';
import { setVisibilityFilter } from '../../Actions';
import Link from '../../Components/Link';

//容器组件
const mapStateToProps = (state , ownProps) => {
    return {
        active: ownProps.filter === state.visibilityFilter
    }
}

const mapDispatchToProps = (dispatch , ownProps) => {
    return {
        onClick: () => {
            dispatch(setVisibilityFilter(ownProps.filter))
        }
    }
}

const FilterLink = connect(
    mapStateToProps,
    mapDispatchToProps
)(Link)

export default FilterLink;