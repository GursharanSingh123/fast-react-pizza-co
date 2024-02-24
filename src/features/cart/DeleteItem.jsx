import { useDispatch } from 'react-redux';
import { deleteItem } from './cartSlice';
import Button from '../../ui/Button';

function DeleteItem({ pizzaId }) {
  const dispatch = useDispatch();

  function handleDeleteItem() {
    dispatch(deleteItem(pizzaId));
    // if (cartSize === 0) {
    //   console.log(1);
    //   navigate('/menu');
    // }
  }
  return (
    <Button onClick={handleDeleteItem} type="small">
      Delete
    </Button>
  );
}

export default DeleteItem;
