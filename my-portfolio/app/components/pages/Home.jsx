import Image from "next/image"
const Home = ({}) => {
  return (
    <>
    <div className="container">
      <div className="d-flex w-100 flex-column my-5 justify-content-end">
        <div className="profile rounded-circle">
          <Image src='/profile.jpg' height={300} width={300} className="profile-pic" alt="Error Loading Image"></Image>
        </div>
        <div className="text-body my-5">
          <div className="h1 text-light">~~ Ohh, You Finally Landed Here ~~</div>
          <hr className="text-light"/>
          <div className="h3 text-light">I am Aziz and this Site explains " Me "</div>

        </div>
      </div>
    </div>
    </>
  )
}

export default Home