import { useEffect, useState } from 'react'

import 'bootstrap/dist/css/bootstrap.min.css';
import { EmployeeData } from './Employeedata'

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    setData(EmployeeData)
  }, []);

  return (
    <>
      <div className='app'>
        <table className='table table-hover'>
          <thead>
            <tr>
              <td>Sr.No</td>
              <td>Id</td>
              <td>First Name</td>
              <td>Last Name</td>
              <td>Age</td>
            </tr>
          </thead>
          <tbody>
            {
              data.map((item, index) => (
                <tr key={index}>
                  <td>{index + 1}</td>
                  <td>{item.id}</td>
                  <td>{item.firstName}</td>
                  <td>{item.lastName}</td>
                  <td>{item.age}</td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </>
  )
}

export default App
