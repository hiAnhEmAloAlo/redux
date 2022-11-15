import { Row, Tag, Checkbox, Button } from 'antd';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
// import { toggleCompleted } from '../../redux/actions';
import todoSlice, { deleteTodo, updateData } from '../TodoList/TodoSlice';
const priorityColorMapping = {
  High: 'red',
  Medium: 'blue',
  Low: 'gray',
  
};


export default function Todo(props) {
  const { name, priority,completed,t,id } = props
  const [checked, setChecked] = useState(completed);
  const dispatch = useDispatch();
  const [completedValue,setCompletedValue] = useState(completed)
  const toggleCheckbox = () => {
    setCompletedValue(!completed)
    setChecked(!checked);
  };
  const handleDeleteTodo=()=>{
    dispatch(deleteTodo(id))
  }
  return (
    <Row
      justify='space-between'
      style={{
        marginBottom: 3,
        ...(checked ? { opacity: 0.5, textDecoration: 'line-through' } : {}),
      }}
      >
      <Checkbox checked={checked} onChange = {toggleCheckbox}>
        {name} 
       </Checkbox>
       <div>

      <Tag color={priorityColorMapping[priority]} style={{ margin: 0 }}>
        {t(priority)}
      </Tag>
        <Button danger style={{fontSize:'12px',marginLeft:'10px'}} onClick={handleDeleteTodo}>Xóa</Button>
       </div>
    </Row>
  );
}
