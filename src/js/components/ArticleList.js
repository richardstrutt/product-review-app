import React from "react";
import { Link } from "react-router";
import Rating from "../components/Rating";

// Show  products components
export default (props) => {
    let limitTo = props.itemLimit;

    return (
        <div class="article-container">
            {props.searchProducts.map((item, i) => {
                if (i < limitTo) {
                    let name = item.productName;
                    return (
                        <article key={i} class="article">
                            <h3>{i+1}. {item.productName}</h3>
                            <p class="comment">{item.comments.substr(0, 100)}...<span class="user"> - {item.name}</span></p>
                            <Rating rating={item.rating} />
                            <Link to={`/product/${name}`} class="btn">See Reviews</Link>
                        </article>
                    );
            }})}
        </div>
    );
}
