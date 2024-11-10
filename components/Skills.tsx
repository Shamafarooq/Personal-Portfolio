
import React from 'react';

const skillsData = [
  { name: 'HTML', level: 90, logo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/6/61/HTML5_logo_and_wordmark.svg/1200px-HTML5_logo_and_wordmark.svg.png' },
  { name: 'CSS', level: 85, logo: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/CSS3_logo_and_wordmark.svg' },
  { name: 'TypeScript', level: 95, logo: 'https://www.datocms-assets.com/48401/1628645197-learn-typescript.png' },
  { name: 'React', level: 50, logo: 'https://miro.medium.com/v2/resize:fit:1400/0*y6IcBe5J1AdALzXw.png' },
  { name: 'Next.js', level: 80, logo: 'https://images.prismic.io/turing/652ec31afbd9a45bcec81965_Top_Features_in_Next_js_13_7f9a32190f.webp?auto=format,compress' },
  { name: 'JavaScript', level: 75, logo: 'https://skillforge.com/wp-content/uploads/2020/10/javascript.png' },
  { name: 'Python', level: 20, logo: 'https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg' },
];

const Skills = () => {
  return (
    <div className="bg-black text-white py-20">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-12">My Skills</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {skillsData.map((skill, index) => (
            <div 
              key={index} 
              className="bg-gray-800 rounded-lg p-6 flex flex-col items-center space-y-4 hover:scale-105 transition-transform"
            >
              {/* Logo Container with Fixed Height */}
              <div className="h-24 flex items-center justify-center">
                <img 
                  src={skill.logo} 
                  alt={`${skill.name} logo`} 
                  className="max-h-20 w-auto object-contain" 
                />
              </div>

              {/* Skill Name */}
              <h2 className="text-xl font-semibold text-center">{skill.name}</h2>

              {/* Skill Progress Container */}
              <div className="w-full bg-gray-700 rounded-full h-3 overflow-hidden">
                <div 
                  className="bg-red-600 h-full" 
                  style={{ width: `${skill.level}%` }}
                />
              </div>

              {/* Percentage */}
              <div className="text-sm font-medium text-gray-300">
                {skill.level}%
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Skills;