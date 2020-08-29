(function () {
    "use strict";

    //////////////////////////////////////////////////////////////////////////
    // Creating the Viewer
    //////////////////////////////////////////////////////////////////////////

    var viewer = new Cesium.Viewer('cesiumContainer',
    {
        baseLayerPicker: false,
        shouldAnimate: false
    });

    //////////////////////////////////////////////////////////////////////////
    // Loading Imagery
    //////////////////////////////////////////////////////////////////////////

    // // Remove default base layer
    // viewer.imageryLayers.remove(viewer.imageryLayers.get(0));

    //////////////////////////////////////////////////////////////////////////
    // Loading Terrain
    //////////////////////////////////////////////////////////////////////////

    // // Load Cesium World Terrain
    // viewer.terrainProvider = Cesium.createWorldTerrain({
    //     requestWaterMask : true, // required for water effects
    //     requestVertexNormals : true // required for terrain lighting
    // });
    // Enable depth testing so things behind the terrain disappear.
    //viewer.scene.globe.depthTestAgainstTerrain = true;

    //////////////////////////////////////////////////////////////////////////
    // Configuring the Scene
    //////////////////////////////////////////////////////////////////////////

    // // Enable lighting based on sun/moon positions
    viewer.scene.globe.enableLighting = true;

    // // Create an initial camera view
    // var initialPosition = new Cesium.Cartesian3.fromDegrees(-73.998114468289017509, 40.674512895646692812, 2631.082799425431);
    // var initialOrientation = new Cesium.HeadingPitchRoll.fromDegrees(7.1077496389876024807, -31.987223091598949054, 0.025883251314954971306);
    // var homeCameraView = {
    //     destination : initialPosition,
    //     orientation : {
    //         heading : initialOrientation.heading,
    //         pitch : initialOrientation.pitch,
    //         roll : initialOrientation.roll
    //     }
    // };
    // // Set the initial view
    // viewer.scene.camera.setView(homeCameraView);

    // // Add some camera flight animation options
    // homeCameraView.duration = 2.0;
    // homeCameraView.maximumHeight = 2000;
    // homeCameraView.pitchAdjustHeight = 2000;
    // homeCameraView.endTransform = Cesium.Matrix4.IDENTITY;
    // // Override the default home button
    // viewer.homeButton.viewModel.command.beforeExecute.addEventListener(function (e) {
    //     e.cancel = true;
    //     viewer.scene.camera.flyTo(homeCameraView);
    // });

    // // Set up clock and timeline.
    // viewer.clock.shouldAnimate = true; // default
    // viewer.clock.startTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
    // viewer.clock.stopTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:20:00Z");
    // viewer.clock.currentTime = Cesium.JulianDate.fromIso8601("2017-07-11T16:00:00Z");
    // viewer.clock.multiplier = 2; // sets a speedup
    // viewer.clock.clockStep = Cesium.ClockStep.SYSTEM_CLOCK_MULTIPLIER; // tick computation mode
    // viewer.clock.clockRange = Cesium.ClockRange.LOOP_STOP; // loop at the end
    // viewer.timeline.zoomTo(viewer.clock.startTime, viewer.clock.stopTime); // set visible range

    //////////////////////////////////////////////////////////////////////////
    // Loading and Styling Entity Data
    //////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////
    // // Load a satellite flight path from a CZML file
    //////////////////////////////////////////////////////////////////////////
    var satData = [
        {
            id: "document",
            name: "CZML geometry test",
            version: "1.0",
        },
        {
            id: "sat1",
            name: "Test satellite 1",
            position: { 
                cartographicDegrees: [-75.0, 0, 35786000.0],
            },
            ellipsoid: {
                radii: {
                    cartesian: [300000.0,300000.0,300000.0],
                },
                fill: true,
                material: {
                    solidColor: {
                        color: { 
                            rgba: [255, 0, 0, 255] 
                        },
                    },
                },
            },
        },
    ];

    //var satPromise = Cesium.CzmlDataSource.load('../../Data/satTest.czml');
    var satDataPromise = Cesium.CzmlDataSource.load(satData);
    viewer.dataSources.add(satDataPromise);
    viewer.zoomTo(satDataPromise);
    //////////////////////////////////////////////////////////////////////////
    // // Save a new satellite model entity
    // var sat;
    // satPromise.then(function(dataSource) {
    //     viewer.dataSources.add(dataSource);
    //     // Get the entity using the id defined in the CZML data
    //     sat = dataSource.entities.getById('Aircraft/Aircraft1');
    //     // Attach a 3D model
    //     sat.model = {
    //         uri : './Source/SampleData/Models/CesiumSat.gltf',
    //         minimumPixelSize : 128,
    //         maximumScale : 1000,
    //         silhouetteColor : Cesium.Color.WHITE,
    //         silhouetteSize : 2
    //     };
    //     // Add computed orientation based on sampled positions
    //     sat.orientation = new Cesium.VelocityOrientationProperty(sat.position);

    //     // Smooth path interpolation
    //     sat.position.setInterpolationOptions({
    //         interpolationAlgorithm : Cesium.HermitePolynomialApproximation,
    //         interpolationDegree : 2
    //     });
    //     sat.viewFrom = new Cesium.Cartesian3(-30, 0, 0);
    // });

    //////////////////////////////////////////////////////////////////////////
    // Load 3D Tileset
    //////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////
    // Style 3D Tileset
    //////////////////////////////////////////////////////////////////////////


    //////////////////////////////////////////////////////////////////////////
    // Custom mouse interaction for highlighting and selecting
    //////////////////////////////////////////////////////////////////////////

    // // If the mouse is over a point of interest, change the entity billboard scale and color
    // var previousPickedEntity;
    // var handler = viewer.screenSpaceEventHandler;
    // handler.setInputAction(function (movement) {
    //     var pickedPrimitive = viewer.scene.pick(movement.endPosition);
    //     var pickedEntity = Cesium.defined(pickedPrimitive) ? pickedPrimitive.id : undefined;
    //     // Unhighlight the previously picked entity
    //     if (Cesium.defined(previousPickedEntity)) {
    //         previousPickedEntity.billboard.scale = 1.0;
    //         previousPickedEntity.billboard.color = Cesium.Color.WHITE;
    //     }
    //     // Highlight the currently picked entity
    //     if (Cesium.defined(pickedEntity) && Cesium.defined(pickedEntity.billboard)) {
    //         pickedEntity.billboard.scale = 2.0;
    //         pickedEntity.billboard.color = Cesium.Color.ORANGERED;
    //         previousPickedEntity = pickedEntity;
    //     }
    // }, Cesium.ScreenSpaceEventType.MOUSE_MOVE);

    //////////////////////////////////////////////////////////////////////////
    // Setup Camera Modes
    //////////////////////////////////////////////////////////////////////////

    // var freeModeElement = document.getElementById('freeMode');
    // var satModeElement = document.getElementById('satMode');

    // // Create a follow camera by tracking the sat entity
    // function setViewMode() {
    //     if (satModeElement.checked) {
    //         viewer.trackedEntity = sat;
    //     } else {
    //         viewer.trackedEntity = undefined;
    //         viewer.scene.camera.flyTo(homeCameraView);
    //     }
    // }

    // freeModeElement.addEventListener('change', setViewMode);
    // satModeElement.addEventListener('change', setViewMode);

    // viewer.trackedEntityChanged.addEventListener(function() {
    //     if (viewer.trackedEntity === sat) {
    //         freeModeElement.checked = false;
    //         satModeElement.checked = true;
    //     }
    // });

    //////////////////////////////////////////////////////////////////////////
    // Setup Display Options
    //////////////////////////////////////////////////////////////////////////


}());
