import React, { Component } from 'react'
import { Header } from 'components/Header/Header'
import './style.less'
import esriLoader, { dojoRequire } from 'esri-loader'

export class Arcgis extends Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    if (!esriLoader.isLoaded()) {
      // no, lazy load it the ArcGIS API before using its classes
      esriLoader.bootstrap((err) => {
        if (err) {
          console.error(err)
        } else {
          // once it's loaded, create the map
          this.createMap()
        }
      }, {
        // use a specific version instead of latest 4.x
        url: 'https://js.arcgis.com/3.20/'
      })
    } else {
      // ArcGIS API is already loaded, just create the map
      this.createMap()
    }
  }

  createMap () {
    dojoRequire(['esri/map', 'esri/layers/ArcGISTiledMapServiceLayer'], (Map, ArcGISTiledMapServiceLayer) => {
      const url = 'http://server.arcgisonline.com/arcgis/rest/services/ESRI_StreetMap_World_2D/MapServer'
      const map = new Map(this.refs.map)
      const tiledMapServiceLayer = new ArcGISTiledMapServiceLayer(url, { id:'imageryPrime' })
      map.addLayer(tiledMapServiceLayer)
      this.props.set({ map, layers: [tiledMapServiceLayer] })
    })
  }

  render () {
    return (
      <div>
        <Header selectedKey='ARTICLE' />
        <div className='position' style={{ height: '800px' }}>
          <div ref='map' style={{ height: '800px' }} />
          {/* <div className="map-chidren"> */}
          {/* <button  onClick={this.changeMap.bind(this, [imageryPrime])}>Imagery</button> */}
          {/* <button  onClick={this.changeMap.bind(this, [imageryPrime,boundariesWorld])}>Imagery/Places</button> */}
          {/* <button  onClick={this.changeMap.bind(this, [streetMap])}>Street Map</button> */}
          {/* <button  onClick={this.changeMap.bind(this, [ngsTopoUS])}>Topographic Map</button> */}
          {/* <button  onClick={this.changeMap.bind(this, [shadedRelief])}>Relief</button> */}
          {/* </div> */}
        </div>
      </div>
    )
  }
}

Arcgis.propTypes = {
  set: React.PropTypes.func
}

export default Arcgis
