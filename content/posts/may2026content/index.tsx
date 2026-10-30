import {
  participants,
  participantList,
  newPersonalBestParticipants,
} from "./participants";
import Image from "next/image";

export default function May2026Content() {
  return (
    <div
      style={{
        backgroundImage:
          "url('https://pub-341f1e8e5893474ca7fc5cafd6473134.r2.dev/potd_outside.png')",
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
            src="/rdm_potd.png"
            alt="Palace of the Dead Banner"
            width={551}
            height={110}
            style={{ borderRadius: "8px", marginBottom: "1.5rem" }}
          />
        </div>
        <p className="mb-6">
          Palace of the Dead is often called the most difficult deep dungeon and this month it did not disappoint! I think there were more duty fails than any other month so far, but that didn't stop us from paying homage to the original Necromancer job. That being said, we had a lot of new personal bests this month and some first time attempts of PotD + RDM which is great to see.
        </p>
        <p>Congratulations to everyone who set new personal records or met their goals this month!</p>
      </div>

      {/* Spotlights */}
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
          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(200, 220, 255, 0.5)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>Total Participants</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{participantList.length}</p>
            </div>
          </div>

          <div
            style={{
              padding: "1rem",
              backgroundColor: "rgba(255, 230, 200, 0.5)",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
              gap: "0.75rem",
            }}
          >
            <div style={{ flex: 1 }}>
              <p style={{ margin: "0 0 0.5rem 0", fontWeight: "bold" }}>New Personal Bests</p>
              <p style={{ margin: 0, fontSize: "1.1rem" }}>{newPersonalBestParticipants.length} this month</p>
            </div>
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
                {newPersonalBestParticipants.includes(participant.name) && (
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
      </div>
    </div>
  );
}
