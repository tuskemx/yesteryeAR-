getDistanceFromLatLonInKm = (lat1, lon1, lat2, lon2) => {
    var R = 6371; // Radius of the earth in km
    var dLat = deg2rad(lat2 - lat1);  // deg2rad below
    var dLon = deg2rad(lon2 - lon1);
    var a =
        Math.sin(dLat / 2) * Math.sin(dLat / 2) +
        Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) *
        Math.sin(dLon / 2) * Math.sin(dLon / 2)
        ;
    var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    var d = R * c; // Distance in km
    return d;
}

function deg2rad(deg) {
    return deg * (Math.PI / 180)
}

onDoublePress = (place) => {
    if (this.state.placeInfo.title !== place.title) {
        this.setState({ placeInfo: place })
    }
    const time = new Date().getTime();
    const delta = time - this.lastPress;
    const DOUBLE_PRESS_DELAY = 1000
    if (delta < DOUBLE_PRESS_DELAY) {
        const scheme = 'geo:0,0?q='
        const lat = this.state.placeInfo.latitude;
        const lng = this.state.placeInfo.longitude;
        const latLng = `${lat},${lng}`;
        const label = `${this.state.placeInfo.url}`
        const url = `${scheme}${latLng}(${label})`
        Linking.openURL(url);
    }
    this.lastPress = time;
}

module.exports = { onDoublePress, getDistanceFromLatLonInKm }