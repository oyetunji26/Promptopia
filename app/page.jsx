import Feed from "@components/Feed"

const Home = () => {
  return (
    <section className="w-full flex-center flex-col">
       <h1 className="head_text text-center">
            Discover & share &nbsp;
            <br className='max-md:hidden'/>
            {/* max-md:hidden meansd to hide the br on large devices and show on smaller devices */}

            <span className='orange_gradient text-center'>Ai powered prompt</span>
       </h1>
       <p className='desc text-center'>
            Promptopia is an open source AI prompting tool for modern world to discover, create and share creative prompt
       </p>

       <Feed />
    </section>
  )
}

export default Home