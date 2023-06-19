
/*
window.onload = function () {

var styles = [{"featureType":"water","elementType":"geometry","stylers":[{"color":"#e9e9e9"},{"lightness":17}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":20}]},{"featureType":"road.highway","elementType":"geometry.fill","stylers":[{"color":"#ffffff"},{"lightness":17}]},{"featureType":"road.highway","elementType":"geometry.stroke","stylers":[{"color":"#ffffff"},{"lightness":29},{"weight":0.2}]},{"featureType":"road.arterial","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":18}]},{"featureType":"road.local","elementType":"geometry","stylers":[{"color":"#ffffff"},{"lightness":16}]},{"featureType":"poi","elementType":"geometry","stylers":[{"color":"#f5f5f5"},{"lightness":21}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"color":"#dedede"},{"lightness":21}]},{"elementType":"labels.text.stroke","stylers":[{"visibility":"on"},{"color":"#ffffff"},{"lightness":16}]},{"elementType":"labels.text.fill","stylers":[{"saturation":36},{"color":"#333333"},{"lightness":40}]},{"elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"transit","elementType":"geometry","stylers":[{"color":"#f2f2f2"},{"lightness":19}]},{"featureType":"administrative","elementType":"geometry.fill","stylers":[{"color":"#fefefe"},{"lightness":20}]},{"featureType":"administrative","elementType":"geometry.stroke","stylers":[{"color":"#fefefe"},{"lightness":17},{"weight":1.2}]}]

var options = {
	mapTypeControlOptions: {
	mapTypeIds: ['Styled']

	},
	center: new google.maps.LatLng(42.660313635909354, 21.1539201687133),
	zoom: 16,
	disableDefaultUI: true,	
	scrollwheel: false,
	mapTypeId: 'Styled'
};


var div = document.getElementById('surabaya');

var map = new google.maps.Map(div, options);

var styledMapType = new google.maps.StyledMapType(styles, { name: 'Styled' });

map.mapTypes.set('Styled', styledMapType);

}
*/

function initMap() {
	// Styles a map in night mode.
	const map = new google.maps.Map(document.getElementById("surabaya"), {
	  center: { lat: 42.660313635909354, lng: 21.162503237561186 },
	  zoom: 12,
	  styles: [
		{ elementType: "geometry", stylers: [{ color: "#242f3e" }] },
		{ elementType: "labels.text.stroke", stylers: [{ color: "#242f3e" }] },
		{ elementType: "labels.text.fill", stylers: [{ color: "#746855" }] },
		{
		  featureType: "administrative.locality",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#d59563" }],
		},
		{
		  featureType: "poi",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#d59563" }],
		},
		{
		  featureType: "poi.park",
		  elementType: "geometry",
		  stylers: [{ color: "#263c3f" }],
		},
		{
		  featureType: "poi.park",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#6b9a76" }],
		},
		{
		  featureType: "road",
		  elementType: "geometry",
		  stylers: [{ color: "#38414e" }],
		},
		{
		  featureType: "road",
		  elementType: "geometry.stroke",
		  stylers: [{ color: "#212a37" }],
		},
		{
		  featureType: "road",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#9ca5b3" }],
		},
		{
		  featureType: "road.highway",
		  elementType: "geometry",
		  stylers: [{ color: "#746855" }],
		},
		{
		  featureType: "road.highway",
		  elementType: "geometry.stroke",
		  stylers: [{ color: "#1f2835" }],
		},
		{
		  featureType: "road.highway",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#f3d19c" }],
		},
		{
		  featureType: "transit",
		  elementType: "geometry",
		  stylers: [{ color: "#2f3948" }],
		},
		{
		  featureType: "transit.station",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#d59563" }],
		},
		{
		  featureType: "water",
		  elementType: "geometry",
		  stylers: [{ color: "#17263c" }],
		},
		{
		  featureType: "water",
		  elementType: "labels.text.fill",
		  stylers: [{ color: "#515c6d" }],
		},
		{
		  featureType: "water",
		  elementType: "labels.text.stroke",
		  stylers: [{ color: "#17263c" }],
		},
	  ],
	});
  }
  
  window.initMap = initMap;



