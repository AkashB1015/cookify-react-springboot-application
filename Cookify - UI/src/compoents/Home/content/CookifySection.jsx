import React from "react";
import { Link } from "react-router-dom";
import "../../../index.css";

import CookifyVideo from "../../../assets/Cookify.mp4";

export default function CookifySection() {
    return (
        <div className="cookify-video-container">

            <video className="cookify-video" autoPlay loop muted playsInline  >
                <source src={CookifyVideo} type="video/mp4" />
            </video>

            <div className="cookify-overlay"></div>

            <div className="cookify-content text-center">
                <h1 className="cookify-title">Welcome to Cookify</h1>
                <p className="cookify-tagline">
                    Freshly baked delights, delivered with love.
                </p>

                <div className="d-flex justify-content-center mt-4">
                    <Link to="/store">
                        <button className="btn cookify-btn me-3">Cookie Store</button>
                    </Link>
                    <Link to="/login">
                        <button className="btn cookify-btn-outline">Sign Up</button>
                    </Link>
                </div>
            </div>

        </div>
    );
}
