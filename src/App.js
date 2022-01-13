import './App.css';
import {useEffect,useState} from 'react';
import axios from 'axios';
import Pagination from './pagination';
import StudentDetails from './StudentDetails';

function App() {
  const [studentsData,setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [dataPerPage] = useState(10);

useEffect(()=>{
    axios.get('data.json')
    .then(res=>{console.log(res.data);
      setData(res.data)
    })
    .catch(err=>console.log(err))
  },[]);

  const indexOfLastData = currentPage * dataPerPage;
  const indexOfFirstData = indexOfLastData - dataPerPage;
  const currentData = studentsData.slice(indexOfFirstData, indexOfLastData);
  const paginate = pageNumber => setCurrentPage(pageNumber);
  const nextPage=()=>{setCurrentPage(currentPage + 1)}
  const prevPage=()=>{setCurrentPage(currentPage === 1 ? 1 : currentPage-1)}

  const deleteHandler = (id) => {
    alert('Data in '+id +' is deleted');
    const stdData = [...studentsData];    
    const index = studentsData.findIndex((detail) => detail.id === id);
    stdData.splice(index, 1);
    setData(stdData);
  };
  
  return (
    <div className="App">
      <header className="App-header">
                  <StudentDetails students={currentData} loading={loading} deleteDetailHandler={deleteHandler}/>
         <Pagination dataPerPage={dataPerPage}
        totalData={studentsData.length}
        paginate={paginate}
        prevPage={prevPage}
        nextPage={nextPage}
        />
      </header>
    </div>
  );
}

export default App;
