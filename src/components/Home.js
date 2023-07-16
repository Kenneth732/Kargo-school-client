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

                        <figure class="hero-banner">

                            <div className="img-holder one cix" >
                                <img src="./assets/images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
                            </div>


                            <div class="img-holder two ccv" >
                                <img src="./assets/images/hero-banner-2.jpg" width="240" height="370" alt="hero banner" class="img-cover" />
                            </div>

                            <img src="./assets/images/hero-shape-1.svg" width="380" height="190" alt="" class="shape hero-shape-1" />

                            <img src="./assets/images/hero-shape-2.png" width="622" height="551" alt="" class="shape hero-shape-2" />

                        </figure>
                    </div>
                </section>
            </article>
        </main>
    )
}