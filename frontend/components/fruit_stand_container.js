import { connect } from 'react-redux';
import { addApple, addOrange, clearFruit } from '../actions';
import FruitStand from './fruit_stand';

const mapStateToProps = state => ({
  fruits: state.fruits
});

export default connect(mapStateToProps)(FruitStand);
