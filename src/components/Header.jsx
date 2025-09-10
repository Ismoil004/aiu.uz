import React, {useState} from 'react';
import "./Header.css"


function Header() {


    return (
        <header>
         <div className={"headerTop"}>
             <div className={"wrapper"}>
          <div className={"headerTopText"}>
              <a href="mailto:info@uz">info@oxu.uz</a>
              <span className={"headerTopSpan"}>Cooperative email</span>
          </div>
                 <div className={"headerTopBorder"}></div>
                 <div className={"headerTopText"}>
                     <a href="tel:+998500305876">+998 50 030 58 76</a>
                     <span className={"headerTopSpan"}>Hotline for applicants</span>
                 </div>
                 <div className={"headerTopBorder"}></div>
                 <div className={"headerTopText"}>
                     <a href="mailto:info@uz">Contacts</a>
                     <span className={"headerTopSpan"}>Address and telephone</span>
                 </div>   <div className={"headerTopBorder"}></div>
                 <div className={"headerTopBorder"}></div>
                 <div className={"headerTopText"}>
                     <a href="https://student.oxu.uz/">Student HEMIS</a>
                     <span className={"headerTopSpan"}>Student information system</span>
                 </div>   <div className={"headerTopBorder"}></div>
                 <div className={"headerTopText"}>
                     <a  href="https://hemis.oxu.uz/">HEMIS</a>
                     <span className={"headerTopSpan"}>University management system</span>
                 </div>
                 <div className={"headerTopBorder"}></div>
                             <div/>
                 <div className={"imgs"}>
                     <div className={"headerTopText2"}>
                         <a href="https://www.facebook.com/share/1UaPBeZp76/?mibextid=wwXIfr">
                             <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">

                                 <path data-v-4b8a97f0=""
                                       d="M19.554 8.8756H21.5015V5.4836C21.1655 5.43737 20.01 5.33337 18.6642 5.33337C15.8562 5.33337 13.9327 7.0996 13.9327 10.3458V13.3334H10.834V17.1254H13.9327V26.6667H17.7318V17.1263H20.7051L21.1771 13.3343H17.7309V10.7218C17.7318 9.62582 18.0269 8.8756 19.554 8.8756Z"
                                       fill="white"></path>
                             </svg>
                         </a>


                     </div>
                     <div className={"headerTopBorder"}></div>
                     <div className={"headerTopText2"}>
                         <a href="https://www.instagram.com/aiu.uzb/">
                             <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32"
                                  fill="none" xmlns="http://www.w3.org/2000/svg">
                                 <path data-v-4b8a97f0=""
                                       d="M16.0031 10.5226C12.9782 10.5226 10.5293 12.9741 10.5293 15.9964C10.5293 19.0213 12.9809 21.4702 16.0031 21.4702C19.028 21.4702 21.4769 19.0186 21.4769 15.9964C21.4769 12.9715 19.0253 10.5226 16.0031 10.5226V10.5226ZM16.0031 19.5493C14.0395 19.5493 12.4502 17.959 12.4502 15.9964C12.4502 14.0337 14.0404 12.4435 16.0031 12.4435C17.9657 12.4435 19.556 14.0337 19.556 15.9964C19.5569 17.959 17.9666 19.5493 16.0031 19.5493V19.5493Z"
                                       fill="white"></path>
                                 <path data-v-4b8a97f0=""
                                       d="M20.3971 5.40136C18.4345 5.30981 13.5731 5.31425 11.6087 5.40136C9.88246 5.48225 8.35979 5.89914 7.13223 7.12669C5.08068 9.17825 5.3429 11.9427 5.3429 15.9969C5.3429 20.1462 5.11179 22.8467 7.13223 24.8671C9.19179 26.9258 11.9962 26.6565 16.0025 26.6565C20.1127 26.6565 21.5313 26.6591 22.9847 26.0965C24.9607 25.3294 26.4522 23.5631 26.598 20.3907C26.6905 18.4271 26.6851 13.5667 26.598 11.6022C26.422 7.85736 24.4122 5.58625 20.3971 5.40136V5.40136ZM23.5038 23.5098C22.1589 24.8547 20.2931 24.7347 15.9767 24.7347C11.5322 24.7347 9.75001 24.8005 8.44957 23.4965C6.95179 22.0058 7.2229 19.612 7.2229 15.9827C7.2229 11.0716 6.7189 7.53469 11.6478 7.28225C12.7802 7.24225 13.1136 7.22892 15.9642 7.22892L16.0042 7.25558C20.7411 7.25558 24.4576 6.75958 24.6807 11.6876C24.7313 12.812 24.7429 13.1498 24.7429 15.996C24.742 20.3889 24.8256 22.1818 23.5038 23.5098V23.5098Z"
                                       fill="white"></path>
                                 <path data-v-4b8a97f0=""
                                       d="M21.6951 11.5859C22.4016 11.5859 22.9742 11.0133 22.9742 10.3068C22.9742 9.60039 22.4016 9.02771 21.6951 9.02771C20.9887 9.02771 20.416 9.60039 20.416 10.3068C20.416 11.0133 20.9887 11.5859 21.6951 11.5859Z"
                                       fill="white"></path>
                             </svg>

                         </a>
                     </div>
                     <div className={"headerTopBorder"}></div>
                     <div className={"headerTopText2"}>
                         <a href="https://t.me/AzMU_UZ">
                             <svg className="mx-1" data-v-4b8a97f0="" width="26" height="26" viewBox="0 0 32 32" fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                 <path data-v-4b8a97f0=""
                                       d="M13.7048 18.8275L13.3519 23.7911C13.8568 23.7911 14.0755 23.5742 14.3377 23.3137L16.7048 21.0515L21.6097 24.6435C22.5093 25.1449 23.143 24.8809 23.3857 23.816L26.6053 8.72975L26.6061 8.72886C26.8915 7.39908 26.1253 6.87908 25.2488 7.2053L6.32436 14.4506C5.03281 14.952 5.05236 15.672 6.10481 15.9982L10.943 17.5031L22.1813 10.4711C22.7101 10.1209 23.191 10.3146 22.7955 10.6649L13.7048 18.8275Z"
                                       fill="white"></path>
                             </svg>
                         </a>

                     </div>
                     <div className={"headerTopBorder"}></div>
                     <div className={"headerTopText2"}>
                         <a href="https://youtube.com/@asiaintrntnluniversityofficial?si=XChd7BLqJXx6ODO-">
                             <svg className="mx-1" data-v-4b8a97f0="" width="24" height="24" viewBox="0 0 24 24"
                                  fill="none"
                                  xmlns="http://www.w3.org/2000/svg">
                                 <path data-v-4b8a97f0=""
                                       d="M19.0155 3.50851H4.98449C2.23163 3.50851 0 5.74015 0 8.49301V15.507C0 18.2599 2.23163 20.4915 4.98449 20.4915H19.0155C21.7684 20.4915 24 18.2599 24 15.507V8.49301C24 5.74015 21.7684 3.50851 19.0155 3.50851ZM15.6445 12.3413L9.08177 15.4713C8.9069 15.5547 8.7049 15.4272 8.7049 15.2335V8.77778C8.7049 8.5813 8.91221 8.45396 9.08744 8.54278L15.6502 11.8685C15.8453 11.9673 15.8419 12.2472 15.6445 12.3413Z"
                                       fill="white"></path>
                             </svg>
                         </a>

                     </div>
                     <div className={"headerTopBorder"}></div>
                     <div className={"headerTopText2"}>
                         <a href="https://wa.me/998500305876">
                             <svg fill="#ffffff" width="24" height="24" viewBox="0 0 256 256" id="Flat"
                                  xmlns="http://www.w3.org/2000/svg">
                                 <path
                                     d="M128.00049,28A100.02594,100.02594,0,0,0,41.11475,177.53908l-9.0044,31.51661a11.99971,11.99971,0,0,0,14.835,14.834l31.5166-9.00391A100.00677,100.00677,0,1,0,128.00049,28Zm0,192a91.87082,91.87082,0,0,1-46.95264-12.86719,3.99494,3.99494,0,0,0-3.14355-.4082l-33.15723,9.47363a3.99979,3.99979,0,0,1-4.94434-4.94531l9.47266-33.15625a4.00111,4.00111,0,0,0-.4082-3.14355A92.01077,92.01077,0,1,1,128.00049,220Zm50.51123-73.457-20.45947-11.69141a12.01054,12.01054,0,0,0-12.12745.12891l-13.80664,8.28418a44.04183,44.04183,0,0,1-19.38232-19.38281l8.28369-13.80664a12.0108,12.0108,0,0,0,.12891-12.127l-11.69092-20.46A10.91584,10.91584,0,0,0,100,72a32.00811,32.00811,0,0,0-32,31.88086A84.001,84.001,0,0,0,151.999,188h.12012A32.00842,32.00842,0,0,0,184,156,10.913,10.913,0,0,0,178.51172,146.543ZM152.10791,180h-.1084A75.99972,75.99972,0,0,1,76,103.8926,23.997,23.997,0,0,1,100,80a2.89975,2.89975,0,0,1,2.51172,1.457L114.20264,101.918a4.00418,4.00418,0,0,1-.043,4.042l-9.38916,15.64844a3.9987,3.9987,0,0,0-.21826,3.69824,52.04112,52.04112,0,0,0,26.1416,26.1416,3.99707,3.99707,0,0,0,3.69873-.21875L150.04,141.84084a4.006,4.006,0,0,1,4.043-.04394l20.46045,11.69238A2.89712,2.89712,0,0,1,176,156,23.99725,23.99725,0,0,1,152.10791,180Z"></path></svg>
                         </a>
                     </div>
                 </div>

             </div>
         </div>
            <div className={"headerBottom"}>
                <div className={"wrapper2"}>
                    <div className={"headerBottomText"}>
                        <a className={"headerBottomText2"} href="https://library.oxu.uz">Library</a>
                        <a className={"headerBottomText2"} >News & Events</a>
                        <a className={"headerBottomText2"} href="https://int.vacancy.oxu.uz/">Career @ OXU</a>
                        <a className={"headerBottomText2"} href="https://aiu.uz/international-form">Apply Now</a>
                    </div>
                    <div className={"d-flex align-items-center gap-5 headerDiv"}>
                        <div className={"form-header2"}>
                            <button className={"headerButton"}>
                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width={24} height={24}>
                                    <g opacity={0.7}>
                                        <path d="M16.84 14.8446C17.5973 13.7072 18.0009 12.3711 18 11.0046C18.0021 9.44672 17.4844 7.93263 16.5289 6.70213C15.5733 5.47162 14.2347 4.59504 12.7248 4.21118C11.2149 3.82731 9.62007 3.95812 8.1929 4.58287C6.76573 5.20762 5.58776 6.29062 4.84552 7.66037C4.10328 9.03011 3.83919 10.6083 4.09508 12.1451C4.35096 13.6819 5.11219 15.0894 6.25823 16.1447C7.40426 17.2 8.8696 17.8429 10.4222 17.9715C11.9748 18.1001 13.526 17.7071 14.83 16.8546L18 20.0046L20 18.0046L16.84 14.8446ZM6 11.0046C6 10.0157 6.29325 9.04904 6.84266 8.22679C7.39206 7.40455 8.17296 6.76368 9.08659 6.38525C10.0002 6.00681 11.0056 5.90779 11.9755 6.10072C12.9454 6.29364 13.8363 6.76985 14.5355 7.46911C15.2348 8.16837 15.711 9.05929 15.9039 10.0292C16.0969 10.9991 15.9978 12.0044 15.6194 12.9181C15.241 13.8317 14.6001 14.6126 13.7779 15.162C12.9556 15.7114 11.9889 16.0046 11 16.0046C9.67392 16.0046 8.40215 15.4779 7.46447 14.5402C6.52679 13.6025 6 12.3307 6 11.0046Z" fill="white"></path>
                                    </g>
                                </svg>
                            </button>
                            <input type="text" placeholder={"Search..."} className={"input-search"}/>
                        </div>
                        <div className="pers">
                            Personal Cabinet
                            <svg className="img-gg" viewBox="64 64 896 896" width="1em" height="1em" fill="currentColor">
                                <path d="M884 256h-75c-5.1 0-9.9 2.5-12.9 6.6L512 654.2 227.9 262.6c-3-4.1-7.8-6.6-12.9-6.6h-75c-6.5 0-10.3 7.4-6.5 12.7l352.6 486.1c12.8 17.6 39 17.6 51.7 0l352.6-486.1c3.9-5.3.1-12.7-6.4-12.7z"></path>
                            </svg>

                            <div className="dropdown-menu2">
                                <a href="https://aiu.uz/login">Enter Profile</a>
                            </div>
                        </div>


                    </div>
                </div>
            </div>
        </header>

    );
}

export default Header;