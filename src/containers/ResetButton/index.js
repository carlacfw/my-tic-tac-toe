import { connect } from 'react-redux'

import ResetButton from '../../components/ResetButton'
import { resetClicked } from '../../state'

function mapDispatchToProps (dispatch) {
  return {
    handleClick: () => dispatch(resetClicked())
  }
}

export default connect(null, mapDispatchToProps)(ResetButton)
