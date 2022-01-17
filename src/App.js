
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './App.css';
import { getData } from './Redux/Action';

import 'bootstrap/dist/css/bootstrap.min.css';
import { Spinner } from 'react-bootstrap';

function App() {
  const dispatch = useDispatch()
  const { loading, Makeup } = useSelector(state => state)
  useEffect(() => {
    dispatch(getData())
  }, [])
  return (
    <div className="App">
      {loading ? 
      <Spinner animation="border" role="status">
        <span className="visually-hidden">Loading...</span>
      </Spinner>
        : <div>
          {Makeup.map(elt => 
           
          <h3> {elt.name}</h3>
          )}
        </div>}

    </div>
  );
}

export default App;
