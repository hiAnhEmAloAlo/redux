import React from 'react'
import { Pie } from 'react-chartjs-2'
import { useSelector } from 'react-redux'
import { todoListSelector } from '../../redux/selector'
import { Chart as ChartJS } from 'chart.js/auto'


const PieChart = () => {
  const todolist = useSelector(todoListSelector)
 const groupByName=todolist.reduce((arr,value)=>{
  if(!arr[value.priority])
    {
      arr[value.priority]=[]
    }
    arr[value.priority].push(value)
    return arr
 },[])
 const label=[]
 label.push(Object.keys(groupByName))
 const data = label[0].map(item=>{
  // console.log(item);
    return groupByName.map(e=>console.log(e))})
  return (
      <div>
          <Pie 
            data={
              {
                labels: label[0],
                datasets: [{
                  label: 'My First Dataset',
                  data: [65, 59, 80],
                }]
              }
          }
          />
      </div>
  );
}

export default PieChart