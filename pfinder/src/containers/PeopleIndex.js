import React from "react"
import { Search } from 'semantic-ui-react'
import _ from 'lodash'
import PeopleCollection from "./PeopleCollection"

class PeopleIndex extends React.Component {
      state = {
    peopleList: [],
    unfilteredPeopleList: [],
    searchTerm: "",
    sortedList: []
  }

// Get list of people
  componentDidMount() {
    fetch("http://localhost:3000/people")
    .then(res => res.json())
    .then(data => {
      this.setState({peopleList: data})
      this.setState({unfilteredPeopleList: data})
    })
  }

  //---------------------------------PEOPLE SEARCH------------------------
  handleSearch = (event, data) => {
      
    this.setState({searchTerm: data.value})
    this.setState({
      peopleList: [...this.state.unfilteredPeopleList]
    })

    let allPeople = [...this.state.peopleList]
    let search = this.state.searchTerm
    
    let filteredPeople = allPeople.filter(person=> person.name.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredPeople);
    
  
  this.setState({peopleList: filteredPeople})
}

  render(){
    
  return(

       <div className="indexPage">
       <div className="peopleCollection">
            <h1>The Person Finder</h1>
            <h2>If you can't find someone and need to know what they look like, you've come to the right place! Just type the name of the person you are looking for belowinto the search box!</h2>
            
            <br />
            <Search onSearchChange={_.debounce(this.handleSearch, 100)} />
            <br />
            <div>
            <PeopleCollection
            peopleList={this.state.peopleList}
            />
          </div>

        </div>
        </div>
  
  )
}
}

export default PeopleIndex
