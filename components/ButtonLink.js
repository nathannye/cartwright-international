import Link from "next/link";

const ButtonLink = (props) => {
  <Link href={props.linkTo}>
    <a>{props.linkText}</a>
  </Link>;
};
export default ButtonLink;
