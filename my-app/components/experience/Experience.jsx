import Image from "next/image"
import Link from "next/link"
const Experience = ({ }) => {
    return (
        <>
            <div className="container text-white" id="exp">
                <ul>
                    <li><div className="h1">Experience</div></li>
                    <hr className="mb-3" />
                    <li><div className="h4">Web Developer <span className="h6">-- For 1 year</span></div> </li>
                    <ul>
                        <li><div className="p">Oxibit Technologies , DHA Phase 2, Lahore</div></li>
                        <li>
                            <br />
                            <div className="cer btn btn-outline-secondary" style={{ width: 'fit-content' }}>
                                <Link href={'https://www.linkedin.com/company/oxibit'} className="nav-link">Check Out There Linkedin</Link>
                            </div>
                        </li>

                    </ul>
                    <br />

                    <li><div className="h4" >Web designing <span className="h6">for 6 Months</span></div> </li>
                    <ul>
                        <li><div className="p">intern at House Of Professionals ( HOP ), Joher Town, Lahore</div></li>
                    </ul>

                    <br />
                    <li>
                        <div className="h4">Freelance <span className="h6">-- 1 project ( live )</span></div>
                    </li>
                    <ul>
                        <li>
                            <div className="p">Check out my live project here</div>
                            <br />
                            <div className="cer " style={{ width: 'fit-content' }}>
                                <Image src={'/project1.png'} width={650} height={650} alt="medecose"></Image>
                            </div>
                            <br />
                            <Link href={'https://www.medecose.com/'} className="btn btn-outline-secondary cer" style={{ width: 'fit-content' }} target="blank">medecose</Link>
                        </li>
                    </ul>
                    <br />
                    <li><div className="h4">Online Teaching <span className="h6">-- almost 100 students</span></div> </li>
                    <ul>
                        <li>
                            <div className="p">check out my discord channel</div>
                            <br />
                            <div className="cer btn btn-outline-secondary" style={{ width: 'fit-content' }}>
                                <Link href={'https://discord.gg/cAb8ej98NV'} className="nav-link" target="blank">Yui's Community</Link>
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

export default Experience