import React from 'react'
import Nav from './Nav.jsx'
import Plan from './Plan.jsx'
import CreateTrip from './CreateTrip.jsx'
import Suggestions from './Suggestions.jsx'
import styles from '../../styles/App.module.css'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      locationsView: false,
      createView: false
    }
    this.handleLocationView = this.handleLocationView.bind(this);
  }

  componentDidMount() {
    fetch('/trips')
    .then(response => response.json())
    .then(data => {
      this.setState({
        list: data,
        loading: false
      })
    });
  }

  handleLocationView() {
    this.setState({
      locationsView: !this.state.locationsView
    })
  }

  render() {
    const { list, locationsView } = this.state;
    return (
      <div>
        <div className={styles.nav}>
          <Nav />
        </div>
        <div className={styles.container}>
          <div className={locationsView ? styles.plan2 : styles.plan}>
            <Plan
              list={list}
              handleLocationView={this.handleLocationView}
            />
          </div>
          {locationsView ? null :
          <>
            <div className={styles.bucket}>
              <CreateTrip />
            </div>
            <div className={styles.suggestions}>
              <Suggestions />
            </div>
          </>
          }
        </div>
      </div>
    )
  }
}

export default App;