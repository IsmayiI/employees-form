import { Component } from 'react';
import AppInfo from '../app-info/app-info';
import SearchPanel from '../search-panel/search-panel';
import AppFilter from '../app-filter/app-filter';
import EmployeesList from '../employees-list/employees-list';
import EmployeesAddForm from '../employees-add-form/employees-add-form';

import './app.css';


class App extends Component {
   constructor(props) {
      super(props)
      this.state = {
         data: [
            { name: 'Alex', salary: 800, increase: false, rise: false, id: 1 },
            { name: 'Ivan', salary: 300, increase: false, rise: false, id: 2 },
            { name: 'John', salary: 5000, increase: false, rise: false, id: 3 },
         ],
         term: '',
         filter: ''
      }
      this.maxId = 4;
   }

   onChangeSalary = (name, salary) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.name === name) {
               return { ...item, salary }
            }
            return item
         })
      }))
   }

   deleteItem = (id) => {
      this.setState(({ data }) => ({
         data: data.filter(item => item.id !== id)
      }))
   }

   createItem = (name, salary) => {
      const newItem = {
         name,
         salary,
         increase: false,
         rise: false,
         id: this.maxId++
      }
      this.setState(({ data }) => {
         const newData = [...data, newItem]
         return {
            data: newData
         }
      })
   }

   onToggleProp = (id, prop) => {
      this.setState(({ data }) => ({
         data: data.map(item => {
            if (item.id === id) {
               // item.increase = !item.increase
               return { ...item, [prop]: !item[prop] }
            }
            return item
         })
      }))
   }

   searchEmp = (emps, term) => {
      if (term.length === 0) {
         return emps
      }

      return emps.filter(emp => emp.name.includes(term))
   }

   onUpdateSearch = (term) => {
      this.setState({ term })
   }

   filterEmp = (emps, filter) => {
      switch (filter) {
         case 'rise':
            return emps.filter(emp => emp.rise)
         case 'moreThen1000':
            return emps.filter(emp => emp.salary > 1000)
         default:
            return emps
      }
   }

   onUpdateFilter = (filter) => {
      this.setState({ filter })
   }


   render() {
      const { data, term, filter } = this.state
      const visibleData = this.filterEmp(this.searchEmp(data, term), filter)
      return (
         <div className="app">
            <AppInfo employeesLength={data.length} employeesIncrease={data.filter(item => item.increase).length} />

            <div className="search-panel">
               <SearchPanel onUpdateSearch={this.onUpdateSearch} />
               <AppFilter onUpdateFilter={this.onUpdateFilter} />
            </div>

            <EmployeesList data={visibleData}
               onDelete={this.deleteItem}
               onToggleProp={this.onToggleProp}
               onChangeSalary={this.onChangeSalary} />
            <EmployeesAddForm onCreate={this.createItem} />
         </div>
      )
   }
}

export default App;

