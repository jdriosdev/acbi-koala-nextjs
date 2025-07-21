"use client";
import Image from "next/image";
import styles from "./page.module.css";
import { useEffect, useState } from "react";

export default function Home() {
  const items = [
    { id: 1, content: "Slide 1", color: "#e57373" },
    { id: 2, content: "Slide 2", color: "#64b5f6" },
    { id: 3, content: "Slide 3", color: "#81c784" },
    { id: 4, content: "Slide 4", color: "#ffd54f" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % items.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [items.length]);

  //styles

  const carouselStyle = {
    maxWidth: "600px",
    overflow: "hidden",
    position: "relative",
    height: "400px",
    borderRadius: "10px",
    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
    backgroundColor: "rgba(255,255,255,1)",
    margin: "0 auto 16px",
  };

  const trackStyle = {
    display: "flex",
    width: `${items.length * 100}%`,
    transform: `translateX(-${currentIndex * (100 / items.length)}%)`,
    transition: "transform 0.5s ease-in-out",
  };

  const slideStyle = {
    width: `${100 / items.length}%`,
    flexShrink: 0,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    fontSize: "2rem",
    fontWeight: "bold",
    color: "white",
  };

  const dotContainerStyle = {
    position: "absolute",
    bottom: "10px",
    left: "50%",
    transform: "translateX(-50%)",
    display: "flex",
    gap: "8px",
  };

  const dotStyle = (active: boolean) => ({
    width: "10px",
    height: "10px",
    borderRadius: "50%",
    backgroundColor: active ? "#fff" : "#999",
  });

  const containerStyle: React.CSSProperties = {
    border: "1px solid #ddd",
    borderRadius: "12px",
    padding: "24px",
    maxWidth: "600px",
    margin: "0 auto",
    backgroundColor: "#f9f9f9",
    fontFamily: "Arial, sans-serif",
  };

  const titleStyle: React.CSSProperties = {
    fontSize: "28px",
    marginBottom: "12px",
    color: "#2c3e50",
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: "18px",
    marginBottom: "16px",
    color: "#34495e",
  };

  const listStyle: React.CSSProperties = {
    paddingLeft: "20px",
    color: "#555",
  };

  return (
    <div>
      <div style={carouselStyle}>
        <div style={trackStyle}>
          {items.map((item) => (
            <div
              key={item.id}
              style={{ ...slideStyle, backgroundColor: item.color }}
            >
              {item.content}
            </div>
          ))}
        </div>
        {/* TODO: ADD IMAGE HERE */}
        <Image
          width={600}
          height={400}
          alt="discount"
          src="https://placehold.co/600x400"
        />
        <div style={dotContainerStyle}>
          {items.map((_, index) => (
            <div key={index} style={dotStyle(index === currentIndex)} />
          ))}
        </div>
      </div>

      <section style={containerStyle}>
        <h1 style={titleStyle}>Welcome to Koala Tshirts 🐨</h1>
        <p style={subtitleStyle}>
          Your go-to destination for fun, stylish, and comfy t-shirts delivered
          around Australia.
        </p>
        <ul style={listStyle}>
          <li>🌏 Based in Sydney, delivering nationwide</li>
          <li>👕 Unique, high-quality t-shirt designs</li>
          <li>🛒 Easy online shopping experience</li>
          <li>🚚 Fast and reliable delivery</li>
          <li>💳 Secure payment options</li>
        </ul>
      </section>
    </div>
  );
}
