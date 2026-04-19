export const metadata = {
  title: "NEXUS"
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html>
      <body style={{ background: "#0a0a0f", color: "white" }}>
        {children}
      </body>
    </html>
  );
}
