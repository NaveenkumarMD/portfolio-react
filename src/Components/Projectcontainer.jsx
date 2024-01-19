import React from "react";
import { RiHeartFill } from "react-icons/ri";
import { GiRead } from "react-icons/gi";
import { BsFillArrowUpRightSquareFill } from "react-icons/bs";
import "../Styles/Projects.css";
import { FaAndroid, FaGlobe, FaExternalLinkAlt,FaGithubAlt } from "react-icons/fa";
import { SiNpm } from "react-icons/si";
function Projectcontainer({data,openprojectviewmodal}) {
	return (
		<div onClick={()=>openprojectviewmodal(data)}data-aos="zoom-in">
			<div className='blog-container'>
				<div className='blog-title'>{data.name}</div>
				<div className='p-desc'>
					{data.content}
				</div>
				<div className='p-tags-container'>
					{
						data.tags.map((item, index) => {
							if (item == "website") {
								return <WebsiteTag key={index} />;
							}
							else if (item == "app") {
								return <AppsTag key={index} />;
							}
							else if (item == "module") {
								return <ModuleTag key={index} />;
							}
							return true;
						})
					}
                    
					{/* <ModuleTag/>
                    <AppsTag/> */}
				</div>
				<div className='bottom-heart-container-p'>
					<div className='bottom-heart'>
						<RiHeartFill size={16}  />
						<span>{data.likes}</span>
					</div>
					<div className='bottom-heart' onClick={()=>window.open(data.github)}>
						<FaGithubAlt size={16}   />
						<span>code</span>
					</div>

					<div className='bottom-heart' onClick={()=>window.open(data.link)}>
						<span>View</span>
						<FaExternalLinkAlt size={14}  />

					</div>

				</div>
			</div>
		</div>
	);
}

export default Projectcontainer;

const WebsiteTag = () => {
	return (
		<div className='p-tag website-tag'>
			<FaGlobe size={16} color="var(--fg-green)" />
			<div className='p-tag-text'>website</div>
		</div>
	);
};
const AppsTag = () => {
	return (
		<div className='p-tag website-tag'>
			<FaAndroid size={16} color="var(--fg-green)" />
			<div className='p-tag-text'>app</div>
		</div>
	);
};
const ModuleTag = () => {
	return (
		<div className='p-tag website-tag'>
			<SiNpm size={16} color="var(--fg-green)" />
			<div className='p-tag-text'>module</div>
		</div>
	);
};
