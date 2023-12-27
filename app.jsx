const App = () => {
    return (
      <>
          <img id="logo" src="logo.png" alt="logo" />
          <div id="header">
              <p>Home</p>
              <p>Product</p>
              <p>Company</p>
              <p>Contact</p>
          </div>
          <div id="headerImage">
              <p>Header image</p>
          </div>
          <div id="main">
            <div id="about">
              <h1>About</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam harum unde provident aliquid perferendis ex nemo dolorem totam commodi!</p>
            </div>
            <div id="company">
              <h1>Company</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam harum unde provident aliquid perferendis ex nemo dolorem totam commodi!</p>
            </div>
            <div id="services">
              <h1>Services</h1>
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellat quisquam harum unde provident aliquid perferendis ex nemo dolorem totam commodi!</p>
            </div>
          </div>
          <div id="footer">
            <div id="container">
            <div id="content">
            <h1>Content</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto quod ab maxime, fugiat nihil, explicabo architecto eveniet soluta nesciunt ad odit, natus sit laborum quaerat ullam dolorum eligendi asperiores molestias!</p>
            </div>
            <div id="subHeader">
              <h3>Sub header</h3>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel eligendi culpa ex quisquam deserunt amet saepe sed fugit fuga, esse expedita dolorum dolores temporibus iusto, assumenda nobis repudiandae sint doloremque minus et nostrum maxime facere provident a. Possimus excepturi assumenda voluptas, nihil quisquam perferendis a voluptate, adipisci sapiente eius unde.</p>
            </div>
            </div>
            <div id="navigation">
              <h3>Navigation</h3>
              <div id="navigationText">
              <p>Home</p>
              <p>Product</p>
              <p>Company</p>
              <p>Contact</p>
              </div>
            </div>
          </div>
      </>
    )
  }

  ReactDOM.createRoot(document.getElementById('app')).render(<App />);