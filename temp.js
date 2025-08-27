`Pagination-12345`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
const ProductCard= ({image,title})=>{
  return (
    <div>
    </div>
  )
}
export default ProductCard

import { useEffect, useState } from 'react';
import './styles.css'
import ProductCard from './ProductCard.js'
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";
// "total": 194,
//   "skip": 0,
//     "limit": 2
const PAGE_SIZE = 10;

const Pagination = () => {

  const [products, setProducts] = useState([])
  const [currP, setCurrP] = useState(0)

  const getProducts = async () => {
    const response = await fetch('https://dummyjson.com/products?limit=100')
    const products = await response.json()
    // console.log(products)
    setProducts(products.products)
  }

  useEffect(() => {
    getProducts()
  }, [])
  const totalItems = products.length
  const totalPages = Math.ceil(totalItems / PAGE_SIZE)
  const start = currP * PAGE_SIZE
  const end = currP + PAGE_SIZE

  const clickHandler = (val) => {
    console.log(val)
    setCurrP(val)
  }

  const prevHandler = () => {
    setCurrP(prev => prev - 1)
  }
  const nextHandler = () => {
    setCurrP(prev => prev + 1)
  }

  return (
    <div>
      <h1>Pagination</h1>
      <button disabled={currP === 0} onClick={() => prevHandler()}><FiChevronsLeft /></button>
      <button disabled={currP === totalPages - 1} onClick={() => nextHandler()}><FiChevronsRight /></button>
      {
        [...Array(totalPages).keys()].map((a, i) => {
          return (<button className='num' onClick={() => clickHandler(i)} >{a + 1}</button>)
        })
      }

      <div className='wrapper' >
        {
          products.slice(start, end).map(a => {
            return (
              <div className='inner-wrapper'>
                <img src={a.images[0]} width='100px' />
                <span>{a.title}</span>
              </div>
            )
          })
        }
      </div>


    </div>
  )
};
export default Pagination;

/* 
.wrapper{
    display: flex;
    flex-wrap: wrap;
    gap:1rem;
}

.inner-wrapper{
    width:250px;
    height:150px;
    border: 1px solid black;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
}

.num{
    padding:5px;
    margin: 10px 5px;
} 
*/


`Pagination- 1 of 10`////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


import { useEffect, useState } from "react";
import "./styles.css";
import { FiChevronsLeft, FiChevronsRight } from "react-icons/fi";

const PAGE_SIZE = 10;

export default function Pagination() {
  const [products, setProducts] = useState([]);
  const [page, setPage] = useState(0); // 0-based

  useEffect(() => {
    (async () => {
      const res = await fetch("https://dummyjson.com/products?limit=100");
      const data = await res.json();
      setProducts(data.products || []);
    })();
  }, []);

  const totalPages = Math.ceil(products.length / PAGE_SIZE);
  const start = page * PAGE_SIZE;
  const end = start + PAGE_SIZE;

  const prev = () => setPage((p) => Math.max(0, p - 1));
  const next = () => setPage((p) => Math.min(totalPages - 1, p + 1));

  const onPageInput = (e) => {
    const n = parseInt(e.target.value, 10);
    if (Number.isNaN(n)) return;
    // input is 1-based; clamp to range
    const clamped = Math.min(Math.max(1, n), totalPages || 1);
    setPage(clamped - 1);
  };

  if (totalPages === 0) return <div>Loading…</div>;

  return (
    <div>
      <h1>Pagination</h1>

      <button onClick={prev} disabled={page === 0}>
        <FiChevronsLeft />
      </button>

      <span>
        {" "}Page{" "}
        <input
          type="number"
          value={page + 1}
          onChange={onPageInput}
          min={1}
          max={totalPages}
          style={{ width: 60, textAlign: "center" }}
        />{" "}
        of {totalPages}
      </span>

      <button onClick={next} disabled={page >= totalPages - 1}>
        <FiChevronsRight />
      </button>

      <div className="wrapper">
        {products.slice(start, end).map((p) => (
          <div className="inner-wrapper" key={p.id}>
            <img src={p.images[0]} width="100" alt={p.title} />
            <span>{p.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
}






`DEBOUNCE`//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

// useDebounce.js
import { useState, useEffect } from "react";

/**
 * Custom hook to debounce any fast-changing value
 * @param value - the value we want to debounce (e.g., search input)
 * @param delay - debounce delay in ms
 * @returns debouncedValue - only updates after user stops typing
 */
export function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    // Set a timer that updates debouncedValue after delay
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    // Cleanup the timer if value changes before delay finishes
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);

  return debouncedValue;
}



import React, { useState, useEffect } from "react";
import { useDebounce } from "./useDebounce";

function SearchBox() {
  const [query, setQuery] = useState("");
  
  // Apply debounce hook with 500ms delay
  const debouncedQuery = useDebounce(query, 500);

  useEffect(() => {
    if (debouncedQuery) {
      // Only call API when debouncedQuery changes
      console.log("API call with:", debouncedQuery);
    }
  }, [debouncedQuery]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
    </div>
  );
}

export default SearchBox;











`Tabs`/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
import Tabs from "./Tabs";

export default function App() {
    const tabsData = [
        { title: "Tab 1", content: "This is the content of Tab 1" },
        { title: "Tab 2", content: "This is the content of Tab 2" },
        { title: "Tab 3", content: "This is the content of Tab 3" }
    ];
    
    return <Tabs tabs={tabsData} />;
}


import React, { useState } from 'react';
import './styles.css'

const Box = ({ data }) => {

    return (
        <div>
            {data.content ? data.content : "No content available"}
        </div>
    )
}

function Tabs({ tabs }) {
    const [state, setState] = useState(0)
    let activeContent = tabs[state]
    // console.log(tabs)
    console.log(activeContent)
    const handleClick = (val) => setState(val)

    return (
        <div>
            {
                tabs.length < 1
                    ?
                    (<span>No tabs available</span>)
                    :
                    (
                        <>
                            <div>
                                {tabs.map((a, index) => (<button onClick={(e) => handleClick(index)} key={a.title}>{a.title ? a.title : `Tab ${index + 1}`}</button>))}

                            </div>
                            <div>
                                <Box data={activeContent} />
                            </div>
                        </>
                    )
            }

            {/* Implement the Tabs component logic here */}
        </div>
    );
}

export default Tabs;

