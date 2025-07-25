import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const GithubContribution = () => {
  //Return the github contribution component
  return (
    //Section for github contribution
    <section className="py-8 px-4 md:px-8 min-h-[400px] flex flex-col items-center">
      <div>
        {/*Title*/}
      <h2 className="text-4xl xl:text-5xl font-semibold mb-8 text-gray-700 dark:text-gray-300 text-start">
        My GitHub Contributions
      </h2>
      </div>
      {/*GitHubCalendar component*/}
      <div className="w-full max-w-[1440px]">
        {/*GitHubCalendar component*/}
        <GitHubCalendar
          username="MdAkramHossenSujan"
          blockSize={20}         
          blockMargin={8}         
          fontSize={16}           
          color="#2563EB"         
          style={{ margin: '0 auto' }} 
        />
      </div>
    </section>
  );
};

export default GithubContribution;
