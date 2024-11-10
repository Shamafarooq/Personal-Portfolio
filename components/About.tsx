// components/About.tsx
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-20 bg-black text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold mb-8 text-red-600">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <img 
              src="https://avatars.githubusercontent.com/u/160252645?v=4" 
              alt="Profile" 
               className="rounded-full w-full max-w-s border border-red-600"
              
            />
          </div>
          <div>
            <p className="text-lg mb-6">
         Hello, I’m Shama Farooq – a passionate educator and an aspiring web developer with a strong drive for technology and innovation. My journey into the world of web development is fueled by a deep-seated curiosity and a desire to create digital experiences that are both aesthetically pleasing and highly functional. I am dedicated to mastering the art of coding, with a particular focus on developing responsive, user-friendly websites and applications that enhance the user experience.
            <br/>
            <br/>

        As a lifelong learner, I am continuously expanding my technical toolkit. Recently, I have been diving into TypeScript to build on my foundational skills in HTML, CSS,React.js , Python, Java and C++. This journey has allowed me to embrace new challenges, sharpen my problem-solving abilities, and stay on the cutting edge of modern web technologies. My academic background has equipped me with a solid understanding of web development principles, and I am eager to apply this knowledge to real-world projects that make a tangible difference.
<br/>
<br/>

        Beyond just writing code, I am deeply committed to creating scalable, efficient, and user-centered solutions that meet the needs of diverse audiences. I believe in the power of technology to transform ideas into impactful digital experiences, and I am always eager to explore new trends, tools, and frameworks in the tech industry.
<br/>
<br/>
My goal is to not only grow as a developer but also to contribute fresh perspectives and innovative ideas to any team I am a part of. I am excited to continue this journey, learning from each project and embracing every opportunity to refine my skills and make a positive impact through technology.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div>
                <h3 className="text-xl font-bold mb-2">Experience</h3>
                <p>1 Years</p>
              </div>
              <div>
                <h3 className="text-xl font-bold mb-2">Projects</h3>
                <p>8+ Completed</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 


