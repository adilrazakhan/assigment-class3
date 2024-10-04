
import Link from "next/link"

export default function Country() {
    return (
      <div>
        
       <ul>
        <li><Link href = "/country/pakistan">Pakistan</Link></li>
        <li><Link href = "/country/saudiarabia">Saudi Arabia</Link></li>
        <li><Link href = "/country/canada">Canada</Link></li>
        <li><Link href = "/country/australia">Australia</Link></li>
        <li><Link href = "/country/germany">Germany</Link></li>
        <br/>
        </ul>
        
        </div>

  
    )
  }