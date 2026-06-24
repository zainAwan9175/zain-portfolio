import { Icons } from "@/components/icons"
import { HomeIcon, NotebookIcon } from "lucide-react"

export const NAVBAR = [
  { href: "/", icon: HomeIcon, label: "Home" },
  { href: "/blog", icon: NotebookIcon, label: "Blog" },
] as const

export const SOCIAL = [
  { name: "GitHub", url: "https://github.com/zainAwan9175", icon: Icons.github },
  { name: "LinkedIn", url: "https://www.linkedin.com/in/im-zain/", icon: Icons.linkedin },
  { name: "X", url: "https://x.com/abedin_ul77210", icon: Icons.x },
  { name: "Leetcode", url: "https://leetcode.com/u/zain4178/", icon: Icons.Leetcode },
] as const
