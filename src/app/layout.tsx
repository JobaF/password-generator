import "./globals.css"

export const metadata = {
	title: "Password Generator",
	description: "Generated a custom password",
}

export default function RootLayout({
	children,
}: {
	children: React.ReactNode
}) {
	return (
		<html lang="en">
			<body>{children}</body>
		</html>
	)
}
