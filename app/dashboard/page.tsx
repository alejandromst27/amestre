import { createClient } from "@/lib/supabase-server";
import { redirect } from "next/navigation";

export default async function DashboardPage() {
  const supabase = await createClient();
  const { data: { user } } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: profile } = await supabase
    .from("profiles")
    .select("*")
    .eq("id", user.id)
    .single();

  return (
    <div
      style={{
        minHeight: "100vh",
        backgroundColor: "#0a0a0a",
        padding: "2rem",
        backgroundImage:
          "linear-gradient(rgba(201,169,110,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(201,169,110,0.03) 1px, transparent 1px)",
        backgroundSize: "80px 80px",
      }}
    >
      <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "3rem",
            paddingBottom: "2rem",
            borderBottom: "1px solid #2a2a2a",
          }}
        >
          <div>
            <p
              style={{
                fontFamily: "var(--font-cormorant), serif",
                fontSize: "2rem",
                fontWeight: 400,
                letterSpacing: "0.1em",
                color: "#f0ebe4",
              }}
            >
              A.Mestre
            </p>
            <p
              style={{
                fontFamily: "var(--font-inter), sans-serif",
                fontSize: "0.75rem",
                color: "#9a9188",
                letterSpacing: "0.15em",
                marginTop: "0.25rem",
              }}
            >
              MY ACCOUNT
            </p>
          </div>
          <form action="/auth/signout" method="post">
            <SignOutButton />
          </form>
        </div>

        {/* Welcome */}
        <div style={{ marginBottom: "3rem" }}>
          <h1
            style={{
              fontFamily: "var(--font-cormorant), serif",
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 300,
              color: "#f0ebe4",
              marginBottom: "0.5rem",
            }}
          >
            Welcome{profile?.full_name ? `, ${profile.full_name}` : ""}
          </h1>
          <p
            style={{
              fontFamily: "var(--font-inter), sans-serif",
              fontSize: "0.9rem",
              color: "#9a9188",
              fontWeight: 300,
            }}
          >
            {user.email}
          </p>
        </div>

        {/* Cards */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "1.5rem",
          }}
        >
          <DashboardCard
            number="00"
            title="Active Orders"
            description="You have no orders yet. Start your bespoke journey from the app."
            action="Download the App"
          />
          <DashboardCard
            number="—"
            title="My Measurements"
            description="No measurements saved. Complete a 3D scan in the app to store yours."
            action="Get the App"
          />
          <DashboardCard
            number="—"
            title="Upcoming Fittings"
            description="No fitting sessions scheduled yet."
            action="Learn More"
          />
        </div>
      </div>
    </div>
  );
}

function DashboardCard({
  number,
  title,
  description,
  action,
}: {
  number: string;
  title: string;
  description: string;
  action: string;
}) {
  return (
    <div
      style={{
        backgroundColor: "#141414",
        border: "1px solid #2a2a2a",
        padding: "2rem",
      }}
    >
      <p
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "2.5rem",
          color: "#c9a96e",
          marginBottom: "0.75rem",
          fontWeight: 300,
        }}
      >
        {number}
      </p>
      <h3
        style={{
          fontFamily: "var(--font-cormorant), serif",
          fontSize: "1.4rem",
          color: "#f0ebe4",
          marginBottom: "0.75rem",
          fontWeight: 400,
        }}
      >
        {title}
      </h3>
      <p
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.85rem",
          color: "#9a9188",
          lineHeight: 1.7,
          fontWeight: 300,
          marginBottom: "1.5rem",
        }}
      >
        {description}
      </p>
      <span
        style={{
          fontFamily: "var(--font-inter), sans-serif",
          fontSize: "0.7rem",
          letterSpacing: "0.15em",
          color: "#c9a96e",
        }}
      >
        {action} →
      </span>
    </div>
  );
}

function SignOutButton() {
  return (
    <a
      href="/auth/signout"
      style={{
        fontFamily: "var(--font-inter), sans-serif",
        fontSize: "0.7rem",
        letterSpacing: "0.15em",
        color: "#9a9188",
        textDecoration: "none",
        border: "1px solid #2a2a2a",
        padding: "0.5rem 1.25rem",
        display: "inline-block",
      }}
    >
      SIGN OUT
    </a>
  );
}
