import React from 'react';
import "../../../assets/styles/footer.css";
import {ContactInfo,ServiceInfo,IconInfo} from "../../../data/Data";

function Footer(){
   return (
		<footer className="main-footer">
			<div className="contact-container">
				{ContactInfo.map((info, index) => {
					const { img, desc, value } = info;
					return (
						<div className="contact-info" key={index}>
							<img src={img} alt="no logo" />
							<div className="contact">
								<p>{desc}</p>
								<p>{value}</p>
							</div>
						</div>
					);
				})}
			</div>
			<div className="service-container">
				<h2 className='service-description'>
					"Capitalize on low hanging fruit to identify a ballpark value
					added activity to beta test. Override the digital divide
					additional clickthroughs."
				</h2>
				<div className="service-info">
					{ServiceInfo.map((info, index) => {
						return (
							<div key={index * 20}>
								<h2>{info.title}</h2>
								<div><p>{info.link1}</p></div>
								<div><p>{info.link2}</p></div>
								<div><p>{info.link3}</p></div>
								<div><p>{info.link4}</p></div>
							</div>
						);
					})}
					<div className='icon-info'>
						<h2>{IconInfo.title}</h2>
						<div><img src= {IconInfo.link1} alt='no logo'/></div>
						<div><img src= {IconInfo.link2} alt='no logo'/></div>
						<div><img src= {IconInfo.link3} alt='no logo'/></div>
						<div><img src= {IconInfo.link4} alt='no logo'/></div>
					</div>
				</div>
			</div>
			<p className='copy-right'>@ Copy right Abe Garage 2023. All right reserved</p>
		</footer>
	);
}
export default Footer;