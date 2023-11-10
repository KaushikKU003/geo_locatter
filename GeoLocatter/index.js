const latitude = 25.2546985
        const longitude = 75.488569
        const map = L.map('map').setView([latitude, longitude], 9);
        const attribute = '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        const tileUrl = 'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png';
        const tiles = L.tileLayer(tileUrl, { attribute });
        tiles.addTo(map);
        async function showLocationOnMap() {
            const latitude = document.getElementById('latitude').value;
            const longitude = document.getElementById('longitude').value;
            document.getElementById('lat').textContent = latitude
            document.getElementById('lon').textContent = longitude
            map.setView([latitude, longitude], 9)
            L.marker([latitude, longitude]).addTo(map);
        }
