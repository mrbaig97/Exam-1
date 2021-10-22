import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import '../src/components/Images/index'
import Profile from '../src/components/Images/index';

function Name(props) {
  return (
    <>

      <div>
        <nav className="navbar navbar-expand-lg navbar navbar-dark bg-primary" >
          <div className="container-fluid">
            <a className="navbar-brand" href="/" id='nav'>facebook</a>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="/navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              </ul>
              <form className="d-flex">
                <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              </form>
            </div>
          </div>
        </nav>
      </div>

      <div className="card" id="cover" >
        <img src="https://source.unsplash.com/user/erondu/600x300" className="card-img-top" alt="..." id="cover2" />
        {/* <img src="" className="card-img-top" alt="..." id="cover3" /> */}
        <Profile/>

      </div>

      <br />
      <div className="card" id="card">
        <br />
        <div id="target" >
          <img id="profile" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Boys-profile-pics-806.jpg" className="img-fluid" alt=""></img>

           <span id = 'name'>{props.name} </span>
           <span id = 'publish'>{props.publish} </span>
           <span id = 'date'> {props.date}</span>
        </div>
        <br /> <br /> 
        <div className="card-body">
          <p className="card-text">Paragraphs are the building blocks of papers. Many students define paragraphs in terms of length: a paragraph is a group of at least five sentences, a paragraph is half a page long, etc. In reality, though, the unity and coherence of ideas among sentences is what constitutes a paragraph. A paragraph is defined as “a group of sentences or a single sentence that forms a unit”.</p>
        </div>
        <img id="post" src="https://cdn5.vectorstock.com/i/1000x1000/05/89/inspirational-and-motivational-quotes-vector-4830589.jpg" className="img-fluid" alt=""></img>
        <br/>
        <div className = 'container'>
        <div className="row">
    <div className="col-8"><a href = '#'>See Inshight</a></div>
    <div id ='btn' className="col-4"><button type="button" className="btn btn-primary">Boost Post</button></div>
  </div>
</div>
        <hr/>

      
    <hr/>

<div className = 'container'>      
  <div id= 'comment' className="row">
    <div className="col">
      Like
    </div>
    <div className="col">
      Comment
    </div>
    <div className="col">
      Share
    </div>
  </div>
  </div>
  <hr/>
  <div className = 'container'>
  <div className="row">
    <div className="col-sm-1">  <img id="profile2" src="https://upload.wikimedia.org/wikipedia/commons/7/7e/Boys-profile-pics-806.jpg" className="img-fluid" alt=""></img></div>
    <div className="col-sm-11">
      <input id = 'com' type= 'text' size = '60' placeholder = 'Comment as Jack'></input>
      <p>Press enter to Post</p>
    </div>
    <br/>
    
  </div>
  </div>
  </div>


 

    </>
  );
}

ReactDOM.render(<Name name="Jackson " date="December/04/2019" publish = 'published'/>, document.getElementById('root'));
