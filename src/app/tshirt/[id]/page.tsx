"use client";

import { useParams } from "next/navigation";
import { TSHIRTS_DATA } from "../../../data/data";
import { notFound } from "next/navigation";

export default function Tshirt() {
  const params = useParams();

  const tshirt = TSHIRTS_DATA.find((t) => t.id === parseInt(params.id, 10));

  if (!tshirt) return notFound();

  return (
    <main style={{ padding: "40px", fontFamily: "Arial, sans-serif" }}>
      <h1>{tshirt.name}</h1>
      <div style={{ display: "flex", gap: "40px", marginTop: "20px" }}>
        <img
          src={tshirt.image}
          alt={tshirt.name}
          style={{ width: "400px", borderRadius: "10px" }}
        />
        <div>
          <p>
            <strong>Description:</strong> {tshirt.description}
          </p>
          <p>
            <strong>Color:</strong> {tshirt.color}
          </p>
          <p>
            <strong>Size:</strong> {tshirt.size}
          </p>
          <p>
            <strong>Price:</strong> ${tshirt.price.toFixed(2)}
          </p>
        </div>
      </div>
    </main>
  );
}
