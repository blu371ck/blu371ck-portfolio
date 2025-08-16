import React from 'react';

const skillsData = [
    { name: 'Python', category: 'Languages & Scripting' },
    { name: 'JavaScript', category: 'Languages & Scripting' },
    { name: 'TypeScript', category: 'Languages & Scripting' },
    { name: 'Bash', category: 'Languages & Scripting' },
    { name: 'PowerShell', category: 'Languages & Scripting' },
    { name: 'SQL', category: 'Languages & Scripting' },
    { name: 'AWS', category: 'Cloud & DevOps' },
    { name: 'Terraform', category: 'Cloud & DevOps' },
    { name: 'AWS CDK', category: 'Cloud & DevOps' },
    { name: 'Git', category: 'Cloud & DevOps' },
    { name: 'Wireshark', category: 'Defensive Security' },
    { name: 'Nmap', category: 'Offensive Security' },
    { name: 'Metasploit', category: 'Offensive Security' },
    { name: 'Suricata', category: 'Defensive Security' },
    { name: 'Zeek', category: 'Defensive Security' },
    { name: 'Security Onion', category: 'Defensive Security' },
    { name: 'Volatility', category: 'Defensive Security' },
    { name: 'Eric Zimmerman Tools', category: 'Defensive Security' },
    { name: 'Event Log Explorer', category: 'Defensive Security' },
    { name: 'FTK Imager', category: 'Defensive Security' },
    { name: 'Splunk', category: 'Defensive Security' },
    { name: 'Elastic Stack', category: 'Defensive Security' },
    { name: 'Autopsy', category: 'Defensive Security' },
    { name: 'BurpSuite', category: 'Offensive Security' },
    { name: 'GoBuster', category: 'Offensive Security' },
    { name: 'Arsenal Image Mounter', category: 'Defensive Security' },
    { name: 'SQLMap', category: 'Offensive Security' },
    { name: 'FFuF', category: 'Offensive Security' },
    { name: 'Hashcat', category: 'Offensive Security' },
    { name: 'PowerView', category: 'Offensive Security' },
    { name: 'BloodHound', category: 'Offensive Security' },
    { name: 'PEASS-ng', category: 'Offensive Security' },
    { name: 'NTFS Log Tracker', category: 'Defensive Security' },
    { name: 'VirusTotal', category: 'Defensive Security' },
    { name: 'Sysinternals', category: 'Defensive Security' },
    { name: 'Detect it Easy (DiE)', category: 'Defensive Security' },
    { name: 'FLOSS', category: 'Defensive Security' },
    { name: 'Capa', category: 'Defensive Security' },
    { name: 'AtomicRedTeam', category: 'Defensive Security' },
    { name: 'Regshot', category: 'Defensive Security' },
    { name: 'FakeNet-NG', category: 'Defensive Security' },
    { name: 'ApateDNS', category: 'Defensive Security' }

];

const categoryColors: { [key: string]: string } = {
    'Languages & Scripting': 'bg-gray-500 hover:bg-gray-400',
    'Cloud & DevOps': 'bg-orange-500 hover:bg-orange-400',
    'Offensive Security': 'bg-red-500 hover:bg-red-400',
    'Defensive Security': 'bg-blue-500 hover:bg-blue-400'
};

const Skills = () => {
    const categories = [...new Set(skillsData.map(skill => skill.category))];

    return (
        <div className="w-full max-w-5xl mx-auto text-center">
            <h2 className="text-5xl font-bold text-gray-200 mb-12">Skills & Technologies</h2>
            {categories.map(category => (
                <div key={category} className="mb-8">
                    <h3 className="text-2xl font-semibold text-gray-400 mb-4 text-left border-b border-gray-700 pb-2">{category}</h3>
                    <div className="flex flex-wrap gap-3 justify-start">
                        {skillsData.filter(skill => skill.category === category).map(skill => (
                            <div key={skill.name} className={`group relative ${categoryColors[category]} text-white font-semibold py-2 px-4 rounded-full shadow-md transition-transform duration-300 hover:scale-110`}>
                                {skill.name}
                            </div>
                        ))}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Skills;
