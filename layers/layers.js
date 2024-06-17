var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            //'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_AG_DORES_23_1 = new ol.format.GeoJSON();
var features_AG_DORES_23_1 = format_AG_DORES_23_1.readFeatures(json_AG_DORES_23_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_AG_DORES_23_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_AG_DORES_23_1.addFeatures(features_AG_DORES_23_1);
var lyr_AG_DORES_23_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_AG_DORES_23_1, 
                style: style_AG_DORES_23_1,
                popuplayertitle: "AG_DORES_23",
                interactive: true,
                    title: '<img src="styles/legend/AG_DORES_23_1.png" /> AG_DORES_23'
                });
var format_280460705000056_2 = new ol.format.GeoJSON();
var features_280460705000056_2 = format_280460705000056_2.readFeatures(json_280460705000056_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280460705000056_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280460705000056_2.addFeatures(features_280460705000056_2);
var lyr_280460705000056_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280460705000056_2, 
                style: style_280460705000056_2,
                popuplayertitle: "280460705000056",
                interactive: true,
                    title: '<img src="styles/legend/280460705000056_2.png" /> 280460705000056'
                });
var format_280560405000074_3 = new ol.format.GeoJSON();
var features_280560405000074_3 = format_280560405000074_3.readFeatures(json_280560405000074_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280560405000074_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280560405000074_3.addFeatures(features_280560405000074_3);
var lyr_280560405000074_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280560405000074_3, 
                style: style_280560405000074_3,
                popuplayertitle: "280560405000074",
                interactive: true,
                    title: '<img src="styles/legend/280560405000074_3.png" /> 280560405000074'
                });
var format_280560405000075_4 = new ol.format.GeoJSON();
var features_280560405000075_4 = format_280560405000075_4.readFeatures(json_280560405000075_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280560405000075_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280560405000075_4.addFeatures(features_280560405000075_4);
var lyr_280560405000075_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280560405000075_4, 
                style: style_280560405000075_4,
                popuplayertitle: "280560405000075",
                interactive: true,
                    title: '<img src="styles/legend/280560405000075_4.png" /> 280560405000075'
                });
var format_280130620000005_5 = new ol.format.GeoJSON();
var features_280130620000005_5 = format_280130620000005_5.readFeatures(json_280130620000005_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280130620000005_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280130620000005_5.addFeatures(features_280130620000005_5);
var lyr_280130620000005_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280130620000005_5, 
                style: style_280130620000005_5,
                popuplayertitle: "280130620000005",
                interactive: true,
                    title: '<img src="styles/legend/280130620000005_5.png" /> 280130620000005'
                });
var format_280130610000010_6 = new ol.format.GeoJSON();
var features_280130610000010_6 = format_280130610000010_6.readFeatures(json_280130610000010_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280130610000010_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280130610000010_6.addFeatures(features_280130610000010_6);
var lyr_280130610000010_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280130610000010_6, 
                style: style_280130610000010_6,
                popuplayertitle: "280130610000010",
                interactive: true,
                    title: '<img src="styles/legend/280130610000010_6.png" /> 280130610000010'
                });
var format_280450805000008_7 = new ol.format.GeoJSON();
var features_280450805000008_7 = format_280450805000008_7.readFeatures(json_280450805000008_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280450805000008_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280450805000008_7.addFeatures(features_280450805000008_7);
var lyr_280450805000008_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280450805000008_7, 
                style: style_280450805000008_7,
                popuplayertitle: "280450805000008",
                interactive: true,
                    title: '<img src="styles/legend/280450805000008_7.png" /> 280450805000008'
                });
var format_280130615000003_8 = new ol.format.GeoJSON();
var features_280130615000003_8 = format_280130615000003_8.readFeatures(json_280130615000003_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280130615000003_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280130615000003_8.addFeatures(features_280130615000003_8);
var lyr_280130615000003_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280130615000003_8, 
                style: style_280130615000003_8,
                popuplayertitle: "280130615000003",
                interactive: true,
                    title: '<img src="styles/legend/280130615000003_8.png" /> 280130615000003'
                });
var format_280560405000001_9 = new ol.format.GeoJSON();
var features_280560405000001_9 = format_280560405000001_9.readFeatures(json_280560405000001_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280560405000001_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280560405000001_9.addFeatures(features_280560405000001_9);
var lyr_280560405000001_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280560405000001_9, 
                style: style_280560405000001_9,
                popuplayertitle: "280560405000001",
                interactive: true,
                    title: '<img src="styles/legend/280560405000001_9.png" /> 280560405000001'
                });
var format_280450805000076_10 = new ol.format.GeoJSON();
var features_280450805000076_10 = format_280450805000076_10.readFeatures(json_280450805000076_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280450805000076_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280450805000076_10.addFeatures(features_280450805000076_10);
var lyr_280450805000076_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280450805000076_10, 
                style: style_280450805000076_10,
                popuplayertitle: "280450805000076",
                interactive: true,
                    title: '<img src="styles/legend/280450805000076_10.png" /> 280450805000076'
                });
var format_280420105000040_11 = new ol.format.GeoJSON();
var features_280420105000040_11 = format_280420105000040_11.readFeatures(json_280420105000040_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280420105000040_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280420105000040_11.addFeatures(features_280420105000040_11);
var lyr_280420105000040_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280420105000040_11, 
                style: style_280420105000040_11,
                popuplayertitle: "280420105000040",
                interactive: true,
                    title: '<img src="styles/legend/280420105000040_11.png" /> 280420105000040'
                });
var format_280420105000039_12 = new ol.format.GeoJSON();
var features_280420105000039_12 = format_280420105000039_12.readFeatures(json_280420105000039_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280420105000039_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280420105000039_12.addFeatures(features_280420105000039_12);
var lyr_280420105000039_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280420105000039_12, 
                style: style_280420105000039_12,
                popuplayertitle: "280420105000039",
                interactive: true,
                    title: '<img src="styles/legend/280420105000039_12.png" /> 280420105000039'
                });
var format_280450805000027_13 = new ol.format.GeoJSON();
var features_280450805000027_13 = format_280450805000027_13.readFeatures(json_280450805000027_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280450805000027_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280450805000027_13.addFeatures(features_280450805000027_13);
var lyr_280450805000027_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280450805000027_13, 
                style: style_280450805000027_13,
                popuplayertitle: "280450805000027",
                interactive: true,
                    title: '<img src="styles/legend/280450805000027_13.png" /> 280450805000027'
                });
var format_280120705000034_14 = new ol.format.GeoJSON();
var features_280120705000034_14 = format_280120705000034_14.readFeatures(json_280120705000034_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_280120705000034_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_280120705000034_14.addFeatures(features_280120705000034_14);
var lyr_280120705000034_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_280120705000034_14, 
                style: style_280120705000034_14,
                popuplayertitle: "280120705000034",
                interactive: true,
                    title: '<img src="styles/legend/280120705000034_14.png" /> 280120705000034'
                });
var group_CENFE_SETEMBRO_PNADC_OUT = new ol.layer.Group({
                                layers: [lyr_280120705000034_14,],
                                fold: "open",
                                title: "CENFE_SETEMBRO_PNADC_OUT"});
var group_CNEFE_OUTUBRO_PNADC_NOV = new ol.layer.Group({
                                layers: [lyr_280130615000003_8,lyr_280560405000001_9,lyr_280450805000076_10,lyr_280420105000040_11,lyr_280420105000039_12,lyr_280450805000027_13,],
                                fold: "open",
                                title: "CNEFE_OUTUBRO_PNADC_NOV"});
var group_CNEFE_NOVEMBRO_PNADC_DEZ = new ol.layer.Group({
                                layers: [lyr_280130610000010_6,lyr_280450805000008_7,],
                                fold: "open",
                                title: "CNEFE_NOVEMBRO_PNADC_DEZ"});
var group_CNEFE_DEZEMBRO_PNADC_JAN = new ol.layer.Group({
                                layers: [lyr_280460705000056_2,lyr_280560405000074_3,lyr_280560405000075_4,lyr_280130620000005_5,],
                                fold: "open",
                                title: "CNEFE_DEZEMBRO_PNADC_JAN"});

lyr_OSMStandard_0.setVisible(true);lyr_AG_DORES_23_1.setVisible(true);lyr_280460705000056_2.setVisible(true);lyr_280560405000074_3.setVisible(true);lyr_280560405000075_4.setVisible(true);lyr_280130620000005_5.setVisible(true);lyr_280130610000010_6.setVisible(true);lyr_280450805000008_7.setVisible(true);lyr_280130615000003_8.setVisible(true);lyr_280560405000001_9.setVisible(true);lyr_280450805000076_10.setVisible(true);lyr_280420105000040_11.setVisible(true);lyr_280420105000039_12.setVisible(true);lyr_280450805000027_13.setVisible(true);lyr_280120705000034_14.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_AG_DORES_23_1,group_CNEFE_DEZEMBRO_PNADC_JAN,group_CNEFE_NOVEMBRO_PNADC_DEZ,group_CNEFE_OUTUBRO_PNADC_NOV,group_CENFE_SETEMBRO_PNADC_OUT];
lyr_AG_DORES_23_1.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280460705000056_2.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280560405000074_3.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280560405000075_4.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280130620000005_5.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280130610000010_6.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280450805000008_7.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280130615000003_8.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280560405000001_9.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280450805000076_10.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280420105000040_11.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280420105000039_12.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280450805000027_13.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_280120705000034_14.set('fieldAliases', {'COD_SETOR': 'COD_SETOR', 'SIT_TIPO': 'SIT_TIPO', 'NOME_MUNI': 'NOME_MUNI', });
lyr_AG_DORES_23_1.set('fieldImages', {'COD_SETOR': 'TextEdit', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280460705000056_2.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280560405000074_3.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280560405000075_4.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280130620000005_5.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280130610000010_6.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280450805000008_7.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280130615000003_8.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280560405000001_9.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280450805000076_10.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280420105000040_11.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280420105000039_12.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280450805000027_13.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_280120705000034_14.set('fieldImages', {'COD_SETOR': '', 'SIT_TIPO': '', 'NOME_MUNI': '', });
lyr_AG_DORES_23_1.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280460705000056_2.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280560405000074_3.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280560405000075_4.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280130620000005_5.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280130610000010_6.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280450805000008_7.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280130615000003_8.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280560405000001_9.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280450805000076_10.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280420105000040_11.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280420105000039_12.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280450805000027_13.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280120705000034_14.set('fieldLabels', {'COD_SETOR': 'inline label - always visible', 'SIT_TIPO': 'inline label - always visible', 'NOME_MUNI': 'inline label - always visible', });
lyr_280120705000034_14.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});