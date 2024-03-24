import "./App.scss";

function App() {
  //changing.....
  return (
    <div className="App">
      <div className="gi">
        <div className="profile_img"></div>
        <div className="call_inf">
          <div className="socialMedia">
            <img alt="" id="telegram" />
            <img alt="" id="instagram" />
            <img alt="" id="linkedin" />
            <img alt="" id="gitHub" />
          </div>
          <div className="ael">
            <div className="p">
              <span className="">09130322660</span>
              <img alt="dsds" id="phoneImg" />
            </div>
            <div className="p">
              <span className="">yousef.emaami@gmail.com</span>
              <img alt="dsds" id="emailImg" />
            </div>
            <div className="p">
              <span className="">اصفهان </span>
              <img alt="dsds" id="locationImg" />
            </div>
          </div>
        </div>
      </div>
      <div className="di">
        <div className="p" id="p1">
          <p className="topic">مهارت ها</p>
          <div className="items">
            <div className="item" id="item1 ">
              <div className="img react"></div>
              <div className="inf">
                <p className="title">Reactjs</p>
                <div className="rate">
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                </div>
                <p> به مدت شش ماه در این حوزه فعالیت داشته</p>
              </div>
            </div>
            <div className="item" id="item2">
              <div className="img node"></div>
              <div className="inf">
                <p className="title">Nodejs</p>
                <div className="rate">
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                </div>
                <p>به مدت شش ماه در این حوزه فعالیت داشته </p>
              </div>
            </div>

            <div className="item" id="item3">
              <div className="img typescript"></div>
              <div className="inf">
                <p className="title">TypeScript</p>
                <div className="rate">
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                </div>
                <p>به مدت یک ماه در این حوزه فعالیت داشته </p>
              </div>
            </div>
            <div className="item" id="item4">
              <div className="img docker"></div>
              <div className="inf">
                <p className="title">Docker</p>
                <div className="rate">
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                  <img alt="" />
                </div>
                <p>به مدت یک ماه در این حوزه فعالیت داشته </p>
              </div>
            </div>
          </div>
        </div>
        <div className="p">
          <p className="topic">پروژه ها</p>
          <div className="items">
            <div className="item" id="item1">
              <div className="img projectImg"></div>
              <div className="inf">
                <p className="title">resume</p>

                <p>مهارت های استفاده شده</p>
                <p>reactjs , sass , figma </p>
                <a target="_blank" href="https://github.com/yousefem/resum">
                  بیش تر
                </a>
              </div>
            </div>
            <div className="item" id="item2">
              <div className="img projectImg"></div>
              <div className="inf">
                <p className="title">title</p>

                <p>
                  من چهار سال &nbsp;<a href="http://google.com">بیش تر</a>
                </p>
              </div>
            </div>

            <div className="item" id="item3">
              <div className="img projectImg"></div>
              <div className="inf">
                <p className="title">title</p>

                <p>
                  من چهار سال 
                </p>
                <a href="http://google.com">بیش تر</a>
              </div>
            </div>
            <div className="item " id="item4">
              <div className="img projectImg"></div>
              <div className="inf">
                <p className="title">title</p>

                <p>
                  من چهار سال &nbsp;<a href="http://google.com">بیش تر</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
