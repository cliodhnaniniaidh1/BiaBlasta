import Image from 'next/image'
import mypic from '../images/sample.png'
const MyImage = (props) => {
  return (
    <Image
      src={mypic}
      alt="Picture of the author"
      width="350px"
      height="300px"
    />
  )
}