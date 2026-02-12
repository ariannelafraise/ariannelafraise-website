/*
import Footer from "../../components/footer";
import Link from "next/link";

import { fetchAllArt, fetchArt } from "@/app/lib/artUtils";

import "./page.css";

export async function generateStaticParams() {
  const allArt: Array<string> = fetchAllArt();
  return allArt.map((id: string) => ({
    id: id,
  }));
}

function getArt(id: string): string | undefined {
  return fetchArt(id);
}

export default async function ArtImage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const artFile = getArt((await params).id);

  return (
    <>
      <div className="content">
        <Link href={"/media/art/" + artFile}>
          <img src={"/media/art/" + artFile} alt="art image" width={500} />
        </Link>
      </div>
      <Footer />
    </>
  );
}
*/
