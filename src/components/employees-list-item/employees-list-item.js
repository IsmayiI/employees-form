import { Component } from 'react';
import './employees-list-item.css';

class EmployeesListItem extends Component {
   constructor(props) {
      super(props)
   }

   onChangeSalary = (e) => {
      this.props.onChangeSalary(e.target.name, e.target.value)
   }

   render() {
      const { name, salary, increase, rise, onDelete, onToggleProp } = this.props

      let classNames = 'list-group-item d-flex justify-content-between'
      if (increase) {
         classNames += ' increase'
      }
      if (rise) {
         classNames += ' like'
      }

      return (
         <li className={classNames}>
            <span className="list-group-item-label" data-toggle="rise" onClick={onToggleProp} >{name}</span>
            <input type="text" className="list-group-item-input" name={name} onChange={this.onChangeSalary} value={salary + '$'} />
            <div className='d-flex justify-content-center align-items-center'>
               <button type="button"
                  className="btn-cookie btn-sm "
                  data-toggle="increase"
                  onClick={onToggleProp} >
                  <i className="fas fa-cookie"></i>
               </button>

               <button type="button"
                  className="btn-trash btn-sm "
                  onClick={onDelete} >
                  <i className="fas fa-trash"></i>
               </button>
               <i className="fas fa-star"></i>
            </div>
         </li>
      )
   }

}


export default EmployeesListItem;