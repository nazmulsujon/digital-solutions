"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet"
import "leaflet/dist/leaflet.css"
import L from "leaflet"

// Fix for default marker icons in Leaflet with Next.js
const DefaultIcon = L.icon({
    iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-green.png',
    shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41],
})

export default function MapComponent() {
    // Karwan Bazar, Dhaka coordinates
    const position: [number, number] = [23.7508, 90.3928]
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        // Set default icon for all markers
        L.Marker.prototype.options.icon = DefaultIcon
        setMounted(true)
    }, [])

    if (!mounted) return null

    return (
        <MapContainer center={position} zoom={15} style={{ height: "100%", width: "100%" }} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    <div className="text-center">
                        <strong>Digital Solutions</strong>
                        <br />
                        Karwan Bazar, Dhaka
                        <br />
                        Bangladesh
                    </div>
                </Popup>
            </Marker>
        </MapContainer>
    )
}
