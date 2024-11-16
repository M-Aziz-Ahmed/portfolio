import Image from "next/image"
const Certificates = ({ }) => {
    return (
        <>
            <div className="container text-white" id="cert">
                <ul>
                    <li><div className="h1">Certifications</div></li>
                    <hr className="mb-3" />
                    <li><div className="h4" id="edu">Web Designing <span className="h6">-- 2 Months</span></div> </li>
                    <ul>
                        <li><div className="p">House Of Professionals ( HOP ), Joher Town, Lahore</div></li>
                        <br />
                        <li>
                            <div className="cer" style={{border:'3px solid black', width:'fit-content'}}>
                                <Image src={'/certificate2.jpg'} width={350} height={350} alt="Image Not Available"></Image>
                            </div>
                        </li>

                    </ul>
                    <br />

                    <li><div className="h4" id="edu">Web Development <span className="h6">-- 6 Months</span></div> </li>
                    <ul>
                        <li><div className="p">House Of Professionals ( HOP ), Joher Town, Lahore</div></li>
                        <br />
                        <li>
                            <div className="cer" style={{border:'3px solid black', width:'fit-content'}}>
                                <Image src={'/certificate1.png'} width={150} height={150} alt="Image Not Available"></Image>
                            </div>
                        </li>
                    </ul>

                    <br />
                    <li><div className="h4" id="edu">Data Science and Machine Learning <span className="h6">-- 6 Months</span></div> </li>
                    <ul>
                        <li><div className="p">From Ideoversity, Arfa Kareem Tower, Lahore</div></li>
                        <br />
                        <li>
                            <div className="cer" style={{border:'3px solid black', width:'fit-content'}}>
                                <Image src={'/certificate3.jpg'} width={350} height={350} alt="Image Not Available"></Image>
                            </div>
                        </li>
                    </ul>
                    <hr />
                </ul>
            </div>
            <br />
            <br />
        </>
    )
}
export default Certificates