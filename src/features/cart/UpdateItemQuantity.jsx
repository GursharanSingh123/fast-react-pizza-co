import { useDispatch, useSelector } from 'react-redux';
import Button from '../../ui/Button';
import {
  decreaseQuantity,
  getItemQuantityById,
  increaseQuantity,
} from './cartSlice';

function UpdateItemQuantity({ pizzaId }) {
  const itemQuantityById = useSelector(getItemQuantityById(pizzaId));
  const dispatch = useDispatch();
  function handleQuantityDecrease() {
    dispatch(decreaseQuantity(pizzaId));
  }
  function handleQuantityIncrease() {
    dispatch(increaseQuantity(pizzaId));
  }
  return (
    <div className="flex items-center gap-2 md:gap-3">
      <Button type="round" onClick={handleQuantityDecrease}>
        -
      </Button>
      <span className="text-sm font-medium">{itemQuantityById}</span>
      <Button type="round" onClick={handleQuantityIncrease}>
        +
      </Button>
    </div>
  );
}

export default UpdateItemQuantity;
