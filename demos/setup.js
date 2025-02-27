window['CESIUM_BASE_URL'] = '../node_modules/cesium/Source';
import Viewer from '../node_modules/cesium/Source/Widgets/Viewer/Viewer';
import createWorldTerrain from '../node_modules/cesium/Source/Core/createWorldTerrain';
import Cartesian3 from '../node_modules/cesium/Source/Core/Cartesian3';
import CesiumMath from '../node_modules/cesium/Source/Core/Math';

export function createViewer(container) {
  const viewer = new Viewer(container, {
    timeline: false,
    navigationHelpButton: false,
    animation: false,
    baseLayerPicker: false,
    sceneModePicker: false,
    geocoder: false,
    homeButton: false,
    terrainProvider: createWorldTerrain()
  });
  viewer.camera.flyTo({
    destination: Cartesian3.fromDegrees(6.06749, 43.77784, 204227),
    orientation: {
      heading: CesiumMath.toRadians(26.0),
      pitch: CesiumMath.toRadians(-33.0)
    },
    duration: 0
  });
  return viewer;
}
