import "./app-info.css";

const AppInfo = ({ employeesLength, employeesIncrease }) => {
   return (
      <div className="app-info">
         <h1>Учет сотрудников в компании N</h1>
         <h2>Общее число сотрудников: {employeesLength}</h2>
         <h2>Премию получат: {employeesIncrease}</h2>
      </div>
   )
}

export default AppInfo;