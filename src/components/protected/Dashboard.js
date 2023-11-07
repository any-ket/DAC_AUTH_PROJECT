import React, { Component } from 'react'
import { getObjects } from '../../helpers/objects'


export default class Dashboard extends Component {
  constructor(){
    super();
    this.state = {
      objects: []
    };
  }


  componentDidMount(){
    getObjects().then(resp => {
      this.setState({objects: resp});
    }).catch(e => {
      console.error(e);
    });
  }

  render () {
    return (
      <div className="contentcontainer">
        {
          this.state.objects.map(obj => (<div className='singleobj'>
            <div className='content'>{obj.nm}</div>
            <div className="btncontainer">
              <button>Read</button>
              <button>Update</button>
              <button>Delete</button>
            </div>
          </div>))
        }
      </div>
    )
  }
}