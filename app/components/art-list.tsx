import Link from "next/link";

import "./art-list.css";

interface Props {
  arts: Array<string>;
}

const ArtList: React.FC<Props> = ({ arts }) => {
  return (
    <>
      <h1 className="center-text">My art</h1>
      <div className="art-list">
        {arts.map((a: string, index: number) => (
          <Link className="art-link" key={a} href={"/art/" + a}>
            <img className="art" src={"/media/art/" + a} alt="art image" />
          </Link>
        ))}
      </div>
    </>
  );
};

export default ArtList;
