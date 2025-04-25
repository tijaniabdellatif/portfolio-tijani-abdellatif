import type { Metadata } from "next";
import { Inter, Raleway } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "./provider";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Tijani Abdellatif - Portfolio",
  description: "Professional Portfolio showcasing my skills and work",
  creator: "Tijani Abdellatif",
  keywords: [
    "Tijani Abdellatif",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "Full Stack Developer",
    "JavaScript",
    "React",
    "Next.js",
    "Node.js",
    "HTML",
    "CSS",
    "Git",
    "GitHub",
    "Web Design",
    "Web Development",
    "Project Management",
    'Agile',
    "Kanban",
    "Scrum",
    "Problem Solving",
    "Teamwork",
    "Communication",
    "Collaboration",
    "Creativity",
    "Adaptability",
    "Time Management",
    "Critical Thinking",
    "Attention to Detail",
    "Continuous Learning",
    "Docker",
    "PostgreSQL",
    "MongoDB",
    "MySQL",
    "Firebase",
    "GraphQL",
    "REST",
    "API Development",
    "Responsive Design",
    "User Experience", 
    "Kubernetes",
    "Cloud Computing",
    "AWS",
    
  ],
 
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${raleway.variable} ${inter.variable} font-body`}>
       <ThemeProvider attribute={'class'} defaultTheme="dark" enableSystem disableTransitionOnChange>
             {children}
       </ThemeProvider>
      </body>
    </html>
  );
}
