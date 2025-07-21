import React from "react";

function About() {
  const sectionStyle: React.CSSProperties = {
    maxWidth: "800px",
    margin: "0 auto",
    padding: "40px 20px",
    fontFamily: "Arial, sans-serif",
    lineHeight: "1.6",
  };

  const headingStyle: React.CSSProperties = {
    fontSize: "32px",
    marginBottom: "20px",
    color: "#2c3e50",
  };

  const subheadingStyle: React.CSSProperties = {
    fontSize: "24px",
    marginTop: "30px",
    marginBottom: "10px",
    color: "#34495e",
  };

  return (
    <main style={sectionStyle}>
      <h1 style={headingStyle}>About Koala Tshirts</h1>

      <section>
        <h2 style={subheadingStyle}>📜 Our History</h2>
        <p>
          Koala Tshirts was founded in 2020 in the heart of Sydney with a simple
          mission: to create fun, stylish, and high-quality t-shirts that
          represent the Aussie spirit. Starting as a small local project between
          a couple of friends, the brand quickly gained popularity thanks to its
          iconic koala designs and commitment to comfort and sustainability.
        </p>
        <p>
          From weekend markets to a full-fledged online store, Koala Tshirts has
          grown into a proudly Australian-owned business, delivering smiles and
          style all across the country.
        </p>
      </section>

      <section>
        <h2 style={subheadingStyle}>🏢 Company Structure</h2>
        <p>
          Our company operates with a lean and efficient structure to stay agile
          and focused on creativity. Here's how we’re organized:
        </p>
        <ul>
          <li>
            <strong>Founders:</strong> Oversee brand vision, partnerships, and
            high-level operations.
          </li>
          <li>
            <strong>Design Team:</strong> Focused on creating original t-shirt
            concepts, illustrations, and packaging.
          </li>
          <li>
            <strong>Production Team:</strong> Handles sourcing, printing, and
            quality control of every t-shirt.
          </li>
          <li>
            <strong>Sales & Marketing:</strong> Runs campaigns, social media,
            and customer outreach across Australia.
          </li>
          <li>
            <strong>Customer Support:</strong> Assists customers with questions,
            returns, and special orders.
          </li>
          <li>
            <strong>Delivery Network:</strong> Ensures fast and reliable
            shipping through local and national logistics partners.
          </li>
        </ul>
      </section>
    </main>
  );
}

export default About;
