# SatellitePositionVisualization3D
3D satellite visualization based on CesiumJS.

Please visit the CesiumJS webpage at:
<p align="center">
    <a href="http://cesiumjs.org/">
        <img src="https://github.com/AnalyticalGraphicsInc/cesium/wiki/logos/Cesium_Logo_Color.jpg" width="50%" />
    </a>
</p>



## Overview
The purpose for this project is to make an easy to use and fully customizable open-source satellite position visualization tool. There are industry standard products available for professionals who work in the satellite industry. The intention of this project is to create something for those interested parties who, for whatever reason, want an alternative. However, please keep in mind, a corner stone of this project is [Cesium](https://cesium.com). *Cesium* is now it's own company but started as a team effort of professionals from [AGI](https://www.agi.com). *AGI* produces an industry standard product know as [STK](https://www.agi.com/products/stk). *STK* now stands for **Systems Tool Kit** but was previously known as **Satellite Tool Kit**.



### Alternatives
If your sole interst is viewing current satellite positions and please visit one of following websites from the following **not exhaustive** list:
* [CELESTRAK](celestrak.com)
* [ESRI](https://maps.esri.com/rc/sat2/index.html)
* [in-the-sky](https://in-the-sky.org/satmap_worldmap.php)
* [n2yo](https://www.n2yo.com/)



## Local Server
This web application can be *served* by any means. 

### nodejs
The project includes a simple [node.js](http://nodejs.org/) server. The *server.js* code is from [cesium-workshop](https://github.com/CesiumGS/cesium-workshop.git
). The webpage for the *cesium-workshop* is [cesium-workshop](https://cesium.com/docs/tutorials/cesium-workshop/).

To use this packaged server enter the following from within the **SatellitePositionVisualization3D** root directory:
```
npm install
npm start
```
Then browse to `http://localhost:8080/`

### python3
Type:
```
python -m http.server 8080
```
Then browse to `http://localhost:8080/`



## License
Apache 2.0.  Free for commercial and non-commercial use.  See [LICENSE.md](LICENSE.md).
