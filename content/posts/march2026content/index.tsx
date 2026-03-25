import { getImageUrl } from "@/lib/imageUrls";

export default function March2026Content() {
  return (
    // marginLeft: "calc(-50vw + 50%)",
    <div
      style={{
  backgroundImage: `url('${getImageUrl("march-2026-gnb-hoh/outside_hohj.png")}')`,
  backgroundSize: "cover",
  backgroundPosition: "center",
  backgroundAttachment: "fixed",
  width: "100vw",
  height: "100vh",
  marginLeft: "calc(-50vw + 50%)",
  marginTop: "-1rem",
  marginRight: "-1rem",
  marginBottom: "-1rem",
  padding: "0",
}}
    >
      <div className="flex-col-container justify-center items-center">
        <h1 className="article-title-header">March 2026</h1>
        <p>Heaven on High - GNB</p>
      </div>
    </div>
  )
}