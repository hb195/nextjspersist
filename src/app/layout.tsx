export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // const response = await fetch("http://localhost:3000/api/logged_in", {
  //   method: "POST",
  //   headers: {
  //     "Content-Type": "application/json",
  //   },
  // });
  // console.log("API ROUTE Response:", response);
  console.log(
    "**************************************HELLO*********************************"
  );
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
