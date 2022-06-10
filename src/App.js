import react from 'react'

import { Cards, Chart, CountryPicker } from './components'  // gets imported from ./components/index.js 
import styles from './App.module.css'
import { fetchData } from './api'

class App extends react.Component
{

  state = {
    data:{},
    country:'',
  };
  
  async componentDidMount() {
    const fetchedData = await fetchData();
    this.setState({data:fetchedData});
  }

  handleCountryChange = async(country) => {
    let fetchedData;
    if(country)
      fetchedData = await fetchData(country);
    else 
      fetchedData = await fetchData();
    this.setState({data : fetchedData , country : country});
  }

  render()
  {

    const {data,country} = this.state;

    return (
      <div className = {styles.container}>
        <Cards data={data} />
        <CountryPicker handleCountryChange={this.handleCountryChange}/>
        <Chart data={data} country={country} />
      </div>
    )
  }
}

export default App;



