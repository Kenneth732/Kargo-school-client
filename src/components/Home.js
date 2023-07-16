import React from "react";

export default function Home() {
    return (
        <>
            <main>
                <article>
                    <section className="section hero has-bg-image" id="home" aria-label="home" >
                        <div className="container">
                            <div className="hero-content">
                                <h1 className="h1 section-title">
                                    The Best Program to <span class="span">Enroll</span> for Exchange
                                </h1>
                                <p className="hero-text">
                                    Excepteur sint occaecat cupidatat non proident sunt in culpa qui officia deserunt mollit.
                                </p>

                                <a href="#" className="btn has-before">
                                    <span className="span">Find courses</span>

                                    <ion-icon name="arrow-forward-outline" aria-hidden="true"></ion-icon>
                                </a>
                            </div>

                            <figure className="hero-banner">

                                <div className="img-holder one cix" >
                                    <img src="./assets/images/hero-banner-1.jpg" width="270" height="300" alt="hero banner" className="img-cover" />
                                </div>


                                <div className="img-holder two ccv" >
                                    <img src="./assets/images/hero-banner-2.jpg" width="240" height="370" alt="hero banner" class="img-cover" />
                                </div>

                                <img src="./assets/images/hero-shape-1.svg" width="380" height="190" alt="" className="shape hero-shape-1" />

                                <img src="./assets/images/hero-shape-2.png" width="622" height="551" alt="" className="shape hero-shape-2" />

                            </figure>
                        </div>
                    </section>
                </article>
            </main>
            <section className="section category" aria-label="category">
                <div className="container">
                    <p className="section-subtitle">Categories</p>

                    <h2 className="h2 section-title">
                        Online <span className="span">Classes</span> For Remote Learning.
                    </h2>

                    <p className="section-text">
                        Consectetur adipiscing elit sed do eiusmod tempor.
                    </p>

                    <ul className="grid-list">

                        <li>
                            <div className="category-card" style="--color: 170, 75%, 41%">

                                <div className="card-icon">
                                    <img src="./assets/images/category-1.svg" width="40" height="40" loading="lazy"
                                        alt="Online Degree Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Online Degree Programs</a>
                                </h3>

                                <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p>

                                <span className="card-badge">7 Courses</span>

                            </div>
                        </li>

                        <li>
                            <div className="category-card" style="--color: 351, 83%, 61%">

                                <div className="card-icon">
                                    <img src="./assets/images/category-2.svg" width="40" height="40" loading="lazy"
                                        alt="Non-Degree Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Non-Degree Programs</a>
                                </h3>

                                <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p>

                                <span className="card-badge">4 Courses</span>

                            </div>
                        </li>

                        <li>
                            <div className="category-card" style="--color: 229, 75%, 58%">

                                <div className="card-icon">
                                    <img src="./assets/images/category-3.svg" width="40" height="40" loading="lazy"
                                        alt="Off-Campus Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Off-Campus Programs</a>
                                </h3>

                                <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p>

                                <span className="card-badge">8 Courses</span>

                            </div>
                        </li>

                        <li>
                            <div className="category-card" style="--color: 42, 94%, 55%">

                                <div className="card-icon">
                                    <img src="./assets/images/category-4.svg" width="40" height="40" loading="lazy"
                                        alt="Hybrid Distance Programs" className="img" />
                                </div>

                                <h3 className="h3">
                                    <a href="#" className="card-title">Hybrid Distance Programs</a>
                                </h3>

                                <p className="card-text">
                                    Lorem ipsum dolor consec tur elit adicing sed umod tempor.
                                </p>

                                <span className="card-badge">8 Courses</span>

                            </div>
                        </li>

                    </ul>
                </div>
            </section>
        </>
    )
}