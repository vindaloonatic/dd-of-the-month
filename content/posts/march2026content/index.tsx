import { getImageUrl } from "@/lib/imageUrls";
import {
  participants,
  highestScore,
  mostKills,
  mostPoms,
  biggestLandmine,
  fastestClear,
  newPersonalBests,
} from "./participants";
import Image from "next/image";

export default function March2026Content() {
  return (
    <div
      style={{
        backgroundImage: `url('${getImageUrl("march-2026-gnb-hoh/outside_hohj.png")}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
        width: "100vw",
        minHeight: "100vh",
        marginLeft: "calc(-50vw + 50%)",
        marginTop: "-1rem",
        marginRight: "-1rem",
        marginBottom: "-1rem",
        padding: "2rem 1rem",
      }}
    >
      {/* Introduction */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <div className="flex-col-container items-center">
          <Image
            src="/gnb_hoh.png"
            alt="Heaven on High Banner"
            width={551}
            height={110}
            style={{ borderRadius: "8px", marginBottom: "1.5rem" }}
          />
        </div>
        <p className="mb-6">
          Our first deep dungeon of the month is complete! The participation level was much higher
          than anticipated and it was great to see people trying to challenge themselves or try
          something new.
        </p>
        <p>Thanks to everyone who participated and contributed to the community feeling and congratulations to everyone who met any of their goals. This was a great first month.</p>
      </div>

      {/* Achievements Section */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Spotlights
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <div style={{ padding: "1rem", backgroundColor: "rgba(200, 220, 255, 0.5)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Highest Score</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{highestScore.name}</p>
              <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>{highestScore.score}</p>
            </div>
            <img
              src={highestScore.photo}
              alt={`${highestScore.name} portrait`}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "4px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
          <div style={{ padding: "1rem", backgroundColor: "rgba(255, 200, 200, 0.5)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Most Kills</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{mostKills.name}</p>
              <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>{mostKills.kills.toLocaleString()}</p>
            </div>
            <img
              src={mostKills.photo}
              alt={`${mostKills.name} portrait`}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "4px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
          <div style={{ padding: "1rem", backgroundColor: "rgba(255, 200, 255, 0.5)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Fastest Clear</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{fastestClear.name}</p>
              <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>{fastestClear.time}</p>
            </div>
            <img
              src={fastestClear.photo}
              alt={`${fastestClear.name} portrait`}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "4px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
          <div style={{ padding: "1rem", backgroundColor: "rgba(255, 255, 150, 0.5)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
              <div style={{ flex: 1 }}>
                <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Biggest Landmine</p>
                <p style={{ margin: 0, fontSize: "1.1rem" }}>{biggestLandmine.name}</p>
              </div>
              <img
                src={biggestLandmine.photo}
                alt={`${biggestLandmine.name} portrait`}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "4px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            </div>
          <div style={{ padding: "1rem", backgroundColor: "rgba(200, 255, 200, 0.5)", borderRadius: "4px", display: "flex", alignItems: "center", gap: "0.75rem" }}>
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Most Poms</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{mostPoms.name}</p>
              <p style={{ margin: "0.5rem 0 0 0", color: "#666" }}>{mostPoms.poms}</p>
            </div>
            <img
              src={mostPoms.photo}
              alt={`${mostPoms.name} portrait`}
              style={{
                width: "60px",
                height: "60px",
                borderRadius: "4px",
                objectFit: "cover",
                flexShrink: 0,
              }}
            />
          </div>
        </div>
      </div>

      {/* Participants Section */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          All Participants ({participants.length})
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
            gap: "1rem",
          }}
        >
          {participants.map((participant) => (
            <div
              key={participant.name}
              style={{
                padding: "0.75rem",
                backgroundColor: "rgba(200, 255, 200, 0.6)",
                borderRadius: "4px",
                borderLeft: "4px solid #4caf50",
                display: "flex",
                alignItems: "center",
                gap: "0.75rem",
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ margin: 0 }}>{participant.name}</p>
                {newPersonalBests.includes(participant.name) && (
                  <p style={{ margin: "0.25rem 0 0 0", fontSize: "0.85rem", color: "#2e7d32" }}>
                    ⭐ New PB
                  </p>
                )}
              </div>
              <img
                src={participant.photo}
                alt={`${participant.name} portrait`}
                style={{
                  width: "60px",
                  height: "60px",
                  borderRadius: "4px",
                  objectFit: "cover",
                  flexShrink: 0,
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Clips Section */}
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Clip showcase coming soon!
        </h2>
        <p>Just need some extra time to edit</p>
      </div>

      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.95)",
          borderRadius: "8px",
          padding: "2rem",
          maxWidth: "900px",
          margin: "2rem auto",
          boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center",
        }}
      >
        <h2 style={{ marginTop: 0, marginBottom: "1.5rem", fontSize: "1.5rem" }}>
          Thanks to everyone who participated this month!
        </h2>
        <img
          src={getImageUrl("march-2026-gnb-hoh/march_2026_all.png")}
          alt="Thank you banner"
          style={{
            borderRadius: "8px",
            marginBottom: "1.5rem",
            width: "400px",
            height: "348px",
            objectFit: "contain",
          }}
        />
      </div>
    </div>
  );
}