import "./globals.css";


import { Footer, NavBar } from '../components';
// import { data } from "autoprefixer";
// import useSWR from 'swr'
// import Events from "@/pages/events/events";
// import Partners from "@/pages/partners/partners";

export const metadata = {
  title: "Car Hub",
  description: "Discover world's best car showcase application",
};

// export default function About() {
//   return <div>About</div>
// }

// function Profile() {
//   const { data, error, isLoading } = useSWR('/api/user', fetcher)
 
//   if (error) return <div>failed to load</div>
//   if (isLoading) return <div>loading...</div>
//   return <div>hello {data.name}!</div>
// }

export default function RootLayout({ children }: { children: React.ReactNode }) {
  // const { data, error } = useSWR('/api/navigation', fetcher)
 
  // if (error) return <div>Failed to load</div>
  // if (!data) return <div>Loading...</div>
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}