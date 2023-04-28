import Link from "next/link";

const Error = () => {
  const logo =
    "https://biablastaimage.s3.eu-west-1.amazonaws.com/food/Bia+Blasta+Logo-2.png";
  return (
    <>
      <img src={logo} height={300} width={300} />
      <h3>Uh Oh.....</h3>
      <p>
        We couldn't find any recipes using those ingredients. <br />
        Try adding more ingredients to your selection
        <br />
        <Link href="/pantry">Click here to search again!</Link>
      </p>
    </>
  );
};

export default Error;
