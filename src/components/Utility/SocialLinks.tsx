import { LinkedInIcon, GitHubIcon, EmailIcon } from "./Icons";

const SocialLinks = () => (
  <div className="flex items-center space-x-6">
    <a href="https://www.linkedin.com/in/mckenzie-andrew/" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm" aria-label="View Andrew's LinkedIn profile">
      <LinkedInIcon className="w-8 h-8" />
    </a>
    <a href="https://github.com/blu371ck" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm" aria-label="View Andrew's GitHub profile">
      <GitHubIcon className="w-8 h-8" />
    </a>
    <a href="mailto:url54.andrew@gmail.com" className="text-gray-400 hover:text-white transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-400 rounded-sm" aria-label="Send an email to Andrew">
      <EmailIcon className="w-8 h-8" />
    </a>
  </div>
);

export default SocialLinks