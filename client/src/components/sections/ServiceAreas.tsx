/**
 * Service Areas Section — R.O. Smith Law Firm
 * Design: Split layout — Google Map left, service area list right
 * Map: Dark-themed Google Maps with Elmont, NY marker
 */
import { useRef, useEffect } from "react";
import { MapPin, ArrowRight } from "lucide-react";
import { MapView } from "@/components/Map";

const serviceAreas = [
  {
    name: "New York City",
    desc: "Manhattan, Brooklyn, Queens, Bronx & Staten Island",
    href: "/new-york-city",
  },
  {
    name: "Nassau County",
    desc: "Elmont, Hempstead, Long Beach, Garden City & more",
    href: "/nassau-county",
  },
  {
    name: "Suffolk County",
    desc: "Babylon, Islip, Huntington, Smithtown & more",
    href: "/suffolk-county",
  },
  {
    name: "Westchester County",
    desc: "White Plains, Yonkers, Mount Vernon & more",
    href: "/westchester-county",
  },
];

// Dark map style for Google Maps
const darkMapStyles = [
  { elementType: "geometry", stylers: [{ color: "#1a1a2e" }] },
  { elementType: "labels.text.stroke", stylers: [{ color: "#0a0a0a" }] },
  { elementType: "labels.text.fill", stylers: [{ color: "#b8b8b8" }] },
  { featureType: "road", elementType: "geometry", stylers: [{ color: "#2a2a3e" }] },
  { featureType: "road", elementType: "geometry.stroke", stylers: [{ color: "#0a0a0a" }] },
  { featureType: "road", elementType: "labels.text.fill", stylers: [{ color: "#9ca3af" }] },
  { featureType: "water", elementType: "geometry", stylers: [{ color: "#0d1117" }] },
  { featureType: "water", elementType: "labels.text.fill", stylers: [{ color: "#515c6d" }] },
  { featureType: "poi", elementType: "geometry", stylers: [{ color: "#1e1e3a" }] },
  { featureType: "transit", elementType: "geometry", stylers: [{ color: "#1e1e3a" }] },
  { featureType: "administrative", elementType: "geometry.stroke", stylers: [{ color: "#C9A84C", weight: 1.5 }] },
  { featureType: "administrative.locality", elementType: "labels.text.fill", stylers: [{ color: "#d4b896" }] },
];

function MapSection() {
  const mapRef = useRef<google.maps.Map | null>(null);

  const handleMapReady = (map: google.maps.Map) => {
    mapRef.current = map;
    map.setOptions({ styles: darkMapStyles });

    // Add marker for office location
    new google.maps.Marker({
      position: { lat: 40.6892, lng: -73.7037 }, // Elmont, NY
      map,
      title: "R.O. Smith Law Firm — 11418 238th Street, Elmont, NY 11003",
      icon: {
        path: google.maps.SymbolPath.CIRCLE,
        scale: 10,
        fillColor: "#C9A84C",
        fillOpacity: 1,
        strokeColor: "#0a0a0a",
        strokeWeight: 2,
      },
    });
  };

  return (
    <MapView
      initialCenter={{ lat: 40.7128, lng: -73.9 }}
      initialZoom={9}
      onMapReady={handleMapReady}
      className="w-full h-full min-h-[400px] rounded-lg overflow-hidden"
    />
  );
}

export default function ServiceAreas() {
  return (
    <section
      id="service-areas"
      className="py-20 md:py-28 bg-[#1a1a2e]"
      aria-labelledby="service-areas-heading"
    >
      <div className="container">
        {/* Header */}
        <div className="mb-12 fade-up">
          <div className="flex items-center gap-3 mb-4">
            <div className="h-px w-8 bg-[#C9A84C]" />
            <span
              className="text-[#C9A84C] text-xs font-semibold tracking-[0.25em] uppercase"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              Where We Practice
            </span>
          </div>
          <h2
            id="service-areas-heading"
            className="text-[30px] md:text-[40px] font-bold text-[#f5f5f5] leading-tight"
            style={{ fontFamily: "'Playfair Display', serif" }}
          >
            We Serve All of{" "}
            <span className="gold-underline text-[#C9A84C]">NYC &amp; Surrounding Counties</span>
          </h2>
        </div>

        {/* Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-start">
          {/* Map */}
          <div className="fade-up h-[400px] md:h-[480px] rounded-lg overflow-hidden border border-white/10 shadow-[0_20px_60px_rgba(0,0,0,0.5)]">
            <MapSection />
          </div>

          {/* Service Area List */}
          <div className="fade-up" style={{ transitionDelay: "150ms" }}>
            <p
              className="text-[#b8b8b8] text-base leading-relaxed mb-8"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              R.O. Smith Law Firm proudly serves clients throughout the greater New York metropolitan area. Our office is conveniently located in Elmont, NY, with easy access to all five boroughs and surrounding counties.
            </p>

            <ul className="space-y-4" role="list">
              {serviceAreas.map((area, i) => (
                <li
                  key={area.name}
                  className="fade-up"
                  style={{ transitionDelay: `${i * 80 + 200}ms` }}
                >
                  <a
                    href={area.href}
                    className="flex items-start gap-4 p-4 rounded-lg border border-white/8 bg-[#0a0a0a]/40 hover:border-[#C9A84C]/50 hover:bg-[#C9A84C]/5 transition-all duration-300 group"
                  >
                    <MapPin
                      size={18}
                      className="text-[#C9A84C] flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[#f5f5f5] font-semibold text-base group-hover:text-[#C9A84C] transition-colors duration-200"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {area.name}
                      </p>
                      <p
                        className="text-[#b8b8b8] text-sm mt-0.5"
                        style={{ fontFamily: "'DM Sans', sans-serif" }}
                      >
                        {area.desc}
                      </p>
                    </div>
                    <ArrowRight
                      size={16}
                      className="text-[#C9A84C]/40 group-hover:text-[#C9A84C] group-hover:translate-x-1 transition-all duration-200 flex-shrink-0 mt-0.5"
                      aria-hidden="true"
                    />
                  </a>
                </li>
              ))}
            </ul>

            {/* Office Address */}
            <div className="mt-8 p-5 rounded-lg border border-[#C9A84C]/20 bg-[#C9A84C]/5">
              <p
                className="text-[#C9A84C] text-xs font-semibold tracking-widest uppercase mb-2"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                Office Location
              </p>
              <address
                className="text-[#f5f5f5] text-sm not-italic leading-relaxed"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                11418 238th Street<br />
                Elmont, NY 11003
              </address>
              <a
                href="tel:9175477563"
                className="text-[#C9A84C] text-sm font-semibold mt-2 inline-block hover:text-[#d4b896] transition-colors"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                (917) 547-7563
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
