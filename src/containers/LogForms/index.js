// == Import : npm
import { connect } from 'react-redux';

// == Import : local
import LogForms from 'src/components/LogForms';

// Action Creators
import { closeModal } from 'src/store/reducer';

/* === State (données) ===
 * - mapStateToProps retroune un objet de props pour le composant de présentation
 * - mapStateToProps met à dispo 2 params
 *  - state : le state du store (getState)
 *  - ownProps : les props passées au container
 * Pas de data à transmettre ? const mapStateToProps = null;
 */
const mapStateToProps = (state) => ({
  setOpen: state.setOpen,
  open: state.open,
});

/* === Actions ===
 * - mapDispatchToProps retroune un objet de props pour le composant de présentation
 * - mapDispatchToProps met à dispo 2 params
 *  - dispatch : la fonction du store pour dispatcher une action
 *  - ownProps : les props passées au container
 * Pas de disptach à transmettre ? const mapDispatchToProps = {};
 */
const mapDispatchToProps = (dispatch) => ({
  handleClose: () => {
    dispatch(closeModal());
  },
});

// Container
const LogFormsContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);

// == Export
export default LogFormsContainer;

/* = export à la volée
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LogForms);
*/
