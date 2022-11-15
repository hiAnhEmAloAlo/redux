import { Col, Row, Input, Button, Select, Tag } from 'antd';
import Todo from '../Todo';
import { useDispatch, useSelector } from 'react-redux';
// import { addTodoAction } from '../../redux/actions';
import { useState } from 'react';
import {v4 as uuidv4} from 'uuid'
import { todoRemaining } from '../../redux/selector';
import todoSlice, { addData } from './TodoSlice';
import { useTranslation } from 'react-i18next';

export default function TodoList() {
  const {t} = useTranslation()
  const [data,setData]=useState({
    name:'',
    priority:'Medium',
    completed:false,
  })
  const dispatch = useDispatch();
  const todoList = useSelector(todoRemaining)

  const handleAddButtonClick =()=>{
    dispatch(addData(data))
    setData({
      name:'',
      priority:'Medium',
      completed:false,
    })
  }
  const onChangeInputName = (e)=>{
    setData({...data,name:e.target.value})
  }
  
  const onChangeSelected = (value)=>{
    setData({...data,priority:value})
  }
  return (
    <Row style={{ height: 'calc(100% - 40px)' } }>
      <Col span={24} style={{ height: 'calc(100% - 40px)', overflowY: 'auto' }}>
        {todoList.map((todo,index)=>{
          return <Todo key ={index} id = {todo.id}  name={todo.name} priority={todo.priority} t={t} completed = {todo.completed}/>
        })}
      </Col>
      <Col span={24}>
        <Input.Group  style={{ display: 'flex' }} compact>
          <Input value={data.name} placeholder={t('Name todo')} onChange={onChangeInputName}/>
          <Select defaultValue="Medium" value={data.priority} onChange={onChangeSelected}>
            <Select.Option value='High' label={t('High')}>
              <Tag color='red'>{t('High')}</Tag>
            </Select.Option>
            <Select.Option value='Medium' label={t('Medium')}>
              <Tag color='blue'>{t('Medium')}</Tag>
            </Select.Option>
            <Select.Option value='Low' label={t('Low')}>
              <Tag color='gray'>{t('Low')}</Tag>
            </Select.Option>
          </Select>
          <Button disabled={!data.name} type='primary' onClick={handleAddButtonClick} >
            {t("Add")}
          </Button>
        </Input.Group>
      </Col>
    </Row>
  );
}
