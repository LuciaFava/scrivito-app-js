import * as React from "react";
import * as Scrivito from "scrivito";
import Image1 from "../../assets/images/image1.png";
import Image293 from "../../assets/images/image293.png";
import Image294 from "../../assets/images/image294.png";
import Image295 from "../../assets/images/image295.png";
import Image296 from "../../assets/images/image296.png";
import Image297 from "../../assets/images/image297.png";
import Image298 from "../../assets/images/image298.png";
import Image299 from "../../assets/images/image299.png";
import Image300 from "../../assets/images/image300.png";
import Image301 from "../../assets/images/image301.png";
import Image302 from "../../assets/images/image302.png";
import Image303 from "../../assets/images/image303.png";
import Image304 from "../../assets/images/image304.png";

Scrivito.provideComponent("Homepage", ({ page }) => (
  <div id="header"> <br /><br />
    <Scrivito.ContentTag tag="div" content={page} attribute="body" />
    <div className="container">
      <div className="d-flex flex-column flex-md-row align-items-center" id="navbar">
      <img className="my-0 mr-md-auto" src={ require("../../assets/logo.png") } />
        <nav className="my-2 my-md-0 mr-md-3 navbar-font">
          <a className="p-2 text-dark log-in" href="#">Your Pricing</a>
          <a className="p-2 text-dark pricing" href="#">Log In</a>
        </nav>
        <a id="btn-1254" href="#" target="_self"><span>Create An Account</span></a>
      </div>
    </div>
      <Scrivito.ContentTag content={ page } attribute="header" /><br /><br />
      <div className="container" id="main">
      <div className="row hero-content pt-lg-6 pb-lg-6">
          <div className="col-md-6 col-sm-12">
            <h1 className="text-md-left title mb-4 mt-5">Post Your Jobs To 300+ Job Sites In Less 
                Than 5 Minutes</h1>
            <p className="text-md-left">• &nbsp; &nbsp; Post Jobs To Local, National Niche Sites With 1 Click</p>
            <p className="text-md-left">• &nbsp; &nbsp;Attract Local Candidates</p>
            <p className="text-md-left">• &nbsp; &nbsp;Advertise Any Vacancy</p>
            <p className="text-md-left">• &nbsp; &nbsp;Our "Ninja" Engine Will Guarantee <br /> &nbsp; &nbsp; &nbsp;Premium Visibility On The Best Job Sites </p>
            <div><a className="btn btn-success" href="#" target="_self">Post Your Jobs</a></div>
          </div>
          <div className="col-md-6 col-sm-12 text-center" id="boxes1">
            <div id="boxes">
                <div id="box29">
                  <div id="color-overlay"></div>
                  <div className="image image-container" id="image1"><img src={ Image1 } /></div>
                </div>
                <div id="box-80">
                  <div id="ls-color-overlay"></div>
                  <div className="image image-container" id="image293"><img src={ Image293 } /></div>
                </div>
                <div id="box-81">
                  <div id="box81-color-overlay"></div>
                  <div className="image image-container" id="image294"><img src={ Image294 } /></div>
                </div>
                <div id="box-82">
                  <div id="box82-color-overlay"></div>
                  <div className="image image-container" id="image295"><img src={ Image295 } /></div>
                </div>
                <div id="box-83">
                  <div id="box83-color-overlay"></div>
                  <div className="image image-container" id="image296"><img src={ Image296 } /></div>
                </div>
                <div id="box-84">
                  <div id="box84-color-overlay"></div>
                  <div className="image image-container" id="image297"><img src={ Image297 } /></div>
                </div>
                <div id="box-85">
                  <div id="box85-color-overlay"></div>
                  <div className="image image-container" id="image298"><img src={ Image298 } /></div>
                </div>
                <div id="box-86">
                  <div id="box86-color-overlay"></div>
                  <div className="image image-container" id="image299"><img src={ Image299 } /></div>
                </div>
                <div id="box-87">
                  <div id="box87-color-overlay"></div>
                  <div className="image image-container" id="image300"><img src={ Image300 } /></div>
                </div>
                <div id="box-88">
                  <div id="box88-color-overlay"></div>
                  <div className="image image-container" id="image301"><img src={ Image301 } /></div>
                </div>
                <div id="box-89">
                  <div id="box89-color-overlay"></div>
                  <div className="image image-container" id="image302"><img src={ Image302 } /></div>
                </div>
                <div id="box-90">
                  <div id="box-90-color-overlay"></div>
                  <div className="image image-container" id="image303"><img src={ Image303 } /></div>
                </div>
                <div id="box-91">
                  <div id="box-91-color-overlay"></div>
                  <div className="image image-container" id="image304"><img src={ Image304 }/></div>
                </div>
            </div>
          </div>

        </div>
      </div>
      <div id="footer">Footer</div>
  </div>
));
