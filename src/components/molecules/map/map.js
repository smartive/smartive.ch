import React from 'react';

import { withGoogleMap, withScriptjs, GoogleMap, Marker, InfoWindow } from 'react-google-maps';

import './map.scss';
import mapMarkerImage from './map-marker.png';

export const baseUrl =
  'https://maps.googleapis.com/maps/api/js?v=3.34&libraries=places,geometry&key=AIzaSyD1q6iI1c4XGqrbKGBPZfO2bnRTRVaRg04';

const AsyncGoogleMaps = withScriptjs(
  withGoogleMap((props) => (
    <GoogleMap
      ref={props.onMapLoad}
      defaultZoom={15}
      defaultCenter={{ lat: 47.389962, lng: 8.514064 }}
      defaultOptions={{ scrollwheel: false }}
    >
      <Marker icon={mapMarkerImage} position={{ lat: 47.389962, lng: 8.514064 }}>
        <InfoWindow>
          <div className="map__schema" itemScope itemType="https://schema.org/ContactPage">
            <p className="map-info">
              <span itemProp="name" className="map-info--name">
                smartive AG
              </span>
              <span itemScope itemProp="address" itemType="https://schema.org/PostalAddress">
                <span className="map-info--street" itemProp="streetAddress">
                  Pfingstweidstrasse 60
                </span>
                CH-
                <span className="map-info--zip" itemProp="postalCode">
                  8005
                </span>
                &nbsp;
                <span className="map-info--locality" itemProp="addressLocality">
                  Zürich
                </span>
              </span>
            </p>
          </div>
        </InfoWindow>
      </Marker>
    </GoogleMap>
  ))
);

export const Map = () => (
  <div className="map">
    <div className="container">
      <div className="col-xs-12">
        <div className="map__container">
          <AsyncGoogleMaps
            googleMapURL={baseUrl}
            loadingElement={<div style={{ height: '100%' }} />}
            containerElement={<div style={{ height: '100%' }} />}
            mapElement={
              <div className="map__container--loading">
                <span className="map__container__loading-text">Karte wird geladen...</span>
              </div>
            }
          />
        </div>
      </div>
    </div>
  </div>
);

export default Map;
