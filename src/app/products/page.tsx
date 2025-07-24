"use client";
import React, { useState } from "react";
import Link from "next/link";
import { TSHIRTS_DATA } from "../../data/data";
import Image from "next/image";
function Products() {
  const [selectedSize, setSelectedSize] = useState<string>("All");
  const [selectedColor, setSelectedColor] = useState<string>("All");

  const sizes = Array.from(new Set(TSHIRTS_DATA.map((t) => t.size)));
  const colors = Array.from(new Set(TSHIRTS_DATA.map((t) => t.color)));

  const filteredTshirts = TSHIRTS_DATA.filter((t) => {
    const matchSize = selectedSize === "All" || t.size === selectedSize;
    const matchColor = selectedColor === "All" || t.color === selectedColor;
    return matchSize && matchColor;
  });

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h2>Koala Tshirts</h2>

      {/* Filter */}
      <div style={{ marginBottom: "20px", display: "flex", gap: "20px" }}>
        <div>
          <label>Size:&nbsp;</label>
          <select
            value={selectedSize}
            onChange={(e) => setSelectedSize(e.target.value)}
          >
            <option value="All">All</option>
            {sizes.map((size) => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Color:&nbsp;</label>
          <select
            value={selectedColor}
            onChange={(e) => setSelectedColor(e.target.value)}
          >
            <option value="All">All</option>
            {colors.map((color) => (
              <option key={color} value={color}>
                {color}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Grid */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
        }}
      >
        {filteredTshirts.map((tshirt) => (
          <Link
            key={tshirt.id}
            href={`/tshirt/${tshirt.id}`}
            style={{
              textDecoration: "none",
              color: "#333",
              border: "1px solid #ddd",
              borderRadius: "8px",
              overflow: "hidden",
              backgroundColor: "#fff",
            }}
          >
            <Image
              src={tshirt.image}
              alt={tshirt.name}
              style={{ width: "100%", height: "300px", objectFit: "cover" }}
            />
            <div style={{ padding: "10px" }}>
              <h4 style={{ margin: "0 0 8px" }}>{tshirt.name}</h4>
              <p style={{ margin: 0 }}>${tshirt.price.toFixed(2)}</p>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

export default Products;
