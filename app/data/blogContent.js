 
// const blogData = [
//     {
//       id: 1,
//       title: "Home Buying Tips",
//       author: "Arlene McCoy",
//       date: "Feb 5, 2025",
//       tag: "Tip",
//       image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content:
//         "Buying your first home is an exciting milestone, but it can also feel overwhelming. Here are five tips to help you successfully navigate the real estate market as a first-time buyer.",
//     },
//     {
//       id: 2,
//       title: "Boost home value",
//       author: "Devon Lane",
//       date: "Jan 9, 2025",
//       tag: "Guides",
//       image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content:
//         "Simple upgrades and curb appeal improvements can significantly increase the value of your home before selling.",
//     },
//     {
//       id: 3,
//       title: "Mortgage rates update",
//       author: "Leslie Alexander",
//       date: "Dec 19, 2024",
//       tag: "Updates",
//       image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?q=80&w=3132&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
//       content:
//         "Stay informed on the latest mortgage rate trends and what they mean for home buyers in 2025.",
//     },
//   ];
  
//   export default blogData;
  
const blogData = [
  {
    id: 1,
    title: "Home Buying Tips",
    author: "Arlene McCoy",
    date: "Feb 5, 2025",
    tag: "Tips",
    image: "https://images.unsplash.com/photo-1706808849780-7a04fbac83ef?q=80&w=3132&auto=format",
    content: "Buying your first home is an exciting milestone, but it can also feel overwhelming. Here are five tips to help you successfully navigate the real estate market as a first-time buyer.",
    description: "This comprehensive guide covers everything from understanding your budget and getting pre-approved for a mortgage to choosing the right neighborhood and negotiating the best price. Learn how to work with real estate agents effectively and what red flags to watch for during home inspections."
  },
  {
    id: 2,
    title: "Boost Home Value",
    author: "Devon Lane",
    date: "Jan 9, 2025",
    tag: "Guides",
    image: "https://images.unsplash.com/photo-1706808849777-96e0d7be3bb7?q=80&w=3132&auto=format",
    content: "Simple upgrades and curb appeal improvements can significantly increase the value of your home before selling.",
    description: "Discover 15 cost-effective home improvements that yield the highest ROI, including kitchen refreshes, bathroom updates, and landscaping enhancements. We break down exactly which projects are worth your time and money, complete with before-and-after case studies from recent home sales."
  },
  {
    id: 3,
    title: "Mortgage Rates Update",
    author: "Leslie Alexander",
    date: "Dec 19, 2024",
    tag: "Updates",
    image: "https://images.unsplash.com/photo-1706808849827-7366c098b317?q=80&w=3132&auto=format",
    content: "Stay informed on the latest mortgage rate trends and what they mean for home buyers in 2025.",
    description: "Our quarterly mortgage market analysis examines current rate trends, Federal Reserve policies, and economic indicators affecting housing finance. Includes expert predictions for fixed-rate and adjustable-rate mortgages, plus strategies for locking in the best rates during volatile periods."
  },
  {
    id: 4,
    title: "Interior Design Ideas",
    author: "Ronald Richards",
    date: "Mar 14, 2025",
    tag: "Decor",
    image: "https://images.unsplash.com/photo-1606744824163-985d376605aa?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Transform your home with these top interior design tips and modern aesthetics.",
    description: "Explore 2025's hottest interior design trends with room-by-room inspiration. From biophilic design elements to smart home integration and maximalist color schemes, this guide provides practical advice for implementing professional design principles in your own space, regardless of your budget."
  },
  {
    id: 5,
    title: "Budget-Friendly Renovations",
    author: "Cameron Williamson",
    date: "Apr 3, 2025",
    tag: "Budget",
    image: "https://images.unsplash.com/photo-1551516594-56cb78394645?q=80&w=1730&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Learn how to renovate your house on a tight budget with maximum impact.",
    description: "Detailed breakdown of how to prioritize renovation projects when funds are limited, including DIY vs. professional work comparisons, material cost-saving tips, and phased renovation planning. Features real homeowner stories who transformed spaces for under $5,000 with stunning results."
  },
  {
    id: 6,
    title: "Top Neighborhoods in 2025",
    author: "Courtney Henry",
    date: "May 2, 2025",
    tag: "Location",
    image: "https://images.unsplash.com/photo-1669387448840-610c588f003d?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Explore the most popular and safest neighborhoods for homebuyers in 2025.",
    description: "Our annual neighborhood ranking evaluates 50 metropolitan areas based on affordability, school quality, amenities, commute times, and future development plans. Includes interactive maps, resident testimonials, and investment potential analysis for each recommended community."
  },
  {
    id: 7,
    title: "Sustainable Housing Trends",
    author: "Dianne Russell",
    date: "Feb 28, 2025",
    tag: "Eco",
    image: "https://images.unsplash.com/photo-1554995207-c18c203602cb?q=80&w=3132&auto=format",
    content: "Eco-friendly housing solutions are on the rise. Discover trends that reduce your carbon footprint.",
    description: "In-depth look at cutting-edge sustainable housing technologies including passive solar design, rainwater harvesting systems, and net-zero energy homes. Learn about government incentives for green upgrades and how sustainable features can lower long-term ownership costs while benefiting the environment."
  },
  {
    id: 8,
    title: "Rent vs Buy",
    author: "Bessie Cooper",
    date: "Jan 21, 2025",
    tag: "Advice",
    image: "https://images.unsplash.com/photo-1580587771525-78b9dba3b914?q=80&w=3132&auto=format",
    content: "Not sure whether to rent or buy a home? Here's a breakdown of the pros and cons of each.",
    description: "Comprehensive financial comparison using real-world scenarios in different markets. Our 5-year cost analysis calculator helps you evaluate break-even points, while lifestyle considerations address flexibility, maintenance responsibilities, and equity building. Updated with 2025 tax implication data."
  },
  {
    id: 9,
    title: "Legal Tips for Buyers",
    author: "Guy Hawkins",
    date: "Dec 11, 2024",
    tag: "Legal",
    image: "https://images.unsplash.com/photo-1570129477492-45c003edd2be?q=80&w=3132&auto=format",
    content: "Understand property legal documents and avoid common mistakes when buying a home.",
    description: "Step-by-step walkthrough of all legal aspects of home buying, from purchase agreements to title searches and closing documents. Features advice from real estate attorneys on protecting yourself in contracts, dealing with easements, and understanding homeowners association rules before you sign."
  },
  {
    id: 10,
    title: "Vacation Property Investment",
    author: "Kathryn Murphy",
    date: "Mar 30, 2025",
    tag: "Investment",
    image: "https://images.unsplash.com/photo-1647082550285-119acfd169f2?q=80&w=1699&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    content: "Looking to buy a holiday home? Learn how to choose the right vacation property for long-term gain.",
    description: "Expert guide to vacation property investment analyzes rental income potential, seasonal market fluctuations, and property management options. Includes case studies of successful vacation rentals, tax advantage explanations, and warning signs for markets that may be over-saturated with short-term rentals."
  },
  {
    id: 11,
    title: "Avoid These Real Estate Scams",
    author: "Wade Warren",
    date: "Jun 7, 2025",
    tag: "Warning",
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?q=80&w=3132&auto=format",
    content: "Stay protected from online real estate frauds. Know what to look out for when browsing listings.",
    description: "Exposé on the latest real estate scams targeting buyers, sellers, and renters in the digital age. Learn to identify fake listings, wiring instruction fraud, title theft, and predatory lending schemes. Includes verification resources and step-by-step instructions for protecting your personal information and deposits."
  },
  {
    id: 12,
    title: "Home Loan Process Explained",
    author: "Eleanor Pena",
    date: "Jul 1, 2025",
    tag: "Finance",
    image: "https://images.unsplash.com/photo-1589652717521-10c0d092dea9?q=80&w=3132&auto=format",
    content: "Step-by-step guide on applying for a home loan, getting approved, and managing repayment efficiently.",
    description: "From pre-qualification to closing, this definitive guide demystifies mortgage lending. Covers how lenders evaluate credit scores and debt-to-income ratios, documentation requirements, rate lock strategies, and private mortgage insurance. Special section on overcoming common underwriting hurdles and post-closing loan management tips."
  }
];

export default blogData;