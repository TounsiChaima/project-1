import React from 'react';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import content from './content';


function PastEvents() {
	return (
		<section className="page-section" id="pastevents">
		<div>
			 <h2 className="section-heading text-uppercase">Past Events</h2>
			 <br></br>
			<Slider autoplay={3000}>
				{content.map((item, index) => (
					<div
						key={index}

						style={{ background: `url('${item.image}') no-repeat center center` }}
					>
						<div className="center">
							<h1>{item.title}</h1>
							<p>{item.description}</p>
							<button>{item.button}</button>
						</div>
					</div>
				))}
			</Slider>
			
		</div>
		</section>
	);
}

export default PastEvents;