import { bindActionCreators } from 'redux';
import MemoryActions from './../actions/MemoryActions';

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators(MemoryActions, dispatch)
  };
};

export default mapDispatchToProps;
