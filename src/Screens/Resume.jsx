import React, { useRef,useState } from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import resumepdf from "../Assets/M_Naveenkumar_Resume.pdf";
import "../Styles/Resume.css";
import { FiDownload } from "react-icons/fi";
import "react-pdf/dist/Page/AnnotationLayer.css";
import { Document, Page } from "react-pdf";
function Resume() {
	const downloadlinkref = useRef(null);
	const [numPages, setNumPages] = useState();
	const [pageNumber, setPageNumber] = useState(1);
  
	const download = () => {
		downloadlinkref.current.click();
	};
	return (
		<div>
			<Navbar />
			<a download ref={downloadlinkref} href={resumepdf} className="download-link">Downoad</a>
			<div className='resume-container'>
				<div>
					<Document file={resumepdf} >
						<Page pageNumber={pageNumber} />
					</Document>
				</div>
				<div className='download' onClick={download}>
                    pdf
					<FiDownload size={16} color="white" />
				</div>
			</div>
			<div className='mob-download' onClick={download}>
				<div onClick={download}> <FiDownload size={16} color="white"  /> Download</div>

			</div>
			<Footer />
		</div>
	);
}

export default Resume;
