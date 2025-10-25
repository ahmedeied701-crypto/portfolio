
import JavaScript from '../public/icons/javascript.svg'
import Python from '../public/icons/python.svg'
import Reactsvg from '../public/icons/react.svg'
import Nodejs from '../public/icons/nodejs.svg'
import Docker from '../public/icons/docker.svg'
import TypeScriptSvg from '../public/icons/typescript.svg'
import NextJs from '../public/icons/nextjs.svg'
import Laravel from '../public/icons/laravel-svgrepo-com.svg'

const Technologies = [
    { name: 'JavaScript', component: JavaScript  },
    { name: 'TypeScript', component: TypeScriptSvg},
    { name: 'Python', component: Python  },
    { name: 'Laravel', component: Laravel  },    
    { name: 'React', component: Reactsvg  },
    { name: 'Nodejs', component: Nodejs },
    { name: 'Nextjs', component: NextJs},
    { name: 'Docker', component: Docker  },

  ]
export default function AboutMe(){
return(
    <div>
    <div className="mt-4 lg:mt-14 border-b-2 container  border-black border-opacity-40"><h1 className=" mb-2 text-center text-3xl">ABOUT ME</h1>
   </div>
   <div className=' flex flex-col space-y-6 lg:space-y-0 my-8'>
   <section className='lg:mb-6'>
   <p className="text-left">I am an experienced software developer specializing in full-stack development with expertise in TypeScript, Node.js, React, Python, Laravel, Php, and JavaScript. I have worked with Y Combinator-backed companies, delivering a variety of products, including SaaS platforms, algorithm-driven matching systems, restaurant management solutions, and automation tools. I have also implemented scalable CI/CD pipelines using Docker, AWS, and GitHub Actions. My work focuses on delivering efficient, high-impact solutions that meet both technical and business needs.</p>
   </section>
  
  <section className='grid grid-cols-2 gap-y-4 gap-x-4   lg:grid-cols-4 '>
  {Technologies.map((item) => (
    <div className="flex fexl-row space-x-5">
      <item.component className="w-8 h-8 "/>
  <h1>{item.name}</h1>
  
  </div>
  ))}
  </section>
   </div>
   </div>
)
}