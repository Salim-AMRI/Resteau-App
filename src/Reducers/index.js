import { combineReducers } from 'redux';
import foodReducer from './FoodReducer';
import userReducer from './SingReducer';
import calcReducer from './CalcReducer';
import totalReducer from './TotalFood';



const allReducers = combineReducers({
  foods: foodReducer ,
   user: userReducer , 
   qtite: calcReducer, 
   total: totalReducer 
});

export default allReducers;