import Image from 'next/image'
import Header from '@/components/header'

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-start min-h-screen">
      <header className="mb-8">
        {/* Header content */}
        <h1 className="text-4xl font-bold">Welcome to My Website</h1>
      </header>
      <div className="max-w-3xl p-8 shadow-md mb-8rounded-lg">
        {/* Main content */}
        <p className="text-lg">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod
          dapibus enim, eget ultrices dolor rhoncus id. Sed eu neque at nisi
          cursus laoreet. Cras euismod vel nunc nec elementum.
        </p>
        <button className="px-4 py-2 mt-4 text-white bg-blue-500 rounded-md hover:bg-blue-600">
          Learn More
        </button>
      </div>
      <footer>
        {/* Footer content */}
        <ul>
          <li>
            <a href="/website-terms-of-use">Website terms of use</a>
          </li>
          <li>
            <a href="/important-disclosures">Important disclosures</a>
          </li>
          <li>
            <a href="/privacy-policy">Privacy policy</a>
          </li>
        </ul>
      </footer>
    </div>
    
  )
}
