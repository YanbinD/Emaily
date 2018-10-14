import React from 'react';

const DashBoard = () => {
  return (

  	  <div className="row">

	      <div className="col s3 m3 l3"> 
			  <div className="card">
			    <div className="card-image waves-effect waves-block waves-light">
			      <img className="activator" src="https://images.pexels.com/photos/457702/pexels-photo-457702.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
			    </div>
			    <div className="card-content">
			      <span className="card-title activator grey-text text-darken-4">Card Title<i className="material-icons">more_vert</i></span>
			      <p><a href="#">This is a link</a></p>
			    </div>
			    <div className="card-reveal">
			      <span className="card-title grey-text text-darken-4">Card Title<i className="material-icons right">close</i></span>
			      <p>Here is some more information about this product that is only revealed once clicked on.</p>
			    </div>
			  </div>
            
	      </div>

	      <div className="col s9 m9 l9"> 
				    <div className="card horizontal">
				      <div className="card-image">
				     	<img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img" /> 
				      </div>
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.</p>
				        </div>
				        <div className="card-action">
				          <a href="/">This is a link</a>
				        </div>
				      </div>
				    </div>
				    <div className="card horizontal">
				      <div className="card-image">
				     	<img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img" /> 
				      </div>
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.</p>
				        </div>
				        <div className="card-action">
				          <a href="/">This is a link</a>
				        </div>
				      </div>
				   
				</div>
				    <div className="card horizontal">
				      <div className="card-image">
				     	<img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img" /> 
				      </div>
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.</p>
				        </div>
				        <div className="card-action">
				          <a href="/">This is a link</a>
				        </div>
				      </div>
				</div>
				    <div className="card horizontal">
				      <div className="card-image">
				     	<img src="https://images.pexels.com/photos/67636/rose-blue-flower-rose-blooms-67636.jpeg?auto=compress&cs=tinysrgb&h=350" alt="img" /> 
				      </div>
				      <div className="card-stacked">
				        <div className="card-content">
				          <p>I am a very simple card. I am good at containing small bits of information.</p>
				        </div>
				        <div className="card-action">
				          <a href="/">This is a link</a>
				        </div>
				      </div>
				    </div>

	      </div>

      </div>

  );
};

export default DashBoard;