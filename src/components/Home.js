import React from "react";

export default function Home() {
    return (
        <main>
            <article>
                <section class="section hero has-bg-image" id="home" aria-label="home" >
                    <div className="container">
                        <div className="hero-content">
                            <h1 class="h1 section-title">
                                The Best Program to <span class="span">Enroll</span> for Exchange
                            </h1>
                            <p class="hero-text">
                                Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                            </p>

                            <a href="#" class="btn has-before">
                                <span class="span">Find courses</span>

                                <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                            </a>
                        </div>
                    </div>
                </section>
            </article>
        </main>
    )
}