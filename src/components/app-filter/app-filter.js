import { Component } from "react";
import "./app-filter.css";

class AppFilter extends Component {
   constructor(props) {
      super(props)
      this.state = {
         buttons: [
            { text: 'Все сотрудники', active: false, id: 1, filter: '' },
            { text: 'На повышение', active: false, id: 2, filter: 'rise' },
            { text: 'З/П больше 1000$', active: false, id: 3, filter: 'moreThen1000' }
         ]
      }
   }

   onActive = (id) => {
      this.setState(({ buttons }) => {
         const activeBtn = buttons.map(btn => {
            if (btn.id === id) {
               this.props.onUpdateFilter(btn.filter)
               btn.active = true
               return { ...btn }
            }
            return { ...btn, active: false }
         })



         return {
            buttons: activeBtn
         }
      })


   }


   render() {

      return (
         <div className="btn-group">
            {this.state.buttons.map(({ text, style, active, id }) => {
               let className = "btn "
               if (active) {
                  className += 'btn-light'
               } else {
                  className += 'btn-outline-light'
               }

               return (
                  <button onClick={() => this.onActive(id)} data-active={active} type="button" key={id} className={className}>{text}</button>
               )
            })
            }
         </div >
      )
   }
}

export default AppFilter;