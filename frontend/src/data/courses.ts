export interface Course {
  id: string;
  title: string;
  category: string;
  instructor: string;
  rating: number;
  reviews: number;
  price: number;
  image: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
}

export const coursesData: Course[] = [
  {
    id: "1",
    title: "MERN Stack Masterclass 2024",
    category: "Web Development",
    instructor: "Anand Sharma",
    rating: 4.8,
    reviews: 12450,
    price: 3499,
    image: "/images/web_dev.png",
    level: "Intermediate"
  },
  {
    id: "2",
    title: "Complete Python Bootcamp: Go from zero to hero",
    category: "Web Development",
    instructor: "Dr. Angela Yu",
    rating: 4.9,
    reviews: 85200,
    price: 3199,
    image: "/images/python.png",
    level: "Beginner"
  },
  {
    id: "3",
    title: "AWS Certified Solutions Architect - Associate",
    category: "Cloud Computing",
    instructor: "Stephane Maarek",
    rating: 4.7,
    reviews: 45000,
    price: 4999,
    image: "/images/aws.png",
    level: "Advanced"
  },
  {
    id: "4",
    title: "The Complete Cyber Security Course: Hackers Exposed!",
    category: "Cyber Security",
    instructor: "Nathan House",
    rating: 4.6,
    reviews: 32000,
    price: 3999,
    image: "/images/security.png",
    level: "Beginner"
  },
  {
    id: "5",
    title: "Machine Learning A-Z: AI, Python & R",
    category: "AI & Machine Learning",
    instructor: "Kirill Eremenko",
    rating: 4.8,
    reviews: 58000,
    price: 4499,
    image: "/images/ml.png",
    level: "Intermediate"
  },
  {
    id: "6",
    title: "Next.js 14 & React - The Complete Guide",
    category: "Web Development",
    instructor: "Maximilian Schwarzmüller",
    rating: 4.9,
    reviews: 21000,
    price: 3699,
    image: "/images/nextjs.png",
    level: "Intermediate"
  },
  {
    id: "7",
    title: "Docker & Kubernetes: The Practical Guide",
    category: "Cloud Computing",
    instructor: "Stephen Grider",
    rating: 4.7,
    reviews: 18500,
    price: 3899,
    image: "https://images.unsplash.com/photo-1605745341112-85968b19335b?q=80&w=600&auto=format&fit=crop",
    level: "Advanced"
  },
  {
    id: "8",
    title: "Deep Learning Specialization",
    category: "AI & Machine Learning",
    instructor: "Andrew Ng",
    rating: 4.9,
    reviews: 120000,
    price: 5499,
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?q=80&w=600&auto=format&fit=crop",
    level: "Advanced"
  }
];
