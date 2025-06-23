import './App.css';
import { useState } from 'react';
import programmer from '../src/assets/user.jpeg';
import linkedinIcon from '../src/assets/linkedin.svg';
import GitHubIcon from '../src/assets/github.svg';
import EmailIcon from '../src/assets/email.svg';

function App() {
  const [activeTab, setActiveTab] = useState('software');

  const tabContent = {
    software:
      'I bring a practical and adaptable approach to software development, with a strong foundation in programming principles and system architecture. My academic journey and internship experience have equipped me with the tools to build scalable, maintainable solutions using modern stacks like .NET, Java, and JavaScript frameworks. I value clean code, performance, and team collaboration, and I’m comfortable working with REST APIs, relational databases, version control, and testing practices.',
    ai:
      'I’m deeply fascinated by the impact of intelligent systems in real-world applications. My background includes experience with machine learning, deep learning, and data preprocessing, using tools such as TensorFlow, Keras, Scikit-learn, and PyTorch. I’ve also followed certified learning paths beyond coursework to enhance my skills. I’m especially drawn to research-oriented challenges and practical ML deployment.',
    uiux:
      'Designing user-friendly and intuitive interfaces is a key aspect of my work. I believe great software should not only function well but also feel effortless to use. My approach to UI/UX is rooted in empathy and usability, shaped by user research and iterative design. With experience in Figma, React, Angular, and responsive layout techniques, I strive to create seamless digital experiences that balance aesthetic clarity with practical performance.',
  };

  return (
    <>
      <div className="flex flex-col lg:flex-row items-start justify-center px-8 py-10 gap-8">
        {/* Left Section */}
        <div className="w-full lg:w-2/3 text-violet-900 flex flex-col gap-6">
          {/* Greeting */}
          <div>
            <h1 className="text-4xl font-bold mb-2">Hello, I'm Shenan</h1>
          </div>

          {/* About Me Section */}
          <div className="border-4 border-violet-400 p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-2">About Me</h2>
            <p className="mb-4">
              I'm a final-year Software Engineering undergraduate from Sri Lanka, passionate about crafting robust
              software solutions, exploring intelligent systems, and building meaningful user experiences. I’m
              self-driven, detail-oriented, and committed to continuous learning. Whether developing full-stack web
              applications, experimenting with machine learning models, or refining UI designs, I strive to deliver
              purposeful, high-quality work.
            </p>

            {/* Tabs - Centered */}
            <div className="flex justify-center gap-3 mb-4 flex-wrap">
              <button
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeTab === 'software'
                    ? 'bg-violet-500 text-white'
                    : 'bg-violet-100 text-violet-800 hover:bg-violet-200'
                }`}
                onClick={() => setActiveTab('software')}
              >
                Software Engineering
              </button>
              <button
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeTab === 'ai'
                    ? 'bg-violet-500 text-white'
                    : 'bg-violet-100 text-violet-800 hover:bg-violet-200'
                }`}
                onClick={() => setActiveTab('ai')}
              >
                AI / ML
              </button>
              <button
                className={`px-4 py-2 rounded-full font-semibold ${
                  activeTab === 'uiux'
                    ? 'bg-violet-500 text-white'
                    : 'bg-violet-100 text-violet-800 hover:bg-violet-200'
                }`}
                onClick={() => setActiveTab('uiux')}
              >
                UI / UX Designing
              </button>
            </div>

            {/* Dynamic Content */}
            <p className="text-md mb-6">{tabContent[activeTab]}</p>

            {/* Download CV Button */}
            <div className="flex justify-center">
              <a
                href="https://drive.google.com/drive/folders/1oN58YGXIoKvT2UZ_xhfI9eVTu0p2MaPF?usp=drive_link"
                className="bg-violet-600 text-white px-6 py-2 rounded-full font-semibold hover:bg-violet-700 transition"
              >
                My CV
              </a>
            </div>
          </div>

          
        </div>

        {/* Right - Image + Contact Section */}
        <div className="w-full lg:w-1/3 flex flex-col items-center justify-start gap-5 text-violet-900 mt-10 lg:mt-0">
          <div className="p-2 border-4 border-violet-400 bg-white rounded-full shadow-md">
            <img
              src={programmer}
              alt="Programmer"
              className="w-60 h-60 rounded-full object-cover"
            />
          </div>

          <div className="text-center border-4 border-violet-400 rounded-xl shadow-md p-4 w-full max-w-md">
            <h2 className="text-lg font-semibold mb-4">Contact Me</h2>
            <div className="flex items-center justify-center gap-3 mb-2">
              <img src={EmailIcon} alt="Email" className="w-6 h-6" />
              <a
                href="mailto:shenanperera08@gmail.com"
                className="text-violet-900 hover:underline"
              >
                shenanperera08@gmail.com
              </a>
            </div>

            <div className="flex flex-col gap-3 items-center">
              <a
                href="https://www.linkedin.com/in/shenan-perera/"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <img src={linkedinIcon} alt="LinkedIn" className="w-6 h-6 mr-2" />
                linkedin.com/in/shenan-perera
              </a>
              <a
                href="https://github.com/ShenanPerera"
                className="flex items-center hover:underline"
                target="_blank"
                rel="noreferrer"
              >
                <img src={GitHubIcon} alt="GitHub" className="w-6 h-6 mr-2" />
                github.com/ShenanPerera
              </a>
            </div>
          </div>
        </div>
      </div>

      <hr className="bg-violet-900 mt-3"/>

          {/* Skills Section */}
          <div className="mt-8">
            <h2 className="text-2xl mb-4 text-violet-900 font-bold">Skills</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="border-4 border-violet-400 bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Programming Languages</h3>
                <p className="text-violet-700 mt-2">Java, JavaScript, TypeScript, Python, C, C++, C#, Kotlin</p>
              </div>
              <div className="border-4 border-violet-400 bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Software Engineering Frameworks & Libraries</h3>
                <p className="text-violet-700 mt-2">Frontend: React, React Native, Angular, Blazor</p>
                <p className="text-violet-700">Backend: Express, Node.js, Spring Boot, ASP.NET, NestJS, Flask</p>
              </div>
              <div className="border-4 border-violet-400 bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Software Engineering Skills</h3>
                <p className="text-violet-700 mt-2">Front-End & Back-End Development, REST APIs, Code Reviews, Debugging, Testing, Microservices</p>
              </div>
              <div className="border-4 border-violet-400 bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Machine Learning & Deep Learning</h3>
                <p className="text-violet-700 mt-2">Supervised/Unsupervised Learning, CNN, ANN, RNN, LSTM, RL, NLP, Generative Models</p>
              </div>
              <div className="border-4 border-violet-400 bg-white bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">AI & Data Science Libraries</h3>
                <p className="text-violet-700 mt-2">TensorFlow, Keras, XGBoost, Scikit-Learn, Pandas, Matplotlib, Seaborn, SMOTE, PyTorch, OpenCV</p>
              </div>
              <div className="border-4 border-violet-400 bg-white bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Database Technologies</h3>
                <p className="text-violet-700 mt-2">PostgreSQL, MongoDB, Firebase, SQL, PL/SQL</p>
              </div>
              <div className="border-4 border-violet-400 bg-white bg-white p-4 rounded-xl">
                <h3 className="text-violet-900 font-bold text-lg">Development Tools</h3>
                <p className="text-violet-700 mt-2">GitHub, Postman, Swagger</p>
              </div>
              
            </div>
            </div>
    </>
  );
}

export default App;
