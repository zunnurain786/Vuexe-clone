import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import "./ProductsLayout.css";

const ProductsLayout = () => {
  const layoutRef = useRef();

  const handlePrint = useReactToPrint({
    content: () => layoutRef.current,
    documentTitle: "Products Layout",
  });

  return (
    <div>
      <div className="products-container" ref={layoutRef}>
        <header className="products-header"></header>
        <div className="products-body">
          <aside className="products-sidebar"></aside>
          <main className="products-content">
            <h2>Our Products</h2>
            <div className="products-grid">
              <div className="product-card">Product 1</div>
              <div className="product-card">Product 2</div>
              <div className="product-card">Product 3</div>
              <div className="product-card">Product 4</div>
            </div>
          </main>
        </div>
        <footer className="products-footer"></footer>
      </div>
      <button onClick={handlePrint} className="download-button">
        Download as PDF
      </button>
    </div>
  );
};

export default ProductsLayout;
